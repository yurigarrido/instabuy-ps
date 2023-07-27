import * as S from './styles'
export const DetailsSkeleton = () => {
  return (
    <S.Container>
      <S.FlexContainer direction="row">
        <S.Card />
        <S.TextContainer>
          <S.Title />
          <S.Title size="sm" />
          <S.Title />
        </S.TextContainer>
      </S.FlexContainer>
      <S.FlexContainer>
        <S.TextContainer>
          <S.Title size="sm" />
          <S.Title />
        </S.TextContainer>
      </S.FlexContainer>
      <S.FlexContainer>
        <S.TextContainer>
          <S.Title size="sm" />
          <S.Title />
        </S.TextContainer>
      </S.FlexContainer>
    </S.Container>
  )
}
