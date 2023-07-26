import { Text } from '@/shared/components/text'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import { useEffect, useState, useCallback } from 'react'
import { searchProducts } from '../home/services/searchProducts'
import { Product as ProductType } from '../home/models/product'
import Breadcrumbs from '@/shared/components/breadcrumbs'
import { useLayoutContext } from '@/layout/context'
import { Product } from '@/shared/components/product'
import { Button } from '@/shared/components/button'
import { Plus } from 'phosphor-react'

export const Search = () => {
  const { query } = useParams()
  const [products, setProducts] = useState<ProductType[]>([])
  const { loading, loaded } = useLayoutContext()
  const [loadingMoreProducts, setloadingMoreProducts] = useState(false)
  const [pagination, setPagination] = useState<number>(2)
  const [totalProducts, setTotalProducts] = useState(0)

  const defaultPage = 1

  const getProducts = useCallback(
    async (query: string | undefined) => {
      if (!query) return
      loading()
      const { products, total } = await searchProducts(query, defaultPage)
      setProducts(products)
      setTotalProducts(total)
      loaded()
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
    getProducts(query)
  }, [getProducts, query])

  return (
    <S.Container>
      <S.InformationsContainer>
        <Breadcrumbs />
        <Text size="5xl" bold>
          Resultados para {`"${query}"`}{' '}
        </Text>
        <Text size="xl"> {products.length} resultados encontrados</Text>
      </S.InformationsContainer>

      <S.ProductsView>
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
      </S.ProductsView>
    </S.Container>
  )
}
