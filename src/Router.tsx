import { Routes, Route } from "react-router-dom"
import { Home } from "./pages"
import { DefaultLayout } from "./layout"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  )
}