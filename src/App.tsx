import { globalStyles } from '../stitches.config'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './pages/home/context/products/products'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ShoppingCartProvider } from './shared/context/cart/cart'
import { Toaster } from 'react-hot-toast'
import { Loading } from './shared/components/loading'
import { LayoutProvider } from './layout/context'

export const App = () => {
  globalStyles()
  const queryClient = new QueryClient()
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LayoutProvider>
          <ProductsProvider>
            <ShoppingCartProvider>
              <Toaster
                position="bottom-right"
                reverseOrder={true}
                toastOptions={{ duration: 3000 }}
              />
              <Loading />
              <Router />
            </ShoppingCartProvider>
          </ProductsProvider>
        </LayoutProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
