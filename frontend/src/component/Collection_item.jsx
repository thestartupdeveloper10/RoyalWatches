/* eslint-disable react/prop-types */
import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


function Collection_item({ item }) {
  return (
    <div>
        <Link to={`/products/${item.cat}`}>
         <Card>
                <div className="mb-4">
                    <img src={item.img} alt="" className="rounded-t-lg object-cover w-full h-full" />
                </div>
                <CardTitle className='mb-3 text-center'>{item.title}</CardTitle>
                <CardContent>
                    <p className="capitalize  text-[#8c8f8f] font-medium">{item.des}</p>
                </CardContent>
                <CardFooter>
                <Button className="w-full">{item.action}</Button>
                </CardFooter>
        </Card>
        </Link>
    </div>
  )
}

export default Collection_item