import { Text } from '@/shared/components/text'
import { Link, useParams } from 'react-router-dom'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { searchProducts } from '../home/services/searchProducts'
import { Product as ProductType } from '../home/models/product'
import { Product } from '../home/components'
import { CaretRight } from 'phosphor-react'
import Breadcrumbs from '@/shared/components/breadcrumbs'

export const Search = () => {
  const { query } = useParams()
  const [products, setProducts] = useState<ProductType[]>([])

  const getProducts = async (query: string | undefined) => {
    if (!query) return
    const products = await searchProducts(query)
    setProducts(products)
  }

  useEffect(() => {
    getProducts(query)
  }, [query])

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
