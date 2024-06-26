import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";



const NavBar = () => {

    const quantity = useSelector(state=>state.cart.quantity)
   

    return ( 
        <div>
            <div className="flex justify-evenly items-center w-full bg-[#e2e2ba] fixed z-50 left-0 py-4 md:py-6 px-4 md:px-8 top-0">
                <div  className="hidden md:flex justify-start  gap-12 items-center w-full">
                    <Link to="/Men">
                    <Button>Men</Button>
                    </Link>
                    
                    <Link to="/Women">
                    <Button>Women</Button>
                    </Link>
                </div>
                <div className='md:hidden px-1 cursor-pointer'>
                    <MenuIcon></MenuIcon>
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
        </div>
     );
}
 
export default NavBar;