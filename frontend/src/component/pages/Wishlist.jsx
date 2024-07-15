import Footer from '../Footer';
import NavBar from '../NavBar';
import { useSelector, useDispatch } from "react-redux";
import { removeProductWishlist,selectWishlistItems } from '@/redux/wishlistRedux';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';




const Wishlist = () => {
    const dispatch = useDispatch();
    // const wishlist=useSelector((state)=>state.wishlist);
    
    const userId= useSelector((state) => state.user.userId);
    const wishlist = useSelector(state => selectWishlistItems(state, userId));
    const handleRemove = (productId) => {

        dispatch(removeProductWishlist({ userId, productId }));
        console.log(productId)
      };


    console.log(wishlist)
    console.log(userId)
    
    return ( 
        <>
        <NavBar/>

        <div className='py-10 mt-10'>
        <h1 className="md:text-2xl lg:text-3xl font-bold text-center mb-8">YOUR WISHLIST</h1>
        {wishlist.products.map((item) => (
          
            
        <div  key={item.product._id} className='grid md:flex justify-center py-4 mb-3 bg-[#f7f2ef]'>
            <Link to={`/product/${item.product._id}`} className='px-6 bg-cover w-auto flex justify-center'>
                  <img src={item.product.img} alt={item.product.title} className="w-32 h-32 md:min-h-[250px] md:min-w-[300px] object-cover bg-cover" />
                  </Link>
                  <div className="mx-4 py-3 md:py-1 flex flex-col justify-center">
                  <Link to={`/product/${item.product._id}`}>
                    <p className="font-semibold text-start text-xl text:sm md:text-base">{item.product.title}</p>
                    <p className="text-start text:sm md:text-base">{item.product.desc}</p>
                    <p className="mt-2 text-start font-bold underline underline-offset-8">{item.product.price}</p>
                    </Link>
                    <button onClick={() => handleRemove(item.product._id)}  className="text-black text-sm mt-2"><DeleteIcon/></button>
                  </div>
                  
                  
                </div>)  
       )}
       </div>
                <Footer/>
        </>
        
     );
}
 
export default Wishlist;