import { Text } from '@/shared/components/text'
import * as S from './styles'
import { generateBannerUrl, generateImageUrl } from '@/shared/constants'
import { formatCurrency } from '@/shared/utils/formatter'
import { useNavigate } from 'react-router'
import { Carrousel } from '@/shared/components/carrousel'
import { MagnifyingGlass } from 'phosphor-react'
import { Pagination, Product } from './components'
import { useProductsContext } from './context/products/products'
import { Banners } from '@/shared/components/banners'
export const Home = () => {
  const navigate = useNavigate()
  const { isLoading, products, banners } = useProductsContext()

  if (isLoading) return 'Carregando..'

  return (
    <S.Container>
      <Banners>
        {banners.map((banner, index) => {
          return (
            <S.BannerImg
              className={`keen-slider__slide number-slide${index}`}
              key={banner.id}
              src={generateBannerUrl(banner.imageUrl)}
              alt=""
            />
          )
        })}
      </Banners>
      <S.FlexContainer>
        <Carrousel>
          {products.slice(1, 15).map((product, index) => {
            return (
              <Product
                product={product}
                key={product.id}
                position={index}
                slider
              />
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
          {products.slice(15, products.length).map((product, index) => {
            return (
              <Product product={product} key={product.id} position={index} />
            )
          })}
        </S.FlexContainer>

        <Pagination />
      </S.ProductsView>
    </S.Container>
  )
}
