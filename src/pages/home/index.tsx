import { Text } from '@/shared/components/text'
import { useProducts } from './context/products/products'
import * as S from './styles'
import { generateImageUrl } from '@/shared/constants'
import { formatCurrency } from '@/shared/utils/formatter'
import { useNavigate } from 'react-router'
export const Home = () => {
  const navigate = useNavigate()
  const { isLoading, products } = useProducts()

  if (isLoading) return 'Carregando..'

  return (
    <S.Container>
      {products.map((product) => {
        return (
          <S.Product
            key={product.id}
            onClick={() => navigate(`/product/${product.slug}`)}
          >
            <img src={generateImageUrl(product.imageUrl)} alt={product.slug} />
            <Text size="2xl">{product.name}</Text>
            <Text size="4xl">{formatCurrency(product.price)}</Text>
          </S.Product>
        )
      })}
    </S.Container>
  )
}
