import NavBar from "../NavBar";
import Footer from "../Footer";


import heroImg from '../../assets/imgs/menHero.jpg'


import { publicRequest } from "../../service/requestMethods";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MenHero = () => {

    const id = location.pathname.split("/")[2];
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [menClassics, setMenClassics] = useState([]);
    const [menFormal,setMenFormal]=useState([])
    const [menSport,setMenSport]=useState([])

   
  
    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await publicRequest.get("/products?category=Men");
          const allProducts = res.data;

          // Filter products where categories include "Luxury"
        const filtered = allProducts.filter(product => {
          if (product.categories && Array.isArray(product.categories)) {
            return product.categories.includes("Luxury");
          } else {
            console.warn(`Product ID: ${product._id} does not have a valid categories array.`);
            return false;
          }
        });

        const filteredClassics = allProducts.filter(product => {
          if (product.categories && Array.isArray(product.categories)) {
            return product.categories.includes("Classic");
          } else {
            console.warn(`Product ID: ${product._id} does not have a valid categories array.`);
            return false;
          }
        });

        const filteredFormal =allProducts.filter(product => {
          if (product.categories && Array.isArray(product.categories)) {
            return product.categories.includes("Formal");
          } else {
            console.warn(`Product ID: ${product._id} does not have a valid categories array.`);
            return false;
          }
        });

        const filteredSport = allProducts.filter(product => {
          if (product.categories && Array.isArray(product.categories)) {
            return product.categories.includes("Sports");
          } else {
            console.warn(`Product ID: ${product._id} does not have a valid categories array.`);
            return false;
          }
        });


        
          setProducts(allProducts);
          setFilteredProducts(filtered);
          setMenClassics(filteredClassics);
          setMenFormal(filteredFormal);
          setMenSport(filteredSport);
          

        } catch (err) {
          console.log(err);
        }
      };
      getProduct();
    }, [id]);

   
    return ( 
        <>
        <NavBar/>
       <div>
       <div className="first-section uppercase mt-16 rounded-lg">
       <div className=" lg:col-span-4 relative w-full lg:h-[80dvh] md:h-[45dvh] h-[40dvh]">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10 rounded-lg"></div>
            <img src={heroImg} className="object-cover bg-no-repeat lg:h-[80dvh] md:h-[45dvh] h-[40dvh] w-full rounded-lg"/>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full md:w-auto text-white gap-5 flex flex-col justify-center items-center">
                <div className="flex justify-center items-center flex-col gap-1 h-auto">
                    <h1 className="md:text-[50px] text-2xl font-extrabold uppercase leading-none">
                        New Season Collection
                    </h1>
                    <h2 className="text-sm md:text-xl capitalize mt-2 font-bold text-gray-100">
                        Discover Exquisite Men&apos;s Watches Handcrafted by Experts
                    </h2>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <button type="button" className="md:px-8 px-3 py-2 md:py-3 text-sm md:text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300 ease-in-out">
                        Shop Now
                    </button>
                    <button type="button" className="md:px-8 px-3 py-2 md:py-3 text-sm md:text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition duration-300 ease-in-out">
                        Explore More
                    </button>
                </div>
</div>

        </div>
        </div>
        <div className="md:mt-18 mt-10 flex flex-col w-full justify-center items-center gap-3 lg:gap-6 lg:mb-10 mb-8">
    <h1 className="font-extrabold lg:text-[56px] md:text-[36px] text-2xl text-gray-800">
        Elevate Your Style with Our Luxury Watches
    </h1>
    <p className="text-center text-lg lg:text-xl text-gray-600 max-w-2xl">
        Discover the epitome of elegance and precision with our exclusive collection of men&apos;s watches. Each timepiece is a masterpiece, combining impeccable craftsmanship with timeless design to complement your unique style. Explore the latest trends in luxury, durability, and innovation.
    </p>
</div>

       <div className="first-section grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">


       {filteredProducts.length > 0 ? (filteredProducts.map((product) => (
            <div key={product._id} className="relative md:h-[450px] bg-[#f9f6ee]">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
            <img src={product.img} className="bg-cover object-contain h-full w-full bg-no-repeat" alt={product.title} />
            <Link className="absolute w-2/3 md:bottom-6 bottom-5 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" to={`/product/${product._id}`} >{product.title}</Link>
            </div>
       ))).slice(0,4):(
        <p>No products available for the selected categories.</p>
      )}
  </div>


    <div className="third-section grid grid-cols-1 lg:grid-cols-3 gap-1 mt-1">
      {menSport.length>0?(
        menSport.map(product=>(
          <div className="man-3  relative w-full md:h-[450px] bg-[#f9f6ee]" key={product._id}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
          <img src={product.img} alt="" className="bg-cover bg-no-repeat w-full object-contain h-full"/>
          <Link className="absolute w-2/3 md:bottom-6 bottom-5 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" to={`/product/${product._id}`}>{product.title}</Link>
      </div>
        ))
      ).slice(0,3):(
        <p>No products available for the selected categories.</p>
      )}
    </div>

    <div className="first-section grid grid-cols-1 md:grid-cols-1 lg:grid-cols-7 gap-1 mt-1">
      <div className=" lg:col-span-3 relative w-full grid grid-cols-1 grid-rows-1 gap-1 md:grid-cols-2 lg:grid-rows-2">
          {menFormal.length>0?(menFormal.map(product=>(
            <div className="col-span-1 relative md:h-[450px] w-full bg-[#f9f6ee]" key={product._id}>
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
                <img src={product.img} alt="" className="bg-cover object-contain h-full w-full bg-no-repeat"/>
                <Link className="absolute w-2/3 md:bottom-6 bottom-5 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" to={`/product/${product._id}`}>{product.title}</Link>
            </div>
          ))).slice(0,4):(
        <p>No products available for the selected categories.</p>
      )}
      </div>
      <div className="lg:col-span-4 relative flex flex-col gap-1">
       
       {menClassics.length > 0?(
        menClassics.map(product=>(
          <div className="relative md:h-[450px] w-full bg-[#f9f6ee]" key={product._id}>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
            <img src={product.img} alt="" className="bg-cover object-contain bg-no-repeat h-full w-full" />
            <Link className="absolute w-2/3 md:bottom-6 bottom-5 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" to={`/product/${product._id}`}  >{product.title}</Link>
        </div>
        ))
       ).slice(0,2):(
        <p>No products available for the selected categories.</p>
      )}
      </div>
  
      </div>

      <div className="flex justify-center items-center w-full mt-6">
      <Link to="/products/Men">
            <Button className='md:px-12 px-6'>View All</Button>
          </Link>
      </div>
       </div>
       <Footer/>
        </>
     );
}
 
export default MenHero;