import Breadcrumbs from '@/shared/components/breadcrumbs'
import * as S from './styles'
import { useCallback, useState, useEffect } from 'react'
import { useLayoutContext } from '@/layout/context'
import { searchProducts } from './services/searchProductsFromCategory'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { Product } from '@/shared/components/product'
import { Button } from '@/shared/components/button'
import { Plus } from 'phosphor-react'
import { Text } from '@/shared/components/text'
import { useProductsContext } from '../home/context/products/products'
import { Product as ProductType } from '@/shared/models/product'
import { CategorySkeleton } from './components'
import notFoundImage from '@/shared/assets/undraw_space.svg'

export const Category = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [notFound, setNotFound] = useState(true)
  const { categories } = useProductsContext()
  const { loading, loaded, isLoading } = useLayoutContext()
  const [loadingMoreProducts, setloadingMoreProducts] = useState(false)
  const [pagination, setPagination] = useState<number>(2)
  const [totalProducts, setTotalProducts] = useState(0)

  const { slug } = useParams()

  const getProducts = useCallback(
    async (query: string | undefined) => {
      if (!query) return
      try {
        loading()
        const { products, total } = await searchProducts(query, 1)
        if (!products.length) {
          setNotFound(true)
          loaded()
          return
        }
        setProducts(products)
        setTotalProducts(total)
        loaded()
      } catch (error) {
        loaded()
        toast.error(
          'Tivemos um problema para encontrar o produto, por favor tente novamente',
        )
      }
    },
    [loaded, loading],
  )

  const currentCategory = categories.find((categ) => categ.slug === slug)

  const getMoreProducts = useCallback(async () => {
    setloadingMoreProducts(true)
    const { products } = await searchProducts(slug || '', pagination)
    setPagination((prevPagination) => prevPagination + 1)
    setloadingMoreProducts(false)
    setProducts((previousProducts) => [...previousProducts, ...products])
  }, [pagination, slug])

  useEffect(() => {
    setTotalProducts(0)
    setNotFound(false)
    getProducts(slug)
  }, [getProducts, slug])

  return (
    <S.Container>
      <Breadcrumbs />

      <>
        <Text size="5xl" bold>
          {currentCategory?.name}
        </Text>
        {!!totalProducts && (
          <Text size="xl"> {products.length} resultados encontrados</Text>
        )}
      </>

      <S.Content>
        {notFound ? (
          <S.NotFound>
            <img src={notFoundImage} alt="" />
            <Text size="4xl">Nenhum produto encontrado</Text>
          </S.NotFound>
        ) : (
          <S.ProductsWrapper>
            {isLoading ? (
              <CategorySkeleton />
            ) : (
              <>
                <S.ProductsContainer>
                  {products.map((product) => (
                    <Product product={product} key={product.id} />
                  ))}
                </S.ProductsContainer>
                {totalProducts > products.length && (
                  <S.ButtonContainer>
                    <Button
                      size="lg"
                      color="orange"
                      weight="bold"
                      leftIcon={<Plus size={24} />}
                      onClick={getMoreProducts}
                      loading={loadingMoreProducts}
                      disabled={loadingMoreProducts}
                    >
                      Carregar mais
                    </Button>
                  </S.ButtonContainer>
                )}
              </>
            )}
          </S.ProductsWrapper>
        )}
      </S.Content>
    </S.Container>
  )
}
