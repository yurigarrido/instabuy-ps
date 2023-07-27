import { Outlet } from 'react-router-dom'
import * as S from './styles'
import { Header } from '@/shared/components/header'
import { Footer } from '@/shared/components/footer'
import { useShoppingCartContext } from '@/shared/context'
import { useLayoutContext } from '../context'

export const DefaultLayout = () => {
  const { cartOpen } = useShoppingCartContext()
  const { isLoading } = useLayoutContext()
  return (
    <S.LayoutCountainer hidden={cartOpen || isLoading}>
      <Header />
      <S.Content>
        <Outlet />
        <Footer />
      </S.Content>
    </S.LayoutCountainer>
  )
}
