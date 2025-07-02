import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCSS } from './styles'
import Product from './components/Product'
import ProductList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList title="Promoções" background="gray" />
        <ProductList title="Em breve" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
