/* eslint-disable react/prop-types */
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
  import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addProductWishlist } from '@/redux/wishlistRedux';



const CardTemp = ({ product }) => {  
    const dispatch = useDispatch();
    const quantity = 1;
    const color= product.color[0]
    const size = product.size[0]

    const userId= useSelector((state) => state.user.userId);
    return ( 
        <>
          <Card>
                
                <div className="mb-4 bg-[#f7f8f2] relative">
                    <FavoriteBorderIcon onClick={()=>{dispatch(addProductWishlist({userId,...product}))}} className="absolute top-3 left-3 md:top-6 md:left-6 text-gray-500 cursor-pointer"></FavoriteBorderIcon>
                    <Link to={`/product/${product._id}`}>
                    <img src={product.img} alt="" className="rounded-lg object-contain w-full h-[200px]" />
                    </Link>
                </div>
               
                <CardFooter className='-mb-3'>
                <h1 className="font-bold text-start text-xl">{product.title}</h1>
                </CardFooter>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-sm text-start">{product.desc.split(".")[0]}</p>
                </CardContent>
                <CardFooter className='flex justify-between' >
                <h1 className="font-bold text-xl text-start"><span className="pr-2">$</span>{product.price}</h1>
                <AddIcon onClick={()=>{dispatch(addProduct({userId,...product,quantity, color, size}))}} className="cursor-pointer"></AddIcon>
                </CardFooter>
                </Card>
        </>
     );
}
 
export default CardTemp;