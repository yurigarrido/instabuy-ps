import constate from 'constate'
import { useMemo, useState } from 'react'
import { Product } from '../../models/product'

interface CartProduct extends Product {
  quantity: number
  id: string
}

function useShoppingCart() {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  const addProduct = (product: Omit<CartProduct, 'quantity'>) => {
    console.log(product)

    const addeddProduct = cartProducts.find(
      (addedProduct) => addedProduct.id === product.id,
    )
    console.log(addeddProduct)

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

    setCartProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  console.log(cartProducts)

  return useMemo(
    () => ({
      addProduct,
      cartProducts,
      count: cartProducts.length,
    }),
    [cartProducts],
  )
}
export const [ShoppingCartProvider, useShoppingCartContext] =
  constate(useShoppingCart)
