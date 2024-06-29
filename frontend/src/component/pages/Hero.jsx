import Hero_Products from '../Hero_Products'
import Gift_Card from '../Gift_Card'
import Collections from '../Collections'
import Discover_Front from '../Discover_Front'
import Blog from '../Blog'
import NavBar from '../NavBar'



import Footer from "../Footer";
import Hero_slider from "../Hero_slider";

const Hero = () => {
    
    
    const description =[' From intricate complications to avant-garde designs, the worlds most revered watchmakers unveil their masterpieces, captivating enthusiasts and setting the tempo for the luxury timepiece industry','These wrist-bound masterpieces blend precision mechanics with exquisite craftsmanship, often featuring rare materials and limited production runs.Each timepiece tells a unique story of heritage, innovation, and uncompromising quality.']

    return ( 
        <>
        <NavBar/>
        <div className="md:mx-8 mx-6 mt-16">
           <Hero_slider/>

            <Collections/>
        
        <Hero_Products title="New Arrivals" />
        <Discover_Front title="Watches & Wonders" desc={description[0]}/>
        <Gift_Card/>
        <Discover_Front title="The Ticking Treasures" desc={description[1]}/>
        <Hero_Products title="Best Sellers" />
        <Blog/>
        </div>
        <Footer/>
        </>
     
        
     );
}
 
export default Hero;