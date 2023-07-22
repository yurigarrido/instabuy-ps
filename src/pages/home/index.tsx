import { Text } from '@/shared/components/text'
import * as S from './styles'
import { generateImageUrl } from '@/shared/constants'
import { formatCurrency } from '@/shared/utils/formatter'
import { useNavigate } from 'react-router'
import { Carrousel } from '@/shared/components/carrousel'
import { MagnifyingGlass } from 'phosphor-react'
import { Pagination } from './components'
import { useProductsContext } from './context/products/products'
export const Home = () => {
  const navigate = useNavigate()
  const { isLoading, products } = useProductsContext()

  if (isLoading) return 'Carregando..'

  return (
    <S.Container>
      <S.FlexContainer>
        <Carrousel>
          {products.slice(0, 15).map((product, index) => {
            return (
              <S.Product
                className={`keen-slider__slide number-slide${index}`}
                key={product.id}
                onClick={() => navigate(`/product/${product.slug}`)}
              >
                <img
                  src={generateImageUrl(product.imageUrl)}
                  alt={product.slug}
                />
                <div>
                  <Text size="4xl" bold>
                    {formatCurrency(product.price)}
                  </Text>
                  <Text size="2xl" bold>
                    {formatCurrency(product.price * 1.1)}
                  </Text>
                </div>
                <Text size="2xl">{product.name}</Text>
              </S.Product>
            )
          })}
        </Carrousel>
      </S.FlexContainer>

      <S.ProductsView>
        <S.Heading>
          <MagnifyingGlass size={36} />
          <Text size="5xl" bold>
            Mais Procurados
          </Text>
        </S.Heading>
        <S.FlexContainer>
          {products.slice(15, products.length).map((product) => {
            return (
              <S.Product
                key={product.id}
                onClick={() => navigate(`/product/${product.slug}`)}
              >
                <img
                  src={generateImageUrl(product.imageUrl)}
                  alt={product.slug}
                />
                <Text size="2xl">{product.name}</Text>
                <Text size="4xl">{formatCurrency(product.price)}</Text>
              </S.Product>
            )
          })}
        </S.FlexContainer>

        <Pagination />
      </S.ProductsView>
    </S.Container>
  )
}
