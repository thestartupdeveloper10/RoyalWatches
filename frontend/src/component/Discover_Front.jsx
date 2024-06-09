import { Button } from "@/components/ui/button";
import explore from '../assets/imgs/explore.jpg'

const Discover_Front = () => {
    return ( 
        <div>
        <div className="relative md:mt-20 mt-8 rounded-lg">
<img src={explore} alt="img" className="object-cover h-[300px] w-full rounded-lg"/>
<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-2 text-white md:w-[400px] w-[250px] justify-center items-center">
            <h1 className="font-extrabold">Watches & Wonders</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis vel atque at neque ducimus ab quidem, facere sapiente minus dolorum ipsum delectus ratione.</p>
        </div>
        <Button variant="secondary" className='w-full font-extrabold mt-2'>Discover More</Button> 
    </div>
</div>

    </div>
     );
}
 
export default Discover_Front;