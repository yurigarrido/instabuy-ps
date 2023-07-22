import constate from 'constate'
import { useMemo, useState } from 'react'
import { getProducts } from '../../services/getProducts'
import { Product } from '../../models/product'
import { useQuery } from 'react-query'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])

  const { isLoading } = useQuery('products', () => getProducts(), {
    onSuccess(data) {
      setProducts(data)
    },
  })

  return useMemo(
    () => ({
      products,
      isLoading,
    }),
    [isLoading, products],
  )
}
export const [ProductsProvider, useProductsContext] = constate(useProducts)
