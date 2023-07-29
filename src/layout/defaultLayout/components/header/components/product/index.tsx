import * as S from './styles'
import { CartProduct } from '@/shared/models/cartProduct'
import { generateImageUrl } from '@/shared/constants'
import { Text } from '@/shared/components/text'
import { Button } from '@/shared/components/button'
import { Minus, Plus, Trash, TrashSimple, X } from 'phosphor-react'
import { useShoppingCartContext } from '@/shared/context'
import { formatCurrency } from '@/shared/utils/formatter'
import { useState } from 'react'
import { useOutsideClick } from '@/shared/hooks/useOutsideClick'

interface ProductProps {
  product: CartProduct
}

export const Product = ({ product }: ProductProps) => {
  const { removeProduct, addProduct, deleteItemOnCart } =
    useShoppingCartContext()
  const [changeQuantity, setChangeQuantity] = useState(false)

  const ref = useOutsideClick(() => {
    if (changeQuantity) {
      setChangeQuantity(false)
    }
  })

  return (
    <S.ProductContainer key={product.id}>
      <S.RemoveProductButton
        onClick={() => deleteItemOnCart(product.id)}
        title="Remover item do carrinho"
      >
        <X size={16} />
      </S.RemoveProductButton>
      <S.Image src={generateImageUrl(product.imageUrl, 'small')} alt="" />
      <div>
        <Text size="2xl" bold>
          {product.name}
        </Text>
        <div>Quantidade: {product.quantity}</div>
        <S.QuantityControl ref={ref} visible={changeQuantity}>
          <Button color="gray" size="sm" onClick={() => removeProduct(product)}>
            {product.quantity <= 1 ? (
              <TrashSimple size={16} />
            ) : (
              <Minus size={16} />
            )}
          </Button>
          <div>{product.quantity}</div>
          <Button color="gray" size="sm" onClick={() => addProduct(product)}>
            <Plus size={16} />
          </Button>
        </S.QuantityControl>
        <Text size="2xl">
          {formatCurrency(product.price * product.quantity)}
        </Text>
        <S.ActionsContainer>
          <Button color="white" onClick={() => addProduct(product)}>
            <Plus size={16} />
          </Button>
          <Button color="white" onClick={() => removeProduct(product)}>
            {product.quantity <= 1 ? <Trash size={16} /> : <Minus size={16} />}
          </Button>
        </S.ActionsContainer>
      </div>
    </S.ProductContainer>
  )
}
