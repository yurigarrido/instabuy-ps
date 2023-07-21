import { globalStyles } from '../stitches.config'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  globalStyles()
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
