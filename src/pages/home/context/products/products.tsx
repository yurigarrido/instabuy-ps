import constate from 'constate'
import { useMemo, useState } from 'react'
import { getProducts } from '../../services/getProducts'
import { Product } from '../../models/product'
import { useQuery } from 'react-query'

function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loadingMoreProducts, setloadingMoreProducts] = useState(false)
  const [pagination, setPagination] = useState<number>(2)

  const defaultPage = 1
  const { isLoading } = useQuery('products', () => getProducts(defaultPage), {
    onSuccess(data) {
      setProducts(data)
    },
  })

  const getMoreProducts = async () => {
    setloadingMoreProducts(true)
    const products = await getProducts(pagination)
    setPagination((prevPagination) => prevPagination + 1)
    setloadingMoreProducts(false)
    setProducts((previousProducts) => [...previousProducts, ...products])
  }

  return useMemo(
    () => ({
      products,
      isLoading,
      getMoreProducts,
      loadingMoreProducts,
    }),
    [isLoading, loadingMoreProducts, products],
  )
}
export const [ProductsProvider, useProductsContext] = constate(useProducts)
