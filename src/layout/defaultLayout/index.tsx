import { Outlet } from 'react-router-dom'
import * as S from './styles'

export const DefaultLayout = () => {
  return (
    <S.LayoutCountainer>
      <Outlet/>
    </S.LayoutCountainer>
  )
}

