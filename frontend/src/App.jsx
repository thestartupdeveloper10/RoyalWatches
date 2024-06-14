import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Cart from './component/pages/Cart'
import Hero from './component/pages/Hero'
import Product from './component/pages/Product'
import Product_List from './component/pages/Product_List'
import MenHero from './component/pages/MenHero'
import Login from './component/pages/Login'
import SignUp from './component/pages/SignUp'
import WomenHero from './component/pages/WomenHero'


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
            <Route path='/women' element={<WomenHero/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
          </Routes>
      </Router>
    </>
  
  )
}

export default App
