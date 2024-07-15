import { Add, Remove } from "@mui/icons-material";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../service/requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState(""); // State to track selected color
  const [size, setSize] = useState(""); // State to track selected size
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color: selectedColor, size }));
  };

  return (
    <>
      <NavBar />
      <div className="py-10 mt-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 sm:mb-0">
            <img
              src={product.img}
              alt="Product"
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="md:w-1/2 bg-[#e2e2ba] rounded-md px-5 py-5">
            <h1 className="text-3xl font-light">{product.title}</h1>
            <p className="mt-5 text-center md:text-start">{product.desc}</p>
            <p className="mt-5 text-3xl font-bold">$ {product.price}</p>
            <div className="mt-6 flex flex-col md:flex-row">
              <div className="mb-4 md:mb-0 md:mr-8">
                <span className="text-lg font-light">Color</span>
                <div className="mt-2 flex">
                  {product.color?.map((c, index) => (
                    <div
                      className={`w-6 h-6 rounded-full mr-2 cursor-pointer ${
                        selectedColor === c ? "border-2 border-gray-400" : ""
                      }`}
                      style={{ backgroundColor: c }}
                      key={index}
                      onClick={() => setSelectedColor(c)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="md:ml-8">
                <span className="text-lg font-light px-2">Size</span>
                <div className="mt-2 flex flex-wrap">
                  <select
                    className="border border-gray-300 bg-[#dacaca] rounded px-4 py-3"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option value="" disabled>
                      Select a size
                    </option>
                    {product.size?.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center mr-4">
                <Remove
                  className="w-5 h-5 bg-gray-400 rounded-full cursor-pointer"
                  onClick={() => handleQuantity("dec")}
                />
                <span className="mx-2 font-bold">{quantity}</span>
                <Add
                  className="w-5 h-5 bg-gray-400 rounded-full cursor-pointer"
                  onClick={() => handleQuantity("inc")}
                />
              </div>
              <button
                onClick={handleClick}
                className="px-6 py-3 bg-black rounded-md border border-black text-white font-medium hover:bg-gray-800 transition-colors"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
