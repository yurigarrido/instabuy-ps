import { api } from '@/shared/api'
import { ProductsData } from './types'

export const searchProducts = async (query: string): Promise<ProductsData> => {
  const { data } = await api.get<ProductsData>('/search', {
    params: {
      subdomain: 'supermercado',
      N: 30,
      search: 'coca-cola',
    },
  })

  console.log(data)
}
