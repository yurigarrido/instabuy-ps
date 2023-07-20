import { Outlet } from 'react-router-dom'
import * as S from './styles'
import { Header } from '@/shared/components/header'
import { Footer } from '@/shared/components/footer'

export const DefaultLayout = () => {
  return (
    <S.LayoutCountainer>
      <Header/>
    <S.Content>
      <Outlet/>
      <Footer/>
    </S.Content>
    </S.LayoutCountainer>
  )
}

