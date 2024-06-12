import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';



const NavBar = () => {
    return ( 
        <div>
            <div className="flex justify-evenly items-center w-full">
                <div  className="hidden md:flex justify-start  gap-12 items-center w-full">
                    <Button>Men</Button>
                    <Button>Women</Button>
                </div>
                <div><Link to="/" className="text-2xl font-bold ">RoyalWatches</Link></div>
                <div className="hidden md:flex justify-end gap-2 items-center w-full">
                    
                    <Link><Button><LoginIcon/></Button></Link>
                    <Link><Button><FavoriteBorderIcon/></Button></Link>
                    <Link to="/cart"><Button><LocalMallIcon/></Button></Link>   
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;