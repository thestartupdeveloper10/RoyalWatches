/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { publicRequest } from "../service/requestMethods";
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
import SimilarProduct_Skeleton from "./SimilarProduct_Skeleton";
  export default function SimilarProducts({ product }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
      if (product && product.categories && product.categories[1]) {
        const similarCategory = product.categories[1];
  
        const getProducts = async () => {
          try {
            const res = await publicRequest.get("/products?category=Men");
            const allProducts = res.data;
  
            const filtered = allProducts.filter((prod) => {
              if (prod.categories && Array.isArray(prod.categories)) {
                return prod.categories.includes(similarCategory);
              } else {
                console.warn(`Product ID: ${prod._id} does not have a valid categories array.`);
                return false;
              }
            });
  
            setFilteredProducts(filtered);
          } catch (err) {
            console.error(err);
          }
        };
        getProducts();
      }
    }, [product]);
  
    
  
    return (
      <div className="mt-10 md:mt-28">
        <div className="mt-10 flex flex-col w-full justify-center items-center gap-3 lg:gap-6 lg:mb-10 mb-8">
        <h1 className="font-extrabold lg:text-[56px] md:text-[36px] text-2xl text-gray-800">
                        Similar Products
                    </h1>
                    </div>
        {filteredProducts.length > 0 ? (
          <Carousel>
            <CarouselContent>
              {filteredProducts.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 py-4 lg:basis-1/3 -mx-2 md:-mx-4">
                  <Link to={`/product/${item._id}`} >
                  <img src={item.img} alt={item.title} className="w-full h-48 object-contain" />
                  </Link>
                  <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
                  <p className=" text-sm md:text-md font-bold">$ {item.price}</p>
                  
                </CarouselItem>

              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
             <SimilarProduct_Skeleton />
        )}
      </div>
    );
  }
  