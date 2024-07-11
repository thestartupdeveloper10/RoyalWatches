import { Add, Remove } from "@mui/icons-material";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct, updateProductQuantity } from "../../redux/cartRedux";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const shippingFee= 100;

  const handleQuantity = (type, productId) => {
    const product = cart.products.find((item) => item._id === productId);
    if (type === "dec" && product.quantity > 1) {
      dispatch(updateProductQuantity({ id: productId, quantity: product.quantity - 1 }));
    } else if (type === "inc") {
      dispatch(updateProductQuantity({ id: productId, quantity: product.quantity + 1 }));
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };

  return (
    <>
      <NavBar />
      <div className="md:py-16 py-6 mt-10">
        <h1 className="text-3xl font-light text-center mb-8">YOUR BAG</h1>
        <div className="flex justify-between items-center mb-8">
          <Link to="/products">
            <button className="px-4 py-2 font-semibold">CONTINUE SHOPPING</button>
          </Link>
          <div className="hidden md:flex">
            <span className="text-sm underline cursor-pointer mr-4">
              Shopping Bag({cart.products.length})
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
            {cart.products.map((product) => (
              <div className="flex flex-col lg:flex-row justify-between mb-4 bg-[#f7f2ef] py-3 px-3 rounded-md" key={product._id}>
                <div className="flex">
                  <img src={product.img} alt={product.title} className="h-24 w-24 sm:w-32 sm:h-32 lg:h-48 lg:w-48 object-cover" />
                  <div className="py-1">
                    <p className="font-semibold text:sm md:text-base">{product.title}</p>
                    <p className="text-sm">{product._id}</p>
                    <div className="w-4 h-4 rounded-full mt-2" style={{ backgroundColor: product.color }}></div>
                    <p className="mt-2">Size: {product.size}</p>
                    <button onClick={() => handleRemove(product._id)} className="text-black text-sm mt-2"><DeleteIcon/></button>
                  </div>
                </div>
                <div className="flex flex-col border-2 lg:border-0 items-center py-3">
                  <div className="flex items-center mb-2">
                    <Add onClick={() => handleQuantity("inc", product._id)} className="w-5 h-5 bg-gray-400 rounded-full cursor-pointer" />
                    <span className="mx-2">{product.quantity}</span>
                    <Remove onClick={() => handleQuantity("dec", product._id)} className="w-5 h-5 bg-gray-400 rounded-full cursor-pointer" />
                  </div>
                  <span className="text-xl font-light">$ {product.price * product.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 border border-gray-300 rounded-lg p-4 mt-4 md:mt-0">
            <h2 className="text-xl font-light mb-4">ORDER SUMMARY</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$ {cart.total}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimated Shipping</span>
              <span>${shippingFee}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Discount</span>
              <span>{cart.total>100000?cart.total*0.05:0}</span>
            </div>
            <div className="flex justify-between mb-4 font-semibold text-lg">
              <span>Total</span>
              <span>{cart.total-(shippingFee+cart.total>100000?cart.total*0.05:0)}</span>
            </div>
            <button className="w-full py-2 bg-black text-white font-semibold">
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
