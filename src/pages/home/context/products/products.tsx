import constate from 'constate'
import { useCallback, useMemo, useState } from 'react'
import { getProducts } from '../../services/getProducts'
import { Product } from '../../models/product'
import { useQuery } from 'react-query'

function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loadingMoreProducts, setloadingMoreProducts] = useState(false)
  const [pagination, setPagination] = useState<number>(2)
  const [totalProducts, setTotalProducts] = useState(0)

  const defaultPage = 1
  const { isLoading } = useQuery('products', () => getProducts(defaultPage), {
    onSuccess(data) {
      setProducts(data.products)
      setTotalProducts(data.total)
    },
  })

  const getMoreProducts = useCallback(async () => {
    setloadingMoreProducts(true)
    const { products } = await getProducts(pagination)
    setPagination((prevPagination) => prevPagination + 1)
    setloadingMoreProducts(false)
    setProducts((previousProducts) => [...previousProducts, ...products])
  }, [pagination])

  return useMemo(
    () => ({
      products,
      isLoading,
      getMoreProducts,
      totalProducts,
      loadingMoreProducts,
    }),
    [getMoreProducts, isLoading, loadingMoreProducts, products, totalProducts],
  )
}
export const [ProductsProvider, useProductsContext] = constate(useProducts)
