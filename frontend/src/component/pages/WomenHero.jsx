import Footer from "../Footer";
import NavBar from "../NavBar";
import WomenCart from "../WomenCart";
import heroImg from '../../assets/imgs/rolex.png'
import Discover_Front from "../Discover_Front";
import { publicRequest } from "../../service/requestMethods";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10 rounded-lg"></div>
            <img src={heroImg} alt="" className="object-contain bg-no-repeat lg:h-[80dvh] md:h-[45dvh] h-[40dvh] w-full rounded-lg"/>
            <div className="absolute lg:bottom-12 md:bottom-16 bottom-8 z-10 translate-x-[-50%] left-[50%]  w-auto text-white gap-5 flex flex-col justify-center items-center">
                <div className="flex justify-center items-center flex-col gap-1">
                    <h1 className="text-2xl font-bold">New season</h1>
                    <h2 className="">Extra 15% off code:rtyri</h2>
                </div>
                <a href="">
                    <button className=" text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 rounded-xl border-2 bg-transparent">ShopNow</button>
                </a>
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