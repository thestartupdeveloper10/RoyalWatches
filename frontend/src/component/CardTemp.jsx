/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addProductWishlist } from '@/redux/wishlistRedux';

const CardTemp = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const quantity = 1;
  const color = product.color[0];
  const size = product.size[0];
  const userId = useSelector((state) => state.user.userId);

  const handleFavoriteClick = () => {
    dispatch(addProductWishlist({ userId, product }));
    setIsFavorite(!isFavorite);
  };

  const handleAddToCartClick = () => {
    dispatch(addProduct({ userId, ...product, quantity, color, size }));
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <Card>
      <div className="mb-4 bg-[#f7f8f2] relative">
        <FavoriteBorderIcon
          onClick={handleFavoriteClick}
          className={`absolute top-3 left-3 md:top-6 md:left-6 cursor-pointer ${isFavorite ? 'text-red-600' : 'text-gray-500'}`}
        />
        <Link to={`/product/${product._id}`}>
          <img src={product.img} alt="" className="rounded-lg object-contain w-full h-[200px]" />
        </Link>
      </div>

      <CardFooter className='-mb-3'>
        <h1 className="font-bold text-start text-xl">{product.title}</h1>
      </CardFooter>
      <CardContent>
        <p className="capitalize text-[#8c8f8f] font-medium text-sm text-start">{product.desc.split(".")[0]}</p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <h1 className="font-bold text-xl text-start"><span className="pr-2">$</span>{product.price}</h1>
        <AddIcon
          onClick={handleAddToCartClick}
          className={`cursor-pointer ${isAddedToCart ? 'text-green-600' : 'text-gray-500'}`}
        />
      </CardFooter>
    </Card>
  );
};

export default CardTemp;
