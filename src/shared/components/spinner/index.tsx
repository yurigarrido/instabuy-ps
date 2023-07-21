import * as S from './styles'

export type SpinnerProps = {
  color?: string
  position?: 'center' | 'left' | 'right'
}

export function Spinner({ color, position }: SpinnerProps) {
  return (
    <S.Container css={{ color }} position={position}>
      <span />
    </S.Container>
  )
}
