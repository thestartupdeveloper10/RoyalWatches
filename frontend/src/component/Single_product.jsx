/* eslint-disable react/prop-types */
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from "../redux/cartRedux";
import { addProductWishlist } from '@/redux/wishlistRedux';

const Single_product = ({ product }) => {
  // State to track the clicked status of icons
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const getFirstParagraph = (desc) => {
    const paragraphs = desc.split(".");
    return paragraphs[0];
  };

  const firstParagraph = getFirstParagraph(product.desc);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);

  const quantity = 1;
  const color = product.color[0];
  const size = product.size[0];

  const handleFavoriteClick = () => {
    dispatch(addProductWishlist({ userId, product }));
    setIsFavorite(!isFavorite);
  };

  const handleAddToCartClick = () => {
    dispatch(addProduct({ userId, ...product, quantity, color, size }));
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <div className="grid grid-cols-2 bg-[#f7f8f2] hover:shadow-lg transition duration-300 hover:scale-105 pb-6 md:pb-0">
      <div className="flex flex-col justify-between px-6 pt-6">
        <div className="flex flex-col justify-start pb-4 text-gray-500 md:pb-0 cursor-pointer">
          <FavoriteBorderIcon 
            onClick={handleFavoriteClick} 
            className={isFavorite ? 'text-red-600' : 'text-gray-500'} 
          />
        </div>
        <div className="flex flex-col justify-start md:gap-2 gap-1">
          <h1 className="font-bold text-start capitalize">{product.title}</h1>
          <p className='text-start hidden sm:block text-sm'>{firstParagraph}</p>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-between font-bold'>
            $ {product.price}
            <AddBoxIcon 
              onClick={handleAddToCartClick} 
              className={`cursor-pointer ${isAddedToCart ? 'text-green-600' : 'text-gray-500'}`} 
            />
          </div>
          <div className='flex justify-items-start py-4 underline underline-offset-8 text-gray-600'>
            {product.categories.includes("Men") ? "Men" : "Women"}
          </div>
        </div>
      </div>
      <Link to={`/product/${product._id}`}>
        <div className='h-full w-full flex flex-col justify-center items-center'>
          <img src={product.img} alt="" className="h-full w-full lg:object-cover object-contain transition duration-300 hover:scale-105" />
        </div>
      </Link>
    </div>
  );
}

export default Single_product;
