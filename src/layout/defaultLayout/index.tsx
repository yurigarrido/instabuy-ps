import { Outlet } from 'react-router-dom'
import * as S from './styles'
import { Header } from '@/shared/components/header'
import { Footer } from '@/shared/components/footer'
import { useShoppingCartContext } from '@/shared/context'

export const DefaultLayout = () => {
  const { cartOpen } = useShoppingCartContext()
  return (
    <S.LayoutCountainer hidden={cartOpen}>
      <Header />
      <S.Content>
        <Outlet />
        <Footer />
      </S.Content>
    </S.LayoutCountainer>
  )
}
