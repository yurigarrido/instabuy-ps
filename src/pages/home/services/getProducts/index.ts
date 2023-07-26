import { api } from '@/shared/api'
import { ProductsData } from './types'
import { Product } from '../../models/product'

export interface ProductsResponse {
  products: Product[]
  total: number
}

export const getProducts = async (page: number): Promise<ProductsResponse> => {
  const { data } = await api.get<ProductsData>('/item', {
    params: { subdomain: 'supermercado', N: 30, page },
  })
  const parsedProducts = data.data.map((product) => {
    return {
      id: product.id,
      imageUrl: product.images[0],
      description: product.description,
      name: product.name,
      slug: product.slug,
      price: product.prices[0].price,
    }
  })

  return {
    products: parsedProducts,
    total: data.count,
  }
}
