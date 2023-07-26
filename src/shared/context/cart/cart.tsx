import constate from 'constate'
import { useMemo, useState, useCallback } from 'react'
import { Product } from '../../../pages/home/models/product'

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

  const removeProduct = useCallback(
    (product: Omit<CartProduct, 'quantity'>) => {
      const addeddProduct = cartProducts.find(
        (addedProduct) => addedProduct.id === product.id,
      )

      if (addeddProduct) {
        const isLastProdcut = addeddProduct.quantity === 1

        if (isLastProdcut) {
          return setCartProducts((products) => {
            return products.filter(
              (savedProduct) => savedProduct.id !== addeddProduct.id,
            )
          })
        }

        return setCartProducts((products) => {
          return products.map((prod) => {
            if (prod.id === addeddProduct.id) {
              return { ...prod, quantity: prod.quantity - 1 }
            }
            return prod
          })
        })
      }
    },
    [cartProducts],
  )

  const getProductOnCart = useCallback(
    (productId: string) => {
      return cartProducts.find((product) => product.id === productId)
    },
    [cartProducts],
  )

  const deleteItemOnCart = useCallback((productId: string) => {
    return setCartProducts((cartProducts) =>
      cartProducts.filter((product) => product.id !== productId),
    )
  }, [])

  const count = cartProducts.reduce((sum, prod) => sum + prod.quantity, 0)

  return useMemo(
    () => ({
      addProduct,
      removeProduct,
      deleteItemOnCart,
      cartProducts,
      count,
      getProductOnCart,
    }),
    [
      addProduct,
      cartProducts,
      count,
      deleteItemOnCart,
      getProductOnCart,
      removeProduct,
    ],
  )
}
export const [ShoppingCartProvider, useShoppingCartContext] =
  constate(useShoppingCart)
