import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

import heroImg from '../assets/imgs/rolex.png'
import heroDmax from '../assets/imgs/dmax.png'

const Hero_Products = () => {
    return (
        <div>
            <div className="mt-20">
                <div className="flex justify-start">
                    <h1 className="uppercase font-bold text-xl">
                        Watch & Jewellery offers
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full mt-10">
                <Card>
                <div className="mb-4">
                    <img src={heroImg} alt="" className="rounded-lg object-contain w-full h-[300px]" />
                </div>
                <CardTitle className='mb-3'>Zoldwmiths</CardTitle>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-start">36mm White Gold Cluster Engagement</p>
                </CardContent>
                <CardFooter >
                <h1 className="font-bold text-start">$289.95</h1>
                </CardFooter>
                </Card>
                <Card>
                <div className="mb-4">
                    <img src={heroDmax} alt="" className="rounded-lg object-contain w-full h-[300px]" />
                </div>
                <CardTitle className='mb-3'>Zoldwmiths</CardTitle>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-start">36mm White Gold Cluster Engagement</p>
                </CardContent>
                <CardFooter >
                <h1 className="font-bold text-start">$289.95</h1>
                </CardFooter>
                </Card>
                <Card>
                <div className="mb-4">
                    <img src={heroImg} alt="" className="rounded-lg object-contain w-full h-[300px]" />
                </div>
                <CardTitle className='mb-3'>Zoldwmiths</CardTitle>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-start">36mm White Gold Cluster Engagement</p>
                </CardContent>
                <CardFooter >
                <h1 className="font-bold text-start">$289.95</h1>
                </CardFooter>
                </Card>
                <Card>
                <div className="mb-4">
                    <img src={heroImg} alt="" className="rounded-lg object-contain w-full h-[300px]" />
                </div>
                <CardTitle className='mb-3'>Zoldwmiths</CardTitle>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-start">36mm White Gold Cluster Engagement</p>
                </CardContent>
                <CardFooter >
                <h1 className="font-bold text-start">$289.95</h1>
                </CardFooter>
                </Card>
                <Card>
                <div className="mb-4">
                    <img src={heroImg} alt="" className="rounded-lg object-contain w-full h-[300px]" />
                </div>
                <CardTitle className='mb-3'>Zoldwmiths</CardTitle>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-start">36mm White Gold Cluster Engagement</p>
                </CardContent>
                <CardFooter >
                <h1 className="font-bold text-start">$289.95</h1>
                </CardFooter>
                </Card>
                </div>
            </div>
        </div>
     );
}
 
export default Hero_Products;