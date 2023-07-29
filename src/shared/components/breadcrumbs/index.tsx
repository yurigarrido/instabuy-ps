import { CaretRight } from 'phosphor-react'
import { Link, useLocation, useParams } from 'react-router-dom'
import * as S from './styles'

const Breadcrumbs = () => {
  const location = useLocation()
  const { slug } = useParams()

  const currentPath = location.pathname.split('/')[1]

  const paths = {
    search: 'Pesquisar',
    category: slug,
  }

  return (
    <S.BreadcrumbsContainer>
      <Link to={'/'}>Home</Link> <CaretRight size={16} />
      <span>{paths[currentPath as keyof typeof paths] ?? ''}</span>
    </S.BreadcrumbsContainer>
  )
}

export default Breadcrumbs
