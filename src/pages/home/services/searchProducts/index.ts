import { api } from '@/shared/api'
import { ProductsData } from './types'
import { Product } from '../../models/product'

export const searchProducts = async (query: string): Promise<Product[]> => {
  const {
    data: { data },
  } = await api.get<ProductsData>('/search', {
    params: {
      subdomain: 'supermercado',
      N: 30,
      search: query,
    },
  })

  const parsedProducts = data.map((product) => {
    return {
      id: product.id,
      imageUrl: product.images[0],
      description: product.description,
      name: product.name,
      slug: product.slug,
      price: product.prices[0].price,
    }
  })

  return parsedProducts
}
