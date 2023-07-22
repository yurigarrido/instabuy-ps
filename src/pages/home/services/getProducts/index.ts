import { api } from '@/shared/api'
import { ProductsData } from './types'
import { Product } from '../../models/product'

export const getProducts = async (): Promise<Product[]> => {
  const {
    data: { data },
  } = await api.get<ProductsData>('/', {
    params: { subdomain: 'supermercado', N: 10 },
  })
  const parsedProducts = data.map((product) => {
    return {
      id: product.id,
      imageUrl: product.images[0],
      description: product.description,
      name: product.brand,
      slug: product.slug,
      price: product.prices[0].price,
    }
  })

  return parsedProducts
}
