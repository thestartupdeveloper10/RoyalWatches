import { Add, Remove } from "@mui/icons-material";

import heroImg from "../assets/imgs/rolex.png";

const Cart = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-light text-center mb-8">YOUR BAG</h1>
      <div className="flex justify-between items-center mb-8">
        <button className="px-4 py-2 font-semibold">CONTINUE SHOPPING</button>
        <div className="hidden md:flex">
          <span className="text-sm underline cursor-pointer mr-4">
            Shopping Bag(2)
          </span>
          <span className="text-sm underline cursor-pointer">
            Your Wishlist (0)
          </span>
        </div>
        <button className="px-4 py-2 font-semibold bg-black text-white">
          CHECKOUT NOW
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex-1 mr-4 w-full">
          <div className="flex justify-between mb-4">
            <div className="flex">
              <img src={heroImg} alt="Product" className="w-32 h-32 object-cover" />
              <div className="ml-4">
                <p className="font-semibold text:sm md:text-base">Product: JESSIE THUNDER SHOES</p>
                <p className="text-sm">ID: 93813718293</p>
                <div className="w-4 h-4 rounded-full bg-black mt-2"></div>
                <p className="mt-2">Size: 37.5</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <Add className="w-5 h-5 cursor-pointer" />
                <span className="mx-2">2</span>
                <Remove className="w-5 h-5 cursor-pointer" />
              </div>
              <span className="text-xl font-light">$ 30</span>
            </div>
          </div>
          <hr className="border-gray-300 mb-4" />
          <div className="flex justify-between">
            <div className="flex">
              <img src={heroImg} alt="Product" className="w-32 h-32 object-cover" />
              <div className="ml-4">
                <p className="font-semibold">Product: HAKURA T-SHIRT</p>
                <p className="text-sm">ID: 93813718293</p>
                <div className="w-4 h-4 rounded-full bg-gray-500 mt-2"></div>
                <p className="mt-2">Size: M</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <Add className="w-5 h-5 cursor-pointer" />
                <span className="mx-2">1</span>
                <Remove className="w-5 h-5 cursor-pointer" />
              </div>
              <span className="text-xl font-light">$ 20</span>
            </div>
          </div>
        </div>
        <div className="flex-1 border border-gray-300 rounded-lg p-4 mt-4 md:mt-0">
          <h2 className="text-xl font-light mb-4">ORDER SUMMARY</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$ 80</span>
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
            <span>$ 80</span>
          </div>
          <button className="w-full py-2 bg-black text-white font-semibold">
            CHECKOUT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
