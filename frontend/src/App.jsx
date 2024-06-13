import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Cart from './component/Cart'
import Hero from './component/Hero'
import Product from './component/Product'
import Product_List from './component/Product_List'
import MenHero from './component/MenHero'
import Login from './component/Login'
import SignUp from './component/SignUp'


function App() {


  return (
    <>
      <Router>

          <Routes>
            <Route path='/' element={<Hero/>}></Route>
            <Route path='/products' element={<Product_List/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/men' element={<MenHero/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
          </Routes>
      </Router>
    </>
  
  )
}

export default App
