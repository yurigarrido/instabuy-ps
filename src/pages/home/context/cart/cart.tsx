import constate from 'constate'
import { useMemo, useState, useCallback } from 'react'
import { Product } from '../../models/product'

interface CartProduct extends Product {
  quantity: number
  id: string
}

function useShoppingCart() {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  const addProduct = useCallback(
    (product: Omit<CartProduct, 'quantity'>) => {
      const addeddProduct = cartProducts.find(
        (addedProduct) => addedProduct.id === product.id,
      )

      if (addeddProduct) {
        return setCartProducts((products) => {
          return products.map((prod) => {
            if (prod.id === addeddProduct.id) {
              return { ...prod, quantity: prod.quantity + 1 }
            }
            return prod
          })
        })
      }

      setCartProducts((prevState) => [
        ...prevState,
        { ...product, quantity: 1 },
      ])
    },
    [cartProducts],
  )

  return useMemo(
    () => ({
      addProduct,
      cartProducts,
      count: cartProducts.length,
    }),
    [addProduct, cartProducts],
  )
}
export const [ShoppingCartProvider, useShoppingCartContext] =
  constate(useShoppingCart)
