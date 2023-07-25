import { api } from '@/shared/api'
import { ProductData } from './types'
import { Product } from '../../../home/models/product'

export const getProductDetails = async (slug: string): Promise<Product> => {
  const {
    data: { data },
  } = await api.get<ProductData>('/item', {
    params: { subdomain: 'supermercado', slug },
  })

  return {
    id: data[0].id,
    imageUrl: data[0].images[0],
    description: data[0].description,
    name: data[0].brand,
    slug: data[0].slug,
    price: data[0].prices[0].price,
  }
}
