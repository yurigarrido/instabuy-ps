import { globalStyles } from '../stitches.config'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './pages/home/context/products/products'
import { QueryClient, QueryClientProvider } from 'react-query'

export const App = () => {
  globalStyles()
  const queryClient = new QueryClient()
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>
          <Router />
        </ProductsProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
