import Footer from "../Footer";
import NavBar from "../NavBar";
import WomenCart from "../WomenCart";
import heroImg from '../../assets/imgs/rolex.png'
import Discover_Front from "../Discover_Front";

const WomenHero = () => {
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
            <WomenCart/>
            <Discover_Front/>

            <div className="md:mt-20 mt-10">
                <div className="flex flex-col w-full justify-center items-center gap-3 lg:gap-6 lg:mb-16 mb-8">
                <h1 className="font-extrabold lg:text-[56px] md:text-[36px] text-2xl">
                    Our Best Designed Watches
                </h1>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-1">
                    <div className="man-3 relative w-full md:h-[450px] bg-gray-400 rounded-md">
                        <img src={heroImg} alt="" className="bg-cover bg-no-repeat w-full object-contain h-full"/>
                        <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
                    </div>
                    <div className="man-3 relative w-full md:h-[450px] bg-gray-400 rounded-md">
                        <img src={heroImg} alt="" className="bg-cover bg-no-repeat w-full object-contain h-full"/>
                        <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
                    </div>
                    <div className="man-3 relative w-full md:h-[450px] bg-gray-400 rounded-md">
                        <img src={heroImg} alt="" className="bg-cover bg-no-repeat w-full object-contain h-full"/>
                        <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
                    </div>
                    <div className="man-3 relative w-full md:h-[450px] bg-gray-400 rounded-md">
                        <img src={heroImg} alt="" className="bg-cover bg-no-repeat w-full object-contain h-full"/>
                        <a className="absolute md:bottom-12 bottom-8 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" href="/men/watches/<%= watch._id %>">Janvier</a>
                    </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default WomenHero;