import {
    Card,
    CardContent,
    CardTitle,
  } from "@/components/ui/card"

import collection1 from '../assets/imgs/collection1.jpg'
import collection2 from '../assets/imgs/collection2.jpg' 

const Blog = () => {
    return ( 
        <div>
            <div className="rounded-lg md:py-10 py-4 md:px-8 px-3  bg-[#f7f8f2] md:mt-20 mt-8">
                <div className="flex flex-col justify-center items-center mb-3 w-full">
                    <h1 className="font=extrabold text-sm mb-3">Explore</h1>
                    <h1 className="font-bold text-lg">The Blog</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                        <Card>
                        <div className="mb-4">
                            <img src={collection1} alt="" className="rounded-t-lg object-cover w-full h-full" />
                        </div>
                        <CardTitle className='mb-4 uppercase'>Zenith Defy skyline</CardTitle>
                        <CardContent>
                            <p className="text-center capitalize text-[#4c4d4d] font-medium">The Zenith Defy Skyline is a luxury wristwatch that epitomizes modern design and advanced horology...</p>
                        </CardContent>
                        </Card>

                        <Card>
                        <div className="mb-4">
                            <img src={collection2} alt="" className="rounded-t-lg object-cover w-full h-full" />
                        </div>
                        <CardTitle className='mb-3 uppercase'>In love with gucci</CardTitle>
                        <CardContent>
                            <p className="text-center  text-[#4c4d4d] font-medium">Part of the Zenith Defy collection, it features a bold, geometric case with angular lines...</p>
                        </CardContent>
                        </Card>

                        <Card>
                        <div className="mb-4">
                            <img src={collection1} alt="" className="rounded-t-lg object-cover w-full h-full" />
                        </div>
                        <CardTitle className='mb-4 uppercase'>Zenith Defy skyline</CardTitle>
                        <CardContent>
                            <p className="text-center  capitalize text-[#4c4d4d] font-medium">The Zenith Defy Skyline is a luxury wristwatch that epitomizes modern design and advanced horology...</p>
                        </CardContent>
                        </Card>
                </div>
            </div>
        </div>
     );
}
 
export default Blog;