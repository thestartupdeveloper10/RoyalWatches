import Footer from "../Footer";
import NavBar from "../NavBar";
import WomenCart from "../WomenCart";
import Discover_Front from "../Discover_Front";
import { publicRequest } from "../../service/requestMethods";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroVideo from '../../assets/videos/hero.mp4'

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
        <h1 className="md:text-[50px] text-2xl font-extrabold uppercase text-pink-600">
            Timeless Elegance
        </h1>
        <h2 className="text-sm md:text-xl mt-2 font-bold text-pink-300">
            Discover Our Stunning Collection of Women&apos;s Watches
        </h2>
    </div>
    <div className="flex items-center gap-2 md:gap-4">
        <button type="button" className="md:px-8 px-3 py-2 md:py-3 text-sm md:text-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full transition duration-300 ease-in-out">
            Shop Now
        </button>
        <button type="button" className="md:px-8 px-3 py-2 md:py-3 text-sm md:text-lg font-semibold border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white rounded-full transition duration-300 ease-in-out">
            Discover More
        </button>
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
                    <div className="man-3 relative w-full md:h-[450px] bg-[#f9f6ee] rounded-md" key={product._id}>
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
                        <img src={product.img} alt="" className="bg-cover bg-no-repeat w-full object-contain rounded-md h-full"/>
                        <Link className="absolute md:bottom-6 bottom-5 z-5 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center w-2/3" to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                    ))
                ).slice(0,4):(
                    <p>No products available for the selected categories.</p>
                )}
                    
            </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default WomenHero;