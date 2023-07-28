import { api } from '@/shared/api'
import { LayoutData } from './types'
import { endpoints } from '@/shared/api/endpoints'
import { Product } from '../../models/product'
import { Banner } from '../../models/banner'
import { Category } from '../../models/category'

export interface ProductsResponse {
  products: { list: Product[]; total: number }
  banners: Banner[]
  categories: Category[]
}

export const getLayoutContent = async (): Promise<ProductsResponse> => {
  const {
    data: { data },
  } = await api.get<LayoutData>(endpoints.promoProducts, {
    params: { subdomain: 'supermercado' },
  })

  const parsedProducts = data.promo.map((product) => {
    return {
      id: product.id,
      imageUrl: product.images[0],
      description: product.description,
      name: product.name,
      slug: product.slug,
      price: product.prices[0].price,
      promoPrice: product.prices[0].promo_price,
    }
  })

  const banners = data.banners.map((banner) => {
    return {
      id: banner.id,
      imageUrl: banner.image,
      isDesktop: banner.is_desktop,
      isMobile: banner.is_mobile,
    }
  })

  const categories = data.collection_items.map((category) => {
    return {
      id: category.id,
      name: category.title,
      slug: category.slug,
      products: category.items.map((item) => ({
        id: item.id,
        imageUrl: item.images[0],
        description: item.description,
        name: item.name,
        slug: item.slug,
        price: item.prices[0].price,
      })),
    }
  })

  return {
    products: { list: parsedProducts, total: parsedProducts.length },
    banners,
    categories,
  }
}
