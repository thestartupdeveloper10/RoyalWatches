import Hero_Products from '../Hero_Products'
import Gift_Card from '../Gift_Card'
import Collections from '../Collections'
import Discover_Front from '../Discover_Front'
import Explore_Front from '../Explore_Front'
import Blog from '../Blog'
import NavBar from '../NavBar'



import Footer from "../Footer";
import Hero_slider from "../Hero_slider";
const Hero = () => {
    return ( 
        <>
        <NavBar/>
        <div className="md:mx-8 mx-6 mt-16">
           <Hero_slider/>

            <Collections/>
        <Hero_Products/>
        <Discover_Front/>
        <Gift_Card/>
        <Explore_Front/>
        <Hero_Products/>
        <Blog/>
        </div>
        <Footer/>
        </>
     
        
     );
}
 
export default Hero;