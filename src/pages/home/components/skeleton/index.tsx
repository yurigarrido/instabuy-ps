import { useWindowSize } from '@/shared/hooks/useWindowSize'
import * as S from './styles'
export const HomeSkeleton = () => {
  const device = useWindowSize()

  const isDesktop = device === 'desktop' || device === 'bigdesktop'

  const card = new Array(20).fill('card')

  const itensPerPage = {
    desktop: 4,
    tablet: 2,
    bigdesktop: 5,
    mobile: 1,
  }

  const promoCard = new Array(itensPerPage[device]).fill('card')

  return (
    <S.Container>
      {isDesktop && <S.Banner></S.Banner>}

      <S.FlexContainer>
        <S.Title />

        <S.FlexContainer direction="row" overflow="hidden">
          {promoCard.map(() => {
            return <S.Card key={crypto.randomUUID()} />
          })}
        </S.FlexContainer>
      </S.FlexContainer>

      <S.FlexContainer>
        <S.Title />
        <S.FlexContainer direction="row">
          {card.map(() => {
            return <S.Card key={crypto.randomUUID()} />
          })}
        </S.FlexContainer>
      </S.FlexContainer>
    </S.Container>
  )
}
