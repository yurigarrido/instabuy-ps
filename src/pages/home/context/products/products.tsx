import constate from 'constate'
import { useCallback, useMemo, useState } from 'react'
import { getProducts } from '../../services/getProducts'
import { Product } from '../../../../shared/models/product'
import { useQuery } from 'react-query'
import { getLayoutContent } from '../../services/getLayoutContent'
import { Banner } from '../../models/banner'
import { Category } from '../../models/category'
import { useWindowSize } from '@/shared/hooks/useWindowSize'

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [promoProducts, setPromoProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [banners, setBanners] = useState<Banner[]>([])
  const [loadingMoreProducts, setloadingMoreProducts] = useState(false)
  const [pagination, setPagination] = useState<number>(2)
  const [totalProducts, setTotalProducts] = useState(0)

  const device = useWindowSize()

  const defaultPage = 1
  const { isLoading } = useQuery('products', () => getProducts(defaultPage), {
    onSuccess(data) {
      setProducts(data.products)
      setTotalProducts(data.total)
    },
  })

  const { isLoading: isLoadingLayoutContent } = useQuery(
    'promoProducts',
    () => getLayoutContent(),
    {
      onSuccess({ banners, categories, products }) {
        setPromoProducts(products.list)
        setBanners(banners)
        setCategories(categories)
      },
    },
  )

  const getMoreProducts = useCallback(async () => {
    setloadingMoreProducts(true)
    const { products } = await getProducts(pagination)
    setPagination((prevPagination) => prevPagination + 1)
    setloadingMoreProducts(false)
    setProducts((previousProducts) => [...previousProducts, ...products])
  }, [pagination])

  const isDesktop = device === 'desktop' || device === 'bigdesktop'
  const bannersComaptibleWithDevice = useMemo(() => {
    return banners.filter((banner) =>
      isDesktop ? banner.isDesktop : banner.isMobile,
    )
  }, [banners, isDesktop])

  return useMemo(
    () => ({
      products,
      promoProducts,
      banners: bannersComaptibleWithDevice,
      categories,
      isLoading,
      isLoadingLayoutContent,
      getMoreProducts,
      totalProducts,
      loadingMoreProducts,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      banners,
      categories,
      getMoreProducts,
      isLoading,
      loadingMoreProducts,
      products,
      promoProducts,
      totalProducts,
    ],
  )
}
export const [ProductsProvider, useProductsContext] = constate(useProducts)
