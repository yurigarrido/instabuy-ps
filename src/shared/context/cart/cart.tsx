import { useLocalStorage } from '@/shared/hooks/useLocalStorage'
import { CartProduct } from '@/shared/models/cartProduct'
import constate from 'constate'
import { useMemo, useState, useCallback, useEffect } from 'react'

function useShoppingCart() {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [persistedProducts, setPersistedProducts] = useLocalStorage<
    CartProduct[]
  >('shoopingCartInstabuy', [])

  useEffect(() => {
    if (persistedProducts.length) {
      setCartProducts(persistedProducts)
    }
  }, [persistedProducts])

  useEffect(() => {
    setPersistedProducts(cartProducts)
  }, [cartProducts, setPersistedProducts])

  const openShoppingCart = useCallback(() => {
    setCartOpen(true)
  }, [])

  const closeShoppingCart = useCallback(() => {
    setCartOpen(false)
  }, [])

  const cleanShoopingCart = useCallback(() => {
    setCartProducts([])
  }, [])

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

  const count = cartProducts.length
  const finalPrice = cartProducts.reduce(
    (sum, prod) => sum + prod.price * prod.quantity,
    0,
  )

  return useMemo(
    () => ({
      addProduct,
      removeProduct,
      deleteItemOnCart,
      cartProducts,
      count,
      finalPrice,
      getProductOnCart,
      cleanShoopingCart,
      cartOpen,
      openShoppingCart,
      closeShoppingCart,
    }),
    [
      addProduct,
      cartOpen,
      cartProducts,
      cleanShoopingCart,
      closeShoppingCart,
      count,
      deleteItemOnCart,
      finalPrice,
      getProductOnCart,
      openShoppingCart,
      removeProduct,
    ],
  )
}
export const [ShoppingCartProvider, useShoppingCartContext] =
  constate(useShoppingCart)
