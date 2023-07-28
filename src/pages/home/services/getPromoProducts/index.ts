import { api } from '@/shared/api'
import { ProductsData } from './types'
import { endpoints } from '@/shared/api/endpoints'
import { Product } from '../../models/product'

export interface ProductsResponse {
  products: Product[]
  total: number
}

export const getPromoProducts = async (): Promise<ProductsResponse> => {
  const {
    data: { data },
  } = await api.get<ProductsData>(endpoints.promoProducts, {
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

  return {
    products: parsedProducts,
    total: parsedProducts.length,
  }
}
