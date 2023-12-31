import { api } from '@/shared/api'
import { ProductData } from './types'
import { ProductDetails } from '../../models/product'
import { endpoints } from '@/shared/api/endpoints'

export const getProductDetails = async (
  slug: string | undefined,
): Promise<ProductDetails> => {
  try {
    const {
      data: { data },
    } = await api.get<ProductData>(endpoints.products, {
      params: { subdomain: 'supermercado', slug },
    })

    return {
      id: data[0].id,
      imageUrl: data[0].images[0],
      imagesUrl: data[0].images,
      description: data[0].description.replace('<p>', '').replace('</p>', ''),
      name: data[0].name,
      slug: data[0].slug,
      price: data[0].prices[0].price,
    }
  } catch (error) {
    throw new Error()
  }
}
