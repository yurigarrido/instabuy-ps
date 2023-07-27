import { useWindowSize } from '@/shared/hooks/useWindowSize'
import * as S from './styles'
export const SearchSkeleton = () => {
  const device = useWindowSize()

  const card = new Array(20).fill('card')

  return (
    <S.Container>
      <S.FlexContainer>
        <S.FlexContainer direction="row">
          {card.map(() => {
            return <S.Card key={crypto.randomUUID()} />
          })}
        </S.FlexContainer>
      </S.FlexContainer>
    </S.Container>
  )
}
