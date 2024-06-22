import { Button } from "@/components/ui/button";
import { sliderItems } from "../data";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

function Hero_slider() {
    return (
        <div className="hero-slider">
            <Carousel>
                <CarouselContent>
                    {sliderItems.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="grid lg:grid-cols-3 grid-cols-2 h-full">
                                <div className="col-1 h-full w-full items-center flex justify-center flex-col pb-8 md:pb-0 px-2 md:px-0">
                                    <div className="flex justify-start flex-col md:gap-10 gap-5">
                                        <div className="flex flex-col gap-3">
                                            <h1 className="uppercase font-semibold md:text-2xl lg:text-4xl text-lg text-start">{item.title}</h1>
                                            <p className="text-start text-sm md:w-[250px]">{item.desc}</p>
                                        </div>
                                        <div className="md:flex lg:flex-row md:gap-2 gap-2 flex flex-col">
                                            <Button className="lg:px-12">Explore</Button>
                                            <Button variant="outline" className="lg:px-12">Buy Now</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <img src={item.img} alt={item.title} className="h-full lg:object-cover object-contain" />
                                </div>
                                <div className="col-3 lg:flex flex-col justify-end hidden">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-medium text-start">Description</h1>
                                        <p className="text-start text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi dolore laborum? Sint provident pariatur dolorem nam quibusdam est ducimus laborum itaque.</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default Hero_slider;
