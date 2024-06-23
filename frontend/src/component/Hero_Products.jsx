/* eslint-disable react/prop-types */
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

import heroImg from '../assets/imgs/rolex.png'
import heroDmax from '../assets/imgs/dmax.png'

const Hero_Products = ({ product }) => {
    // Check if product is undefined or null
    if (!product) {
        console.error('product prop is undefined or null in Hero_Products');
        return null; // or handle the error case appropriately
    }
    return (
        <div>
            <div className="md:mt-20 mt-8">
                <div className="flex justify-start">
                    <h1 className="uppercase font-bold text-xl">
                        Watch & Jewellery offers
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full mt-10">
                <Card>
                <div className="mb-4 bg-[#f7f8f2]">
                    <img src={product.img} alt="" className="rounded-lg object-contain w-full h-[250px]" />
                </div>
                <CardFooter className='-mb-3'>
                <h1 className="font-bold text-start text-2xl">{product.title}</h1>
                </CardFooter>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-sm text-start">36mm White Gold Cluster Engagement</p>
                </CardContent>
                <CardFooter >
                <h1 className="font-bold text-xl text-start"><span className="pr-2">$</span>{product.price}</h1>
                </CardFooter>
                </Card>
               
        
                <Card>
                <div className="mb-4 bg-[#f7f8f2]">
                    <img src={heroImg} alt="" className="rounded-lg object-contain w-full h-[250px]" />
                </div>
                <CardFooter className='-mb-3'>
                <h1 className="font-bold text-start text-2xl">Zoldwmiths</h1>
                </CardFooter>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-sm text-start">36mm White Gold Cluster Engagement</p>
                </CardContent>
                <CardFooter >
                <h1 className="font-bold text-xl text-start"><span className="pr-2">$</span>289.95</h1>
                </CardFooter>
                </Card>
                <Card>
                <div className="mb-4 bg-[#f7f8f2]">
                    <img src={heroDmax} alt="" className="rounded-lg object-contain w-full h-[250px]" />
                </div>
                <CardFooter className='-mb-3'>
                <h1 className="font-bold text-start text-2xl">Alex Bobbe</h1>
                </CardFooter>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-sm text-start">36mm White Gold Cluster Engagement</p>
                </CardContent>
                <CardFooter >
                <h1 className="font-bold text-xl text-start"><span className="pr-2">$</span>859.85</h1>
                </CardFooter>
                </Card>
               
                </div>
                <div className="flex justify-start mt-10">
                <Link to="/products">
                <Button className='md:px-12 px-6'>Show All Offers</Button> 
                </Link>
                
                </div>
            </div>
        </div>
     );
}
 
export default Hero_Products;