/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { publicRequest } from "../service/requestMethods";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addProductWishlist } from '@/redux/wishlistRedux';

const Hero_Products = ({ title,query }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  const dispatch =useDispatch()
  const userId= useSelector((state) => state.user.userId);

  useEffect(() => {
    const getProduct = async () => {
      try {
        if(title==="New Arrivals"){
          const res = await publicRequest.get(`/products?${query}`);
          setProducts(Array.isArray(res.data) ? res.data : []);
        }else{
          const res = await publicRequest.get(`/products?${query}`);
          setProducts(Array.isArray(res.data) ? res.data : []);
        }
        
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id, query, title]);

  return (
    <div>
      <div className="md:mt-20 mt-8">
        <div className="flex justify-start">
          <h1 className="uppercase font-bold text-xl">
            {title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full mt-10">
          {Array.isArray(products) && products.map((product) => {
           const quantity = 1;
           const color= product.color[0]
           const size = product.size[0]
         return (
            
            <Card key={product._id}>
              
              <div className="mb-4 bg-[#f7f8f2] relative">
              <FavoriteBorderIcon onClick={()=>{dispatch(addProductWishlist({userId,product}))}} className="absolute top-3 left-3 md:top-6 md:left-6 text-gray-500 cursor-pointer"></FavoriteBorderIcon>
              <Link to={`/product/${product._id}`}>
                <img src={product.img} alt="" className="rounded-lg object-contain w-full h-[250px]" />
                </Link>
              </div>
              
              <CardFooter className='-mb-3'>
                <h1 className="font-bold text-start text-2xl">{product.title}</h1>
              </CardFooter>
              <CardContent >
                <p className="capitalize text-[#8c8f8f] font-medium text-sm text-start">{product.desc}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className="font-bold text-xl text-start"><span className="pr-2">$</span>{product.price}</h1>
                <AddBoxIcon onClick={()=>{dispatch(addProduct({userId,...product, quantity, color, size }))}} className="cursor-pointer"/>
              </CardFooter>
            </Card>
          )}).slice(0, 4)}
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