import CardTemp from "./CardTemp";
import heroImg from '../assets/imgs/women.jpg'
const WomenCart = () => {
    return ( 
        <>
        
        <div className="mt-16 h-full">
        <div className="flex flex-col w-full justify-center items-center gap-3 lg:gap-6 lg:mb-10 mb-8">
            <h1 className="font-extrabold lg:text-[56px] md:text-[36px] text-2xl">
                Product Category
            </h1>
            <p className="">
                Focus on the growing trend of sustainable and ethically sourced watches,featuring brands and designers leading this movement
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1">
            <div className="bg-gray-400">
            <div className="bg-[#f7f8f2]">
                    <img src={heroImg} alt="" className="rounded-lg object-contain w-full h-full" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <CardTemp/>
                <CardTemp/>
                <CardTemp/>
                <CardTemp/>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default WomenCart;