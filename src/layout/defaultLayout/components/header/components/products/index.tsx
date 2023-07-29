import { useShoppingCartContext } from '@/shared/context'
import { Product } from '../product'
import { Text } from '@/shared/components/text'
import { Button } from '@/shared/components/button'
import { ArrowLeft, ShoppingCart } from 'phosphor-react'
import * as S from './styles'

interface ProdcutsProps {
  closeCart: () => void
}

export const Products = ({ closeCart }: ProdcutsProps) => {
  const { cartProducts } = useShoppingCartContext()
  return (
    <>
      {!cartProducts.length && (
        <S.EmptyCart>
          <div>
            <ShoppingCart size={64} />
          </div>
          <Text size="4xl">Seu carrinho está vazio.</Text>
          <Text size="2xl">
            Milhares de produtos te aguardam, que tal adicionar um em seu
            carrinho?
          </Text>
          <Button
            color="gray"
            leftIcon={<ArrowLeft size={14} />}
            onClick={closeCart}
          >
            Voltar para a loja
          </Button>
        </S.EmptyCart>
      )}
      {cartProducts.map((product) => {
        return <Product product={product} key={product.id} />
      })}
    </>
  )
}
