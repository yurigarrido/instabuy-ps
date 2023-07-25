import { api } from '@/shared/api'
import { ProductsData } from './types'
import { Product } from '../../models/product'
import axios from 'axios'

export const getProductsFromCategory = async (): Promise<Product[]> => {
  const {
    data: { data },
  } = await axios.get<ProductsData>(
    'https://supermercado.instabuy.com.br/apiv3/recommendation_system/category/600af1f42419bc21c6f223ce?subdomain=supermercado&page=1&N=10',
    {
      params: { subdomain: 'supermercado', N: 10 },
    },
  )
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
  // return parsedProducts
}
