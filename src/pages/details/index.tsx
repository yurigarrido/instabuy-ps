import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { useState } from 'react'
import { getProductDetails } from './services/getProductDetails'

import * as S from './styles'
import { generateImageUrl } from '@/shared/constants'
import { Text } from '@/shared/components/text'
import { formatCurrency } from '@/shared/utils/formatter'
import { Button } from '@/shared/components/button'
import { Plus, TrashSimple } from 'phosphor-react'
import { Carrousel } from '@/shared/components/carrousel'
import { ProductDetails } from './models/product'
import { useShoppingCartContext } from '@/shared/context'
import { toast } from 'react-hot-toast'
import { DetailsSkeleton } from './components'
import notFoundImage from '@/shared/assets/undraw_space.svg'

export const Details = () => {
  const { slug } = useParams()

  const [product, setProduct] = useState<ProductDetails>()
  const [notFound, setNotFound] = useState(true)
  const { addProduct, removeProduct, getProductOnCart, deleteItemOnCart } =
    useShoppingCartContext()

  const { isLoading } = useQuery(
    slug || 'search',
    () => getProductDetails(slug),
    {
      onSuccess(data) {
        setProduct(data)
      },
      onError() {
        toast.error(
          'Tivemos um problema ao carregar o produto, por favor tente novamente.',
        )
        setNotFound(true)
      },
    },
  )

  if (notFound)
    return (
      <S.Container>
        <S.Content>
          <S.NotFoundProduct>
            <img src={notFoundImage} alt="" />
            <Text size="4xl">Produto não encontrado</Text>
          </S.NotFoundProduct>
        </S.Content>
      </S.Container>
    )

  if (isLoading || !product) return <DetailsSkeleton />

  const cartInformations = getProductOnCart(product?.id)

  return (
    <S.Container>
      <S.Grid>
        <Carrousel showPoints>
          {product.imagesUrl.map((url, index) => (
            <S.ImageContainer
              key={url}
              className={`keen-slider__slide number-slide${index}`}
            >
              <img src={generateImageUrl(url, 'big')} alt="" />
            </S.ImageContainer>
          ))}
        </Carrousel>
        <div>
          <Text size="5xl" bold>
            {product.name}
          </Text>
          <S.FlexContainer>
            <Text size="6xl">{formatCurrency(product.price)}</Text>
            <Text size="4xl"> /uni</Text>
          </S.FlexContainer>
          <S.CartControl>
            <S.FlexContainer>
              <Button
                color="gray"
                size="lg"
                onClick={() => removeProduct(product)}
              >
                <TrashSimple size={16} />
              </Button>
              <div>{cartInformations?.quantity || 0}</div>
              <Button
                color="gray"
                size="lg"
                onClick={() => addProduct(product)}
              >
                <Plus size={16} />
              </Button>
            </S.FlexContainer>

            {cartInformations ? (
              <Button
                full
                color="red"
                size="lg"
                onClick={() => {
                  deleteItemOnCart(product.id)
                  toast.success('Produto removido')
                }}
              >
                Remover
              </Button>
            ) : (
              <Button
                full
                size="lg"
                onClick={() => {
                  addProduct(product)
                  toast.success('Produto adicionado!')
                }}
              >
                Adicionar
              </Button>
            )}
          </S.CartControl>
        </div>
      </S.Grid>
      <S.Content>
        <Text bold size="4xl">
          Descrição
        </Text>
        {product.description}
      </S.Content>
      <S.Content>
        <Text bold size="4xl">
          Observações
        </Text>
        Informações sobre o produto ou embalagem apresentada pode não ser atual
        ou completo. Sempre consulte o produto físico para as informações mais
        precisas e avisos. Para obter informações adicionais, entre em contato
        com o revendedor ou fabricante.
      </S.Content>
    </S.Container>
  )
}
