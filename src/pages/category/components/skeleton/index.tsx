import * as S from './styles'
export const CategorySkeleton = () => {
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
