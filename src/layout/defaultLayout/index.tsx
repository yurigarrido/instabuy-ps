import { Outlet } from 'react-router-dom'
import * as S from './styles'
import { useShoppingCartContext } from '@/shared/context'
import { useLayoutContext } from '../context'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Categories } from './components/categories'

export const DefaultLayout = () => {
  const { cartOpen } = useShoppingCartContext()
  const { isLoading } = useLayoutContext()
  return (
    <S.LayoutCountainer hidden={cartOpen || isLoading}>
      <Header />
      <S.Content>
        <Categories />
        <Outlet />
        <Footer />
      </S.Content>
    </S.LayoutCountainer>
  )
}
