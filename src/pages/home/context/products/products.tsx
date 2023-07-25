import constate from 'constate'
import { useCallback, useMemo, useState } from 'react'
import { getProducts } from '../../services/getProducts'
import { Product } from '../../models/product'
import { useQuery } from 'react-query'
import { getBanners } from '../../services/getBanners'
import { Banner } from '../../models/banner'

function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [banners, setBanners] = useState<Banner[]>([])
  const [loadingMoreProducts, setloadingMoreProducts] = useState(false)
  const [pagination, setPagination] = useState<number>(2)

  const defaultPage = 1
  const { isLoading } = useQuery('products', () => getProducts(defaultPage), {
    onSuccess(data) {
      setProducts(data)
    },
  })

  useQuery('banners', () => getBanners(), {
    onSuccess(data) {
      setBanners(data.filter((banner) => banner.isDesktop))
    },
  })

  const getMoreProducts = useCallback(async () => {
    setloadingMoreProducts(true)
    const products = await getProducts(pagination)
    setPagination((prevPagination) => prevPagination + 1)
    setloadingMoreProducts(false)
    setProducts((previousProducts) => [...previousProducts, ...products])
  }, [pagination])

  return useMemo(
    () => ({
      products,
      banners,
      isLoading,
      getMoreProducts,
      loadingMoreProducts,
    }),
    [banners, getMoreProducts, isLoading, loadingMoreProducts, products],
  )
}
export const [ProductsProvider, useProductsContext] = constate(useProducts)
