import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
  import AddIcon from '@mui/icons-material/Add';

import heroImg from '../assets/imgs/rolex.png'

const CardTemp = () => {
    return ( 
        <>
          <Card>
                <div className="mb-4 bg-[#f7f8f2]">
                    <img src={heroImg} alt="" className="rounded-lg object-contain w-full h-[200px]" />
                </div>
                <CardFooter className='-mb-3'>
                <h1 className="font-bold text-start text-2xl">Zoldwmiths</h1>
                </CardFooter>
                <CardContent >
                    <p className="capitalize text-[#8c8f8f] font-medium text-sm text-start">36mm White Gold Cluster Engagement</p>
                </CardContent>
                <CardFooter className='flex justify-between' >
                <h1 className="font-bold text-xl text-start"><span className="pr-2">$</span>289.95</h1>
                <AddIcon></AddIcon>
                </CardFooter>
                </Card>
        </>
     );
}
 
export default CardTemp;