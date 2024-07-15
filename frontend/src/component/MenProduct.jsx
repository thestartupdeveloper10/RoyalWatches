/* eslint-disable react/prop-types */
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { addProductWishlist } from '@/redux/wishlistRedux';
// eslint-disable-next-line react/prop-types
const MenProduct = ({product}) => {
    const dispatch = useDispatch();
    const userId= useSelector((state) => state.user.userId);

    return ( 
        <>
        
        <div key={product._id} className="relative md:h-[450px] bg-[#f9f6ee]">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
            <img src={product.img} className="bg-cover object-contain h-full w-full bg-no-repeat" alt={product.title} />
            <Link className="absolute w-2/3 md:bottom-6 bottom-5 z-10 translate-x-[-50%] left-[50%] bg-white text-black md:px-8 md:py-4 px-6 py-[10px] hover:bg-gray-300 duration-150 text-center" to={`/product/${product._id}`} >{product.title}</Link>
            <FavoriteBorderIcon onClick={()=>{dispatch(addProductWishlist({userId,...product}))}} className="absolute top-3 left-3 md:top-6 md:left-6 text-gray-500 cursor-pointer"></FavoriteBorderIcon>
            </div>
        
        </>
     );
}
 
export default MenProduct;