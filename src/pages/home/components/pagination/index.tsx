import { Button } from '@/shared/components/button'
import * as S from './styles'
import { Plus } from 'phosphor-react'
import { useProductsContext } from '../../context/products/products'

export const Pagination = () => {
  const { getMoreProducts, loadingMoreProducts } = useProductsContext()
  return (
    <S.Container>
      <Button
        size="lg"
        color="orange"
        weight="bold"
        leftIcon={<Plus size={24} />}
        onClick={getMoreProducts}
        loading={loadingMoreProducts}
      >
        Carregar mais
      </Button>
    </S.Container>
  )
}
