// import { useEffect, useState } from "react";
import Banner from "./Banner";

import { collections } from "../data";
import Collection_item from "./Collection_item";
// import { publicRequest } from "../service/requestMethods";



const Collections = () => {
  // const [products, setProducts] = useState([]);
  
  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get("/products?category=Men");
  //       setProducts(Array.isArray(res.data) ? res.data : []);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProduct();
  // }, []);

  // console.log(products)

    return ( 
        <div className="md:mt-20 mt-8">
            <Banner/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-20">
               
               {
                collections.map((item)=>{
                  return  <Collection_item item={item} key={item.id}/>
                })
               }
            </div>
        </div>
     );
}
 
export default Collections;