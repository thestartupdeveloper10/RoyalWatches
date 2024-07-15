import Footer from '../Footer';
import NavBar from '../NavBar';
import { useSelector, useDispatch } from "react-redux";
import { removeProductWishlist } from '@/redux/wishlistRedux';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';




const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlist=useSelector((state)=>state.wishlist);
    const handleRemove = (productId) => {
        dispatch(removeProductWishlist(productId));
      };
    return ( 
        <>
        <NavBar/>

        <div className='py-10 mt-10'>
        <h1 className="md:text-2xl lg:text-3xl font-bold text-center mb-8">YOUR WISHLIST</h1>
        {wishlist.products.map((product) => (
            
        <div  key={product._id} className='grid md:flex justify-center py-4 mb-3 bg-[#f7f2ef]'>
            <Link to={`/product/${product._id}`} className='px-6 bg-cover w-auto flex justify-center'>
                  <img src={product.img} alt={product.title} className="w-32 h-32 md:min-h-[250px] md:min-w-[300px] object-cover bg-cover" />
                  </Link>
                  <div className="mx-4 py-3 md:py-1 flex flex-col justify-center">
                  <Link to={`/product/${product._id}`}>
                    <p className="font-semibold text-start text-xl text:sm md:text-base">{product.title}</p>
                    <p className="text-start text:sm md:text-base">{product.desc}</p>
                    <p className="mt-2 text-start font-bold underline underline-offset-8">{product.price}</p>
                    </Link>
                    <button onClick={() => handleRemove(product._id)}  className="text-black text-sm mt-2"><DeleteIcon/></button>
                  </div>
                  
                  
                </div>)  
       )}
       </div>
                <Footer/>
        </>
        
     );
}
 
export default Wishlist;