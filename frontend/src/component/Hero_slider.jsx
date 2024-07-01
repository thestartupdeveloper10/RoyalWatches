import { Button } from "@/components/ui/button";
// import { sliderItems } from "../data";
import { publicRequest } from "../service/requestMethods";
import { useEffect, useState } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

function Hero_slider() {

    const id = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products?new=true");
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);


    return (
        <div className="hero-slider">
            <Carousel>
                <CarouselContent>
                    {products.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="grid lg:grid-cols-3 grid-cols-2 h-full">
                                <div className="col-1 h-full w-full items-center flex justify-center flex-col pb-8 md:pb-0 px-2 md:px-0">
                                    <div className="flex justify-start flex-col md:gap-10 gap-5">
                                        <div className="flex flex-col gap-3">
                                            <h1 className="uppercase font-semibold md:text-2xl lg:text-4xl text-lg text-start">{item.title}</h1>
                                            {/* <p className="text-start hidden md:block text-sm md:w-[250px]">{item.desc}</p> */}
                                            {item.categories.includes("Men") ? "Men" : "Women"}
                                        </div>
                                        <div className="md:flex lg:flex-row md:gap-2 gap-2 flex flex-col">
                                            <Link to={item.categories.includes("Men") ? `/products/Men` : `/products/Women`}>
                                            <Button className="lg:px-12">Explore</Button>
                                            </Link>

                                            <Link to={`/product/${item._id}`} className="w-full">
                                            <Button variant="outline" className="lg:px-12">Buy Now</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <img src={item.img} alt={item.title} className="h-full lg:object-cover object-contain" />
                                </div>
                                <div className="col-3 lg:flex flex-col justify-center hidden">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-extrabold text-2xl text-start">Description</h1>
                                        <p className="text-start text-sm lg:text-base">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    )).slice(0,4)}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default Hero_slider;
