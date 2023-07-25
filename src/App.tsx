import { globalStyles } from '../stitches.config'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './pages/home/context/products/products'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ShoppingCartProvider } from './pages/home/context/cart/cart'
import { Toaster } from 'react-hot-toast'

export const App = () => {
  globalStyles()
  const queryClient = new QueryClient()
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>
          <ShoppingCartProvider>
            <Toaster
              position="bottom-right"
              reverseOrder={true}
              toastOptions={{ duration: 3000 }}
            />
            <Router />
          </ShoppingCartProvider>
        </ProductsProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
