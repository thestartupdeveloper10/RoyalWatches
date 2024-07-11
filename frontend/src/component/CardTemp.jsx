/* eslint-disable react/prop-types */
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
  import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";



const CardTemp = ({ item }) => {  
    const dispatch = useDispatch();
    const quantity = 1;
    const color= item.color[0]
    const size = item.size[0]
    return ( 
        <>
          <Card>
                <Link to={`/product/${item._id}`}>
                <div className="mb-4 bg-[#f7f8f2]">
                    <img src={item.img} alt="" className="rounded-lg object-contain w-full h-[200px]" />
                </div>
                </Link>
                <CardFooter className='-mb-3'>
                <h1 className="font-bold text-start text-xl">{item.title}</h1>
                </CardFooter>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-sm text-start">{item.desc.split(".")[0]}</p>
                </CardContent>
                <CardFooter className='flex justify-between' >
                <h1 className="font-bold text-xl text-start"><span className="pr-2">$</span>{item.price}</h1>
                <AddIcon onClick={()=>{dispatch(addProduct({...item,quantity, color, size}))}} className="cursor-pointer"></AddIcon>
                </CardFooter>
                </Card>
        </>
     );
}
 
export default CardTemp;