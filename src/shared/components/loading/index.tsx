import { useLayoutContext } from '@/layout/context'
import { Spinner } from '../spinner'
import { Text } from '../text'
import * as S from './styles'

export const Loading = () => {
  const { isLoading } = useLayoutContext()

  if (isLoading) {
    return (
      <S.Container>
        <div>
          <Spinner /> <Text size="5xl">Carregando...</Text>
        </div>
      </S.Container>
    )
  }
}
