import { Add, Remove } from "@mui/icons-material";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../service/requestMethods";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState(""); // State to track selected size

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

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Set the selected size
  };

  return (
    <>
      <NavBar />
      <div className="py-10 mt-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 sm:mb-0">
            <img src={product.img} alt="Product" className="w-full h-96 object-contain" />
          </div>
          <div className="md:w-1/2 bg-[#e2e2ba] rounded-md px-5 py-5">
            <h1 className="text-3xl font-light">{product.title}</h1>
            <p className="mt-5 text-start">{product.desc}</p>
            <p className="mt-5 text-3xl font-bold">$ {product.price}</p>
            <div className="mt-6 flex flex-col md:flex-row">
              <div className="mb-4 md:mb-0 md:mr-8">
                <span className="text-lg font-light">Color</span>
                <div className="mt-2 flex">
                  {product.color?.map((c, index) => (
                    <div
                      className="w-6 h-6 rounded-full mr-2 cursor-pointer"
                      style={{ backgroundColor: c }}
                      key={index}
                      onClick={() => console.log(c)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="md:ml-8">
                <span className="text-lg font-light px-2">Size</span>
                <div className="mt-2 flex flex-wrap">
                  {product.size?.map((size, index) => (
                    <button
                      key={index}
                      className={`border border-yellow-500 rounded px-2 py-1 mr-2 mb-2 cursor-pointer ${selectedSize === size ? 'bg-gray-600' : ''}`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
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
      <Footer />
    </>
  );
};

export default Product;
