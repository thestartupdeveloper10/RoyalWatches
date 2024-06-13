import { Add, Remove } from "@mui/icons-material";
import heroImg from "../assets/imgs/rolex.png";
import NavBar from "./NavBar";

const Product = () => {
  return (
    <>
    <NavBar/>
    <div className="py-10 mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={heroImg} alt="Product" className="w-full h-96 object-contain" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h1 className="text-3xl font-light">Denim Jumpsuit</h1>
          <p className="mt-5 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <p className="mt-5 text-3xl font-bold">$ 20</p>
          <div className="mt-6 flex flex-col md:flex-row ">
            <div className="mb-4 md:mb-0 md:mr-8">
              <span className="text-lg font-light">Color</span>
              <div className="mt-2 flex">
                <div className="w-6 h-6 rounded-full bg-black mr-2 cursor-pointer"></div>
                <div className="w-6 h-6 rounded-full bg-blue-800 mr-2 cursor-pointer"></div>
                <div className="w-6 h-6 rounded-full bg-gray-500 cursor-pointer"></div>
              </div>
            </div>
            <div className="">
              <span className="text-lg font-light px-2">Size</span>
              <select className="border border-gray-300 rounded px-2 py-1">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center mr-4">
              <Remove className="w-5 h-5 bg-gray-400 rounded-full cursor-pointer" />
              <span className="mx-2 font-bold">1</span>
              <Add className="w-5 h-5 bg-gray-400 rounded-full cursor-pointer" />
            </div>
            <button className="px-6 py-3 bg-white rounded-md border border-black text-black font-medium hover:bg-gray-100 transition-colors">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;
