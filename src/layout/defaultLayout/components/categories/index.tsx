import { useProductsContext } from '@/pages/home/context/products/products'
import * as S from './styles'
import { Button } from '@/shared/components/button'
import { House } from 'phosphor-react'
import { useNavigate, useParams } from 'react-router-dom'

export const Categories = () => {
  const { categories } = useProductsContext()
  const { slug } = useParams()
  const navigate = useNavigate()
  return (
    <S.NavBar>
      <S.Container>
        <Button
          color="white"
          leftIcon={<House size={24} />}
          onClick={() => navigate('/')}
        >
          Início
        </Button>

        {categories.slice(0, 6).map((category) => (
          <Button
            onClick={() => navigate(`/category/${category.slug}`)}
            color={slug === category.slug ? 'green' : 'white'}
            key={category.id}
          >
            {category.name}
          </Button>
        ))}
      </S.Container>
    </S.NavBar>
  )
}
