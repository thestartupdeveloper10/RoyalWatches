import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { logout } from "../redux/userRedux";
import {selectWishlistItems} from '../redux/wishlistRedux'
import { selectCartItems } from '@/redux/cartRedux';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const user = useSelector(state => state.user.currentUser);
  const userId= useSelector((state) => state.user.userId);
  const {quantity} = useSelector(state => selectCartItems(state,userId));
  const {wishQuantity} = useSelector(state => selectWishlistItems(state, userId));

  const dispatch = useDispatch();

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className='fixed z-50 top-0 w-full bg-[#2e2e16] left-0'>
      <div className="flex items-center px-4 py-4 justify-evenly md:py-6 md:px-8">
        <div className="items-center justify-start hidden w-full gap-12 md:flex">
          <Link to="/Men">
            <Button>Men</Button>
          </Link>
          <Link to="/Women">
            <Button>Women</Button>
          </Link>
        </div>
        <div className='px-1 cursor-pointer md:hidden'>
          <Button onClick={handleClick} className="px-2 md:px-3">
            {isVisible ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </div>
        <div>
          <Link to="/" className="font-serif text-lg font-bold text-white md:text-2xl ">RoyalWatches</Link>
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          <Link to={user ? "/userprofile" : "/login"}>
            <Button className="px-2 md:px-3">
              {user ? (
                user.username.slice(0, 2).toUpperCase()
              ) : (
                <LoginIcon />
              )}
            </Button>
          </Link>
          {user && (
            <>
              <Link to='/wishlist'>
                <Button className="relative px-2 md:px-3">
                  <FavoriteBorderIcon />
                  {wishQuantity > 0 && (
                    <div className="absolute flex items-center justify-center bg-gray-500 rounded-full h-7 w-7 -top-3 -right-2">
                      <span>{wishQuantity}</span>
                    </div>
                  )}
                </Button>
              </Link>
              <Link to="/cart">
                <Button className="relative px-2 md:px-3">
                  <LocalMallIcon />
                  {quantity > 0 && (
                    <div className="absolute flex items-center justify-center bg-gray-500 rounded-full h-7 w-7 -top-3 -right-3">
                      <span>{quantity}</span>
                    </div>
                  )}
                </Button>
              </Link>
              <Button onClick={handleLogout} className="hidden px-2 md:px-3 md:block">Log out</Button>
            </>
          )}
        </div>
      </div>
      <div className='z-50 flex flex-col items-start justify-center w-full gap-3 px-6 py-6 border-t-2 border-gray-500 md:hidden' style={{ display: isVisible ? 'flex' : 'none' }}>
        <Link to="/Men" className='flex items-center justify-between w-full underline underline-offset-8'>
          <h1>Men</h1>
          <ArrowForwardIcon className='text-gray-600' />
        </Link>
        <Link to="/Women" className='flex items-center justify-between w-full underline underline-offset-8'>
          <h1>Women</h1>
          <ArrowForwardIcon className='text-gray-600' />
        </Link>
        {user && (
          <div className='mt-3'>
            <Button onClick={handleLogout}>Log out</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
