import heroImg from "../assets/imgs/rolex.png";
import heroDmax from '../assets/imgs/dmax.png'
import NavBar from "./NavBar";
import Footer from "./Footer";
const MenHero = () => {
    return ( 
        <>
        <NavBar/>
       <div>
       <div className="first-section uppercase mt-16 rounded-lg">
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
        </div>
       <div className="first-section grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
      
      <div className="relative md:h-[450px] bg-gray-400">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
              <img src={heroImg} className="bg-cover object-contain h-full w-full bg-no-repeat" alt="Product" />
              <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
      </div>
      <div className="relative md:h-[450px] bg-gray-400">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
              <img src={heroDmax} className="bg-cover object-contain h-full w-full bg-no-repeat" alt="Product" />
              <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
      </div>
      <div className="relative md:h-[450px] bg-gray-400">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
              <img src={heroImg} className="bg-cover object-contain h-full w-full bg-no-repeat" alt="Product" />
              <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
      </div>
      <div className="relative md:h-[450px] bg-gray-400">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
              <img src={heroDmax} className="bg-cover object-contain h-full w-full bg-no-repeat" alt="Product" />
              <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
      </div>
    
  </div>


    <div className="third-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-1 mt-1">
        <div className="man-3 lg:col-span-3 relative w-full md:h-[450px] bg-gray-400">
            <img src={heroImg} alt="" className="bg-cover bg-no-repeat w-full object-contain h-full"/>
            <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
        </div>
        <div className="man-3 lg:col-span-3 relative w-full md:h-[450px] bg-gray-400">
            <img src={heroDmax} alt="" className="bg-cover bg-no-repeat w-full object-contain h-full"/>
            <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
        </div>
        <div className="man-3 lg:col-span-3 relative w-full md:h-[450px] bg-gray-400">
            <img src={heroImg} alt="" className="bg-cover bg-no-repeat w-full object-contain h-full"/>
            <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
        </div>
    </div>

    <div className="first-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-1 mt-1">
      <div className=" lg:col-span-3 relative w-full grid grid-cols-1 grid-rows-1 gap-1 lg:grid-cols-2 lg:grid-rows-2">
          <div className="col-span-1 relative md:h-[450px] w-full bg-gray-400">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
                <img src={heroImg} alt="" className="bg-cover object-contain h-full w-full bg-no-repeat"/>
                <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
            </div>
            <div className="col-span-1 relative md:h-[450px] w-full bg-gray-400">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
                <img src={heroDmax} alt="" className="bg-cover object-contain h-full w-full bg-no-repeat"/>
                <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
            </div>
            <div className="col-span-1 relative md:h-[450px] w-full bg-gray-400">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
                <img src={heroImg} alt="" className="bg-cover object-contain h-full w-full bg-no-repeat"/>
                <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
            </div>
            <div className="col-span-1 relative md:h-[450px] w-full bg-gray-400">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
                <img src={heroDmax} alt="" className="bg-cover object-contain h-full w-full bg-no-repeat"/>
                <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
            </div>
      
      </div>
      <div className="lg:col-span-4 relative flex flex-col gap-1">
       
       
          <div className="relative md:h-[450px] w-full bg-gray-400">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
              <img src={heroImg} alt="" className="bg-cover object-contain bg-no-repeat h-full w-full" />
              <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
          </div>
          <div className="relative md:h-[450px] w-full bg-gray-400">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
              <img src={heroDmax} alt="" className="bg-cover object-contain bg-no-repeat h-full w-full" />
              <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
          </div>
       
     
      </div>
  
      </div>

      <div className="flex justify-center items-center w-full mt-6">
        <form action="/men/watches/all" method="GET">
          <input type="submit" value="View All" className="bg-green-500 px-5 py-3 btn cursor-pointer"/>
        </form>
      </div>
       </div>
       <Footer/>
        </>
     );
}
 
export default MenHero;