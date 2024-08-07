import Footer from "../Footer";
import NavBar from "../NavBar";
import WomenCart from "../WomenCart";
import Discover_Front from "../Discover_Front";
import { publicRequest } from "../../service/requestMethods";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import heroVideo from '../../assets/videos/hero.mp4'
import MenProduct from "../MenProduct";

const WomenHero = () => {

    const id = location.pathname.split("/")[2];
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([]);
    const [womenClassic, setWomenClassic] = useState([]);
    const [womenLuxury,setWomenLuxury]=useState([])
    

   
  
    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await publicRequest.get("/products?category=Women");
          const allProducts = res.data;

        const filteredClassic = allProducts.filter(product => {
          if (product.categories && Array.isArray(product.categories)) {
            return product.categories.includes("Classic");
          } else {
            console.warn(`Product ID: ${product._id} does not have a valid categories array.`);
            return false;
          }
        });

        const filteredLuxury =allProducts.filter(product => {
          if (product.categories && Array.isArray(product.categories)) {
            return product.categories.includes("Luxury");
          } else {
            console.warn(`Product ID: ${product._id} does not have a valid categories array.`);
            return false;
          }
        });

    


        
          setProducts(allProducts);
          setWomenClassic(filteredClassic);
          setWomenLuxury(filteredLuxury);
        
          

        } catch (err) {
          console.log(err);
        }
      };
      getProduct();
    }, [id]);

        


    return ( 
        <>
        <NavBar/>
        <div className="mt-16">
        <div className=" lg:col-span-4 relative w-full lg:h-[80dvh] md:h-[45dvh] h-[40dvh]">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-30 rounded-lg"></div>
            <video src={heroVideo} autoPlay loop className="object-cover bg-no-repeat lg:h-[80dvh] md:h-[45dvh] h-[40dvh] w-full rounded-lg"/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full md:w-auto text-white gap-5 flex flex-col justify-center items-center">
    <div className="flex justify-center items-center flex-col gap-1">
        <h1 className="md:text-[50px] text-2xl font-extrabold leading-none uppercase text-[#ecd9d9]">
            Timeless Elegance
        </h1>
        <h2 className="text-sm md:text-xl mt-2 font-bold text-[#c9acac]">
            Discover Our Stunning Collection of Women&apos;s Watches
        </h2>
    </div>
    <div className="flex items-center gap-2 md:gap-4">
      <Link to='/product/667e7621216613745205f4ff'>
        <button type="button" className="lg:px-8 px-3 py-2 lg:py-3 text-sm md:text-lg bg-[#948585] hover:bg-[#c9acac] text-white font-semibold rounded-full transition duration-300 ease-in-out">
            Shop Now
        </button>
        </Link>
        <Link to="/products/Women">
        <button type="button" className="lg:px-8 px-3 py-2 lg:py-3 text-sm md:text-lg font-semibold border-2 border-[#ecd9d9] text-[#ecd9d9] hover:bg-[#ecd9d9] hover:text-gray-800 rounded-full transition duration-300 ease-in-out">
            Discover More
        </button>
        </Link>
    </div>
</div>

        </div>
            <WomenCart item={womenLuxury}/>
            <Discover_Front title={"Glamour Timepieces: Indulge in Luxury"} desc={"Our curated selection features elegant, high-end timepieces that embody sophistication, style, and timeless beauty. Each watch is a masterpiece, crafted with precision and adorned with the finest materials."}/>

            <div className="md:mt-20 mt-10">
                <div className="flex flex-col w-full justify-center items-center gap-3 lg:gap-6 lg:mb-16 mb-8">
                <h1 className="font-extrabold lg:text-[56px] md:text-[36px] text-2xl">
                    Our Best Designed Watches
                </h1>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-1">

                {womenClassic.length>0?(
                    womenClassic.map(product=>(
                    <MenProduct key={product._id} product={product}/>
                    ))
                ).slice(0,4):(
                    <p>No products available for the selected categories.</p>
                )}
                    
            </div>
            </div>
            <div className="flex justify-center w-full mt-10">
          <Link to="/products/Women">
            <Button className='md:px-12 px-6'>View All Watches</Button>
          </Link>
        </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default WomenHero;