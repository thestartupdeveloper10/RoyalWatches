import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Cart from './component/Cart'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Product from './component/Product'
import Product_List from './component/Product_List'

function App() {


  return (
    <>
      <Router>

          <Routes>
            <Route path='/' element={<Hero/>}></Route>
            <Route path='/products' element={<Product_List/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
      </Router>
      <div>
      <Footer/>
</div>
    </>
  
  )
}

export default App
