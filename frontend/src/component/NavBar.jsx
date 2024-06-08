import { Button } from "@/components/ui/button";
const NavBar = () => {
    return ( 
        <div>
            <div className="flex justify-evenly items-center w-full">
                <div  className="hidden md:flex justify-start  gap-12 items-center w-full">
                    <Button>Men</Button>
                    <Button>Women</Button>
                </div>
                <div><h1 className="text-2xl font-bold ">RoyalWatches</h1></div>
                <div className="hidden md:flex justify-end gap-2 items-center w-full">
                    <Button>F</Button>
                    <Button>C</Button>
                    <Button>D</Button>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;