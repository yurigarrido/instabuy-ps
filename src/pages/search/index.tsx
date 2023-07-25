import { Text } from '@/shared/components/text'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import { useEffect, useState, useCallback } from 'react'
import { searchProducts } from '../home/services/searchProducts'
import { Product as ProductType } from '../home/models/product'
import { Product } from '../home/components'
import Breadcrumbs from '@/shared/components/breadcrumbs'
import { useLayoutContext } from '@/layout/context'

export const Search = () => {
  const { query } = useParams()
  const [products, setProducts] = useState<ProductType[]>([])
  const { loading, loaded } = useLayoutContext()

  const getProducts = useCallback(
    async (query: string | undefined) => {
      if (!query) return
      loading()
      const products = await searchProducts(query)
      setProducts(products)
      loaded()
    },
    [loaded, loading],
  )

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
      </S.ProductsView>
    </S.Container>
  )
}
