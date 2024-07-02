import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';



const NavBar = () => {

    const [isVisible, setIsVisible] = useState(false);

    const quantity = useSelector(state=>state.cart.quantity)
    const handleClick =()=>{
        setIsVisible(!isVisible)
    console.log('clicked')
     }

    return ( 
        <div className='fixed z-50 top-0 w-full bg-[#e2e2ba] left-0'>
            <div className="flex justify-evenly items-center     py-4 md:py-6 px-4 md:px-8 ">
                <div  className="hidden md:flex justify-start  gap-12 items-center w-full">
                    <Link to="/Men">
                    <Button>Men</Button>
                    </Link>
                    
                    <Link to="/Women">
                    <Button>Women</Button>
                    </Link>
                </div>
                <div className='md:hidden px-1 cursor-pointer'>
                    <Button onClick={handleClick} className="px-2 md:px-3">
                    {  isVisible ?<CloseIcon></CloseIcon> : <MenuIcon></MenuIcon> }
                    </Button>
                    
                </div>
                <div><Link to="/" className="text-lg md:text-2xl font-bold ">RoyalWatches</Link></div>
                <div className="flex justify-end gap-2 items-center w-full">
                    
                    <Link to="/login"><Button className="px-2 md:px-3"><LoginIcon/></Button></Link>
                    <Link><Button className="px-2 md:px-3"><FavoriteBorderIcon/></Button></Link>
                    <Link to="/cart"><Button className="px-2 md:px-3 relative"><LocalMallIcon/>
                    <div className="rounded-full h-7 w-7 bg-gray-500 flex justify-center items-center absolute -top-3 -right-3"><span>{quantity}</span></div>
                    </Button></Link>   
                </div>
            </div>
            <div className='flex px-6 flex-col border-t-2 py-6 gap-3 justify-center w-full border-gray-500 items-start md:hidden z-50' style={{ display: isVisible ? 'flex' : 'none' }} >
                    <Link to="/Men" className='flex justify-between w-full items-center underline underline-offset-8' >
                    <h1>Men</h1>
                    <ArrowForwardIcon className='text-gray-600'/>
                    
                    </Link>
                    
                    <Link to="/Women" className='flex justify-between w-full items-center underline underline-offset-8'  >
                    <h1>
                    Women
                    </h1>
                    
                    <ArrowForwardIcon className='text-gray-600'/>
                    </Link>
            </div>
           
        </div>
     );
}
 
export default NavBar;