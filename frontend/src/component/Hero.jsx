import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";

import Hero_Products from './Hero_Products'
import Gift_Card from './Gift_Card'
import Collections from './Collections'
import Discover_Front from './Discover_Front'
import Explore_Front from './Explore_Front'
import Blog from './Blog'
import NavBar from './NavBar'
import { Link } from 'react-router-dom';


import heroImg from '../assets/imgs/rolex.png'
import heroDmax from '../assets/imgs/dmax.png'
import Footer from "./Footer";
const Hero = () => {
    return ( 
        <>
        <NavBar/>
        <div className="md:mx-8 mx-6 mt-16">
            <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <div className="grid lg:grid-cols-3 grid-cols-2 h-full">
                        <div className="1 h-full w-full items-center flex justify-center flex-col pb-8 md:pb-0 px-2 md:px-0">
                        <div className="flex justify-start flex-col md:gap-10 gap-5">
                            <div className="flex flex-col gap-3">
                                <h1 className="uppercase font-semibold md:text-2xl lg:text-4xl text-lg text-start">Rolex</h1>
                                <p className="text-start text-sm md:text-balance md:w-[250px]">Aviator 8 B01 Chronograph 43 Mosquito Watch</p>
                            </div>
                            <div className="md:flex lg:flex-row md:gap-2 gap-2 flex flex-col">
                                <Button className='lg:px-12'>Explore</Button>
                                <Link to="/product">
                                <Button variant="outline" className='lg:px-12'>Buy Now</Button>
                                </Link>   
                            </div>
                        </div>
                        </div>
                        <div className="2">
                        <img src={heroImg} alt="" className="h-full lg:object-cover object-contain" />
                        </div>
                        <div className="3 lg:flex flex-col justify-end hidden">
                            <div className="flex flex-col gap-4">
                                <h1 className="font-medium text-start">Description</h1>
                                <p className="text-start text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi dolore laborum? Sint provident pariatur dolorem nam quibusdam est ducimus laborum itaque.</p>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="grid lg:grid-cols-3 grid-cols-2 h-full">
                        <div className="1 h-full w-full items-center flex justify-center flex-col pb-8 md:pb-0 px-2 md:px-0">
                        <div className="flex justify-start flex-col md:gap-10 gap-5">
                            <div className="flex flex-col gap-3">
                                <h1 className="uppercase font-semibold md:text-2xl lg:text-4xl text-lg text-start">Rolex</h1>
                                <p className="text-start text-sm md:text-balance md:w-[250px]">Aviator 8 B01 Chronograph 43 Mosquito Watch</p>
                            </div>
                            <div className="md:flex lg:flex-row md:gap-2 gap-2 flex flex-col">
                                <Button className='lg:px-12'>Explore</Button>
                                <Button variant="outline" className='lg:px-12'>Buy Now</Button>
                            </div>
                        </div>
                        </div>
                        <div className="2">
                        <img src={heroDmax} alt="" className="h-full lg:object-cover object-contain" />
                        </div>
                        <div className="3 lg:flex flex-col justify-end hidden">
                            <div className="flex flex-col gap-4">
                                <h1 className="font-medium text-start">Description</h1>
                                <p className="text-start text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi dolore laborum? Sint provident pariatur dolorem nam quibusdam est ducimus laborum itaque.</p>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>

            <Collections/>
        <Hero_Products/>
        <Discover_Front/>
        <Gift_Card/>
        <Explore_Front/>
        <Hero_Products/>
        <Blog/>
        </div>
        <Footer/>
        </>
     
        
     );
}
 
export default Hero;