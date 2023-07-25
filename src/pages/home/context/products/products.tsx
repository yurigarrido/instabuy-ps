import constate from 'constate'
import { useCallback, useMemo, useState } from 'react'
import { getProducts } from '../../services/getProducts'
import { Product } from '../../models/product'
import { useQuery } from 'react-query'
import { useLayoutContext } from '@/layout/context'

function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loadingMoreProducts, setloadingMoreProducts] = useState(false)
  const [pagination, setPagination] = useState<number>(2)

  const { loaded, loading } = useLayoutContext()

  const defaultPage = 1
  const { isLoading } = useQuery('products', () => getProducts(defaultPage), {
    onSuccess(data) {
      setProducts(data)
    },
  })

  const getMoreProducts = useCallback(async () => {
    setloadingMoreProducts(true)
    loading()
    const products = await getProducts(pagination)
    setPagination((prevPagination) => prevPagination + 1)
    setloadingMoreProducts(false)
    loaded()
    setProducts((previousProducts) => [...previousProducts, ...products])
  }, [loaded, loading, pagination])

  return useMemo(
    () => ({
      products,
      isLoading,
      getMoreProducts,
      loadingMoreProducts,
    }),
    [getMoreProducts, isLoading, loadingMoreProducts, products],
  )
}
export const [ProductsProvider, useProductsContext] = constate(useProducts)
