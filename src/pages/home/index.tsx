import { Text } from '@/shared/components/text'
import * as S from './styles'
import { generateBannerUrl } from '@/shared/constants'
import { Carrousel } from '@/shared/components/carrousel'
import { Lightning, MagnifyingGlass } from 'phosphor-react'
import { Pagination, Product } from './components'
import { useProductsContext } from './context/products/products'
import { Banners } from '@/shared/components/banners'
import { useQuery } from 'react-query'
import { getBanners } from './services/getBanners'
import { useState } from 'react'
import { Banner } from './models/banner'

export const Home = () => {
  const { isLoading, products } = useProductsContext()
  const [banners, setBanners] = useState<Banner[]>([])

  useQuery('banners', () => getBanners(), {
    onSuccess(data) {
      setBanners(data.filter((banner) => banner.isDesktop))
    },
  })

  if (isLoading) return 'Carregando..'

  return (
    <S.Container>
      <Banners>
        {banners.map((banner, index) => {
          return (
            <S.BannerImg
              loading="lazy"
              className={`keen-slider__slide number-slide${index}`}
              key={banner.id}
              src={generateBannerUrl(banner.imageUrl)}
              alt=""
            />
          )
        })}
      </Banners>
      <S.FlexContainer>
        <S.CarrouselContainer>
          <S.Heading>
            <Lightning size={36} />
            <Text size="5xl" bold>
              Ofertas
            </Text>
          </S.Heading>
          <Carrousel itemsPerView={4.6} showControls>
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
        </S.CarrouselContainer>
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
