import './App.css'
import Collections from './component/Collections'
import Discover_Front from './component/Discover_Front'
import Explore_Front from './component/Explore_Front'
import Gift_Card from './component/Gift_Card'
import Hero from './component/Hero'
import Hero_Products from './component/Hero_Products'
import NavBar from './component/NavBar'

function App() {


  return (
   <div>
    <NavBar/>
    <Hero/>
    <Collections/>
    <Hero_Products/>
    <Discover_Front/>
    <Gift_Card/>
    <Explore_Front/>
    <Hero_Products/>
   </div>
  )
}

export default App
