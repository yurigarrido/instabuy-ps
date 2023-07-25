import { CaretRight } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'
import * as S from './styles'

const Breadcrumbs = () => {
  const location = useLocation()

  const currentPath = location.pathname.split('/')[1]

  const paths = {
    search: 'Pesquisar',
  }

  return (
    <S.BreadcrumbsContainer>
      <Link to={'/'}>Home</Link> <CaretRight size={16} />
      <span>{paths[currentPath as keyof typeof paths] ?? ''}</span>
    </S.BreadcrumbsContainer>
  )
}

export default Breadcrumbs
