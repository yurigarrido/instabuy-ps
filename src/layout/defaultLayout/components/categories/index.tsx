import { useProductsContext } from '@/pages/home/context/products/products'
import * as S from './styles'
import { Button } from '@/shared/components/button'
import { House, List, Tag } from 'phosphor-react'

export const Categories = () => {
  const { categories } = useProductsContext()
  return (
    <S.NavBar>
      <S.Container>
        <Button color="white" leftIcon={<House size={24} />}>
          Início
        </Button>
        <Button color="white" leftIcon={<List size={24} />}>
          Todas Categorias
        </Button>
        <Button color="white" leftIcon={<Tag size={24} />}>
          Ofertas
        </Button>
        {categories.slice(0, 4).map((category) => (
          <Button color="white" key={category.id}>
            {category.name}
          </Button>
        ))}
      </S.Container>
    </S.NavBar>
  )
}
