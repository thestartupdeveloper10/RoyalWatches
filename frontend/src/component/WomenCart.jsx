/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CardTemp from "./CardTemp";
import heroImg from '../assets/imgs/women.jpg';
import CardTemp_Skeleton from "./CardTemp_Skeleton";

const WomenCart = ({ item }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a data fetching delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="mt-16 h-full">
                <div className="md:mt-18 mt-10 flex flex-col w-full justify-center items-center gap-3 lg:gap-6 lg:mb-10 mb-8">
                    <h1 className="font-extrabold lg:text-[56px] md:text-[36px] text-2xl text-gray-800 leading-none">
                        Discover Timeless Elegance with Our Women&apos;s Watches
                    </h1>
                    <p className="text-center text-lg lg:text-xl text-gray-600 max-w-2xl">
                        Step into a world of grace and sophistication with our curated collection of women&apos;s watches. Each piece embodies exquisite craftsmanship and timeless design, perfect for accentuating your elegance and style. Explore the harmony of beauty and precision today.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-3 grid-cols-1">
                    <div className="">
                        <div className="bg-[#f7f8f2] relative">
                            <img src={heroImg} alt="" className="rounded-lg object-contain w-full h-full" />
                        </div>
                    </div>
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <CardTemp_Skeleton />
                            <CardTemp_Skeleton />
                            <CardTemp_Skeleton />
                            <CardTemp_Skeleton />
                        </div>
                        
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {item.map((product, index) => (
                                <CardTemp key={index} product={product} />
                            )).slice(0, 4)}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default WomenCart;
