import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import heroImg from '../assets/imgs/rolex.png'
import heroDmax from '../assets/imgs/dmax.png'
const Hero = () => {
    return ( 
        <div className="md:mx-8 mx-6 mt-10">
            <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <div className="grid md:grid-cols-3 grid-cols-2 h-full">
                        <div className="1 h-full w-full items-center flex justify-center flex-col pb-8 md:pb-0 px-2 md:px-0">
                        <div className="flex justify-start flex-col md:gap-10 gap-5">
                            <div className="flex flex-col gap-3">
                                <h1 className="uppercase font-semibold md:text-4xl text-lg text-start">Rolex</h1>
                                <p className="text-start text-sm md:text-balance">Aviator 8 B01 Chronograph 43 Mosquito Watch</p>
                            </div>
                            <div className="md:flex md:flex-row md:gap-2 gap-2 flex flex-col">
                                <Button>Explore</Button>
                                <Button variant="outline" >Buy Now</Button>
                            </div>
                        </div>
                        </div>
                        <div className="2">
                        <img src={heroImg} alt="" className="h-full object-cover" />
                        </div>
                        <div className="3 md:flex flex-col justify-end hidden">
                            <div className="flex flex-col gap-4">
                                <h1 className="font-medium text-start">Description</h1>
                                <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi dolore laborum? Sint provident pariatur dolorem nam quibusdam est ducimus laborum itaque.</p>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="grid md:grid-cols-3 grid-cols-2 h-full">
                        <div className="1 h-full w-full items-center flex justify-center flex-col pb-8 md:pb-0 px-2 md:px-0">
                        <div className="flex justify-start flex-col md:gap-10 gap-5">
                            <div className="flex flex-col gap-3">
                                <h1 className="uppercase font-semibold md:text-4xl text-lg text-start">Rolex</h1>
                                <p className="text-start">Aviator 8 B01 Chronograph 43 Mosquito Watch</p>
                            </div>
                            <div className="md:flex md:flex-row md:gap-2 gap-2 flex flex-col">
                                <Button>Explore</Button>
                                <Button variant="outline">Buy Now</Button>
                            </div>
                        </div>
                        </div>
                        <div className="2">
                        <img src={heroDmax} alt="" className="h-full object-cover" />
                        </div>
                        <div className="3 md:flex flex-col justify-end hidden">
                            <div className="flex flex-col gap-4">
                                <h1 className="font-medium text-start">Description</h1>
                                <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi dolore laborum? Sint provident pariatur dolorem nam quibusdam est ducimus laborum itaque.</p>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
     );
}
 
export default Hero;