import { Text } from '@/shared/components/text'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import { useEffect, useState, useCallback } from 'react'
import { searchProducts } from './services/searchProducts'
import { Product as ProductType } from '../../shared/models/product'
import Breadcrumbs from '@/shared/components/breadcrumbs'
import { useLayoutContext } from '@/layout/context'
import { Product } from '@/shared/components/product'
import { Button } from '@/shared/components/button'
import { Plus } from 'phosphor-react'
import { SearchSkeleton } from './components'
import { toast } from 'react-hot-toast'
import notFoundImage from '@/shared/assets/undraw_space.svg'

export const Search = () => {
  const { query } = useParams()
  const [products, setProducts] = useState<ProductType[]>([])
  const [notFound, setNotFound] = useState(false)
  const { loading, loaded, isLoading } = useLayoutContext()
  const [loadingMoreProducts, setloadingMoreProducts] = useState(false)
  const [pagination, setPagination] = useState<number>(2)
  const [totalProducts, setTotalProducts] = useState(0)

  const defaultPage = 1

  const getProducts = useCallback(
    async (query: string | undefined) => {
      if (!query) return
      try {
        loading()
        const { products, total } = await searchProducts(query, defaultPage)
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

  const getMoreProducts = useCallback(async () => {
    setloadingMoreProducts(true)
    const { products } = await searchProducts(query || '', pagination)
    setPagination((prevPagination) => prevPagination + 1)
    setloadingMoreProducts(false)
    setProducts((previousProducts) => [...previousProducts, ...products])
  }, [pagination, query])

  useEffect(() => {
    setTotalProducts(0)
    setNotFound(false)
    getProducts(query)
  }, [getProducts, query])

  return (
    <S.Container>
      <S.InformationsContainer>
        <Breadcrumbs />

        <>
          <Text size="5xl" bold>
            Resultados para {`"${query}"`}{' '}
          </Text>
          {!!totalProducts && (
            <Text size="xl"> {products.length} resultados encontrados</Text>
          )}
        </>
      </S.InformationsContainer>

      {isLoading ? (
        <SearchSkeleton />
      ) : (
        <S.ProductsView>
          {notFound ? (
            <S.NotFound>
              <img src={notFoundImage} alt="" />
              <Text size="4xl">Produto não encontrado</Text>
            </S.NotFound>
          ) : (
            <>
              <S.FlexContainer>
                {products.map((product) => {
                  return <Product product={product} key={product.id} />
                })}
              </S.FlexContainer>
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
        </S.ProductsView>
      )}
    </S.Container>
  )
}
