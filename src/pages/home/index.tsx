import { Text } from '@/shared/components/text'
import * as S from './styles'
import { generateBannerUrl } from '@/shared/constants'
import { Carrousel } from '@/shared/components/carrousel'
import { Lightning, MagnifyingGlass } from 'phosphor-react'
import { Pagination } from './components'
import { useProductsContext } from './context/products/products'
import { Banners } from '@/shared/components/banners'
import { useQuery } from 'react-query'
import { getBanners } from './services/getBanners'
import { useState } from 'react'
import { Banner } from './models/banner'
import { Product } from '@/shared/components/product'
import { useWindowSize } from '@/shared/hooks/useWindowSize'

export const Home = () => {
  const { isLoading, products, totalProducts } = useProductsContext()
  const device = useWindowSize()
  const isDesktop = device === 'desktop' || device === 'bigdesktop'
  const [banners, setBanners] = useState<Banner[]>([])

  useQuery('banners', () => getBanners(), {
    onSuccess(data) {
      setBanners(data.filter((banner) => banner.isDesktop))
    },
  })

  if (isLoading) return 'Carregando..'

  const itensPerPage = {
    desktop: 4.6,
    tablet: 2.6,
    bigdesktop: 5.6,
    mobile: 1,
  }

  return (
    <S.Container>
      {!!banners.length && isDesktop && (
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
      )}
      <S.FlexContainer>
        <S.CarrouselContainer>
          <S.Heading>
            <Lightning size={36} />
            <Text size="5xl" bold>
              Ofertas
            </Text>
          </S.Heading>
          <Carrousel itemsPerView={itensPerPage[device]} showControls>
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

        {totalProducts > products.length && <Pagination />}
      </S.ProductsView>
    </S.Container>
  )
}
