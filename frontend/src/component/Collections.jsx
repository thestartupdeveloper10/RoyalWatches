import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Banner from "./Banner";


import collection1 from '../assets/imgs/collection1.jpg'
import collection2 from '../assets/imgs/collection2.jpg'

const Collections = () => {
    return ( 
        <div className="mt-20">
            <Banner/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-20">
                <Card>
                <div className="mb-4">
                    <img src={collection1} alt="" className="rounded-lg object-cover w-full h-full" />
                </div>
                <CardTitle className='mb-3'>News in Jewelary</CardTitle>
                <CardContent>
                    <p className="capitalize text-[#8c8f8f] font-medium">Discover our wonderfull Jewelary places</p>
                </CardContent>
                <CardFooter>
                <Button className="w-full">Shop The Collection</Button>
                </CardFooter>
                </Card>
                <Card>
                <div className="mb-4">
                    <img src={collection2} alt="" className="rounded-lg object-cover w-full h-full" />
                </div>
                <CardTitle className='mb-3'>News in Watches</CardTitle>
                <CardContent>
                    <p className="capitalize text-[#8c8f8f] font-medium">explore our range of luxury Watches</p>
                </CardContent>
                <CardFooter>
                <Button className="w-full">Shop The Collection</Button>
                </CardFooter>
                </Card>
            </div>
        </div>
     );
}
 
export default Collections;