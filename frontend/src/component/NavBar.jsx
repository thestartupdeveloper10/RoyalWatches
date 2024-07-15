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

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const user = useSelector(state => state.user.currentUser);
  const quantity = useSelector(state => state.cart.quantity);
  const wishlistQuantity = useSelector(state => state.wishlist.quantity);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className='fixed z-50 top-0 w-full bg-[#e2e2ba] left-0'>
      <div className="flex justify-evenly items-center py-4 md:py-6 px-4 md:px-8">
        <div className="hidden md:flex justify-start gap-12 items-center w-full">
          <Link to="/Men">
            <Button>Men</Button>
          </Link>
          <Link to="/Women">
            <Button>Women</Button>
          </Link>
        </div>
        <div className='md:hidden px-1 cursor-pointer'>
          <Button onClick={handleClick} className="px-2 md:px-3">
            {isVisible ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </div>
        <div>
          <Link to="/" className="text-lg md:text-2xl font-bold ">RoyalWatches</Link>
        </div>
        <div className="flex justify-end gap-2 items-center w-full">
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
                <Button className="px-2 md:px-3 relative">
                  <FavoriteBorderIcon />
                  {wishlistQuantity > 0 && (
                    <div className="rounded-full h-7 w-7 bg-gray-500 flex justify-center items-center absolute -top-3 -right-2">
                      <span>{wishlistQuantity}</span>
                    </div>
                  )}
                </Button>
              </Link>
              <Link to="/cart">
                <Button className="px-2 md:px-3 relative">
                  <LocalMallIcon />
                  {quantity > 0 && (
                    <div className="rounded-full h-7 w-7 bg-gray-500 flex justify-center items-center absolute -top-3 -right-3">
                      <span>{quantity}</span>
                    </div>
                  )}
                </Button>
              </Link>
              <Button onClick={handleLogout} className="px-2 md:px-3 hidden md:block">Log out</Button>
            </>
          )}
        </div>
      </div>
      <div className='flex px-6 flex-col border-t-2 py-6 gap-3 justify-center w-full border-gray-500 items-start md:hidden z-50' style={{ display: isVisible ? 'flex' : 'none' }}>
        <Link to="/Men" className='flex justify-between w-full items-center underline underline-offset-8'>
          <h1>Men</h1>
          <ArrowForwardIcon className='text-gray-600' />
        </Link>
        <Link to="/Women" className='flex justify-between w-full items-center underline underline-offset-8'>
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
