import { Text } from '@/shared/components/text'
import * as S from './styles'
import { generateBannerUrl } from '@/shared/constants'
import { Carrousel } from '@/shared/components/carrousel'
import { CaretRight, Lightning, MagnifyingGlass, Plus } from 'phosphor-react'
import { Pagination } from './components'
import { useProductsContext } from './context/products/products'
import { Banners } from '@/shared/components/banners'
import { Product } from '@/shared/components/product'
import { useWindowSize } from '@/shared/hooks/useWindowSize'
import { HomeSkeleton } from './components/skeleton'
import emptyList from '@/shared/assets/undraw_empty.svg'
import { useState } from 'react'
import { Button } from '@/shared/components/button'
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {
  const {
    isLoading,
    products,
    totalProducts,
    promoProducts,
    isLoadingLayoutContent,
    banners,
    categories,
  } = useProductsContext()
  const navigate = useNavigate()
  const [showAllCategories, setShowAllCategories] = useState(false)
  const device = useWindowSize()
  const isMobile = device === 'mobile'

  if (isLoading || isLoadingLayoutContent) return <HomeSkeleton />

  const itensPerPage = {
    desktop: 4.6,
    tablet: 2.6,
    bigdesktop: 5.6,
    mobile: 1,
  }

  return (
    <S.Container>
      {!!banners.length && !isMobile && (
        <Banners>
          {banners.map((banner, index) => {
            return (
              <S.BannerImg
                loading="lazy"
                className={`keen-slider__slide number-slide${index}`}
                key={banner.id}
                src={generateBannerUrl(banner.imageUrl)}
                alt=""
                onClick={() => navigate('/search/ofertas')}
              />
            )
          })}
        </Banners>
      )}

      {promoProducts.length && (
        <S.FlexContainer>
          <S.CarrouselContainer>
            <S.Heading>
              <div>
                <Lightning size={36} />
                <Text size="5xl" bold>
                  Ofertas
                </Text>
              </div>
            </S.Heading>

            <Carrousel loop itemsPerView={itensPerPage[device]} showControls>
              {promoProducts.map((product, index) => {
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
      )}

      {categories.length &&
        categories
          .slice(0, Math.round(categories.length / 2))
          .map((category) => {
            return (
              <S.FlexContainer key={category.id}>
                <S.CarrouselContainer>
                  <S.Heading>
                    <Text size="5xl" bold>
                      {category.name}
                    </Text>
                    <div>
                      <Link to={`/category/${category.slug}`}>Ver mais</Link>
                      <CaretRight size={18} />
                    </div>
                  </S.Heading>

                  <Carrousel
                    loop
                    itemsPerView={itensPerPage[device]}
                    showControls
                  >
                    {category.products.map((product, index) => {
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
            )
          })}

      {!!categories.length && showAllCategories ? (
        categories
          .slice(Math.round(categories.length / 2), categories.length)
          .map((category) => {
            return (
              <S.FlexContainer key={category.id}>
                <S.CarrouselContainer>
                  <S.Heading>
                    <Text size="5xl" bold>
                      {category.name}
                    </Text>
                    <div>
                      <Link to={`/category/${category.slug}`}>Ver mais</Link>
                      <CaretRight size={18} />
                    </div>
                  </S.Heading>

                  <Carrousel
                    loop
                    itemsPerView={itensPerPage[device]}
                    showControls
                  >
                    {category.products.map((product, index) => {
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
            )
          })
      ) : (
        <Button
          color="orange"
          size="lg"
          weight="bold"
          leftIcon={<Plus size={24} />}
          onClick={() => setShowAllCategories(true)}
        >
          Ver todas categorias
        </Button>
      )}

      <S.ProductsView>
        <S.Heading>
          <div>
            <MagnifyingGlass size={36} />
            <Text size="5xl" bold>
              Mais Procurados
            </Text>
          </div>
        </S.Heading>
        <S.FlexContainer>
          {products.length ? (
            <>
              {products.slice(15, products.length).map((product, index) => {
                return (
                  <Product
                    product={product}
                    key={product.id}
                    position={index}
                  />
                )
              })}
            </>
          ) : (
            <S.EmptyList>
              <img src={emptyList} alt="" />
              <Text size="4xl">Nenhum produto encontrado</Text>
            </S.EmptyList>
          )}
        </S.FlexContainer>

        {totalProducts > products.length && <Pagination />}
      </S.ProductsView>
    </S.Container>
  )
}
