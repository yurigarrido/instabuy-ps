import { ArrowLeft } from 'phosphor-react'
import * as S from './styles'
import { Text } from '@/shared/components/text'
import { Button } from '@/shared/components/button'
import { Products } from '..'
import { useShoppingCartContext } from '@/shared/context'
import { formatCurrency } from '@/shared/utils/formatter'
import { useOutsideClick } from '@/shared/hooks/useOutsideClick'
import { toast } from 'react-hot-toast'
import { useState } from 'react'

interface ShoppingCartProps {
  open: boolean
  close: () => void
}

export const ShoppingCart = ({ open, close }: ShoppingCartProps) => {
  const { finalPrice, cartProducts, cleanShoopingCart } =
    useShoppingCartContext()

  const [closedCart, setClosedCart] = useState(false)

  const closeCart = () => {
    setClosedCart(true)
    setTimeout(() => {
      close()
      setClosedCart(false)
    }, 290)
  }

  const ref = useOutsideClick(() => {
    if (open && !closedCart) {
      closeCart()
    }
  })

  const handleOnClick = () => {
    toast.success('Pedido realizado com sucesso!')
    closeCart()
    cleanShoopingCart()
  }

  if (!open) return

  return (
    <S.Container>
      <S.Cart ref={ref} closed={closedCart}>
        <S.Heading>
          <Button
            color="gray"
            title="Fechar carrinho"
            onClick={() => closeCart()}
          >
            <ArrowLeft size={18} />
          </Button>
          <Text size="4xl" bold>
            Meu Carrinho
          </Text>
          <Button
            color="gray"
            onClick={() => {
              cleanShoopingCart()
              toast.success('Produtos removidos.')
            }}
          >
            Limpar
          </Button>
        </S.Heading>
        <S.Main>
          <Products closeCart={() => closeCart()} />
        </S.Main>
        <S.Footer>
          <Button
            size="lg"
            full
            alignContent="space"
            weight="bold"
            disabled={!cartProducts.length}
            onClick={handleOnClick}
          >
            <div>Finalizar Compra</div>
            <div>{formatCurrency(finalPrice)}</div>
          </Button>
        </S.Footer>
      </S.Cart>
    </S.Container>
  )
}
