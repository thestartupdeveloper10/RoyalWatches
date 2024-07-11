import { Add, Remove } from "@mui/icons-material";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  return (
    <>
    <NavBar/>
     <div className="md:py-16 py-6 mt-10">
      <h1 className="text-3xl font-light text-center mb-8">YOUR BAG</h1>
      <div className="flex justify-between items-center mb-8">
      <Link to='/products'>
        <button className="px-4 py-2 font-semibold">CONTINUE SHOPPING</button>
        </Link>
        <div className="hidden md:flex">
          <span className="text-sm underline cursor-pointer mr-4">
            Shopping Bag(2)
          </span>
          <span className="text-sm underline cursor-pointer">
            Your Wishlist (0)
          </span>
        </div>
        <button className="px-4 py-2 rounded-md font-semibold bg-black text-white">
          CHECKOUT NOW
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex-1 mr-4 w-full">

          {cart.products.map((product) =>{ 
            console.log(product.price)
            return(
            
            <> 
          <div className="flex flex-col lg:flex-row justify-between mb-4" key={product._id}>
            <div className="flex">
              <img src={product.img} alt={product.title} className="w-32 h-32 object-cover" />
              <div className="ml-4 border-t-2 lg:border-t-0 py-1" >
                <p className="font-semibold text:sm md:text-base">{product.title}</p>
                <p className="text-sm">{product._id}</p>
                <div className="w-4 h-4 rounded-full mt-2" style={{ backgroundColor: product.color }}></div>
                <p className="mt-2">Size: {product.size}</p>
              </div>
            </div>
            <div className="flex flex-col border-2 lg:border-0 items-center py-3">
              <div className="flex items-center mb-2">
                <Add className="w-5 h-5 bg-gray-400 rounded-full cursor-pointer" />
                <span className="mx-2">{product.quantity}</span>
                <Remove className="w-5 h-5 bg-gray-400 rounded-full cursor-pointer" />
              </div>
              <span className="text-xl font-light">$ {product.price * product.quantity}</span>
            </div>
          </div>
          <hr className="border-gray-300 mb-4" />
          </>
        )})}
        </div>
        <div className="flex-1 border border-gray-300 rounded-lg p-4 mt-4 md:mt-0">
          <h2 className="text-xl font-light mb-4">ORDER SUMMARY</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$ {cart.total}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Estimated Shipping</span>
            <span>$ 5.90</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Discount</span>
            <span>$ -5.90</span>
          </div>
          <div className="flex justify-between mb-4 font-semibold text-lg">
            <span>Total</span>
            <span>{cart.total}</span>
          </div>
          <button className="w-full py-2 bg-black text-white font-semibold">
            CHECKOUT NOW
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default Cart;
