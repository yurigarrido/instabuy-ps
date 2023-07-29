import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Details, Search, Category } from './pages'
import { DefaultLayout } from './layout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/product/:slug" element={<Details />} />
        <Route path="/category/:slug" element={<Category />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} replace />} />
    </Routes>
  )
}
