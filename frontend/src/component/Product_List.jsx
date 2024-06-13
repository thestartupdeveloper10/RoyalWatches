import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import heroImg from '../assets/imgs/rolex.png'
import heroDmax from '../assets/imgs/dmax.png'
import NavBar from './NavBar';
import Footer from './Footer';

const Product_List = () => {
  return (
    <div>
        <NavBar/>
      <div className='mt-16'>
        <div className="flex flex-col w-full justify-center items-center gap-3 lg:gap-6 lg:mb-10 mb-8">
          <h1 className="font-lightbold md:text-xl text-lg uppercase">Royal watches</h1>
          <h1 className="font-extrabold lg:text-[56px] md:text-[36px] text-2xl">Royalwatches Men&apos;s watches</h1>
        </div>
        <div>
            <div className='lg:mb-20 mb-8'>Category</div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">


                <div className="grid grid-cols-2 bg-[#f7f8f2] hover:shadow-lg transition duration-300 hover:scale-105 pb-6 md:pb-0">
                    <div className="flex flex-col justify-between px-6 pt-6">
                        <div className="flex flex-col justify-start pb-4 md:pb-0 cursor-pointer">
                            <FavoriteBorderIcon/>
                        </div>
                        <div className="flex flex-col justify-start md:gap-2 gap-1">
                            <h1 className="font-bold text-start capitalize">Datejust 36</h1>
                            <p className='text-start'>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <img src={heroDmax} alt="" className="h-full lg:object-cover object-contain transition duration-300 hover:scale-105" />
                    </div>
                </div>

                <div className="grid grid-cols-2 bg-[#f7f8f2] hover:shadow-lg transition duration-300 hover:scale-105 pb-6 md:pb-0">
                    <div className="flex flex-col justify-between px-6 pt-6">
                        <div className="flex flex-col justify-start pb-4 md:pb-0 cursor-pointer">
                            <FavoriteBorderIcon/>
                        </div>
                        <div className="flex flex-col justify-start md:gap-2 gap-1">
                            <h1 className="font-bold text-start capitalize">Datejust 36</h1>
                            <p className='text-start'>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <img src={heroImg} alt="" className="h-full lg:object-cover object-contain transition duration-300 hover:scale-105" />
                    </div>
                </div>
                <div className="grid grid-cols-2 bg-[#f7f8f2] hover:shadow-lg transition duration-300 hover:scale-105 pb-6 md:pb-0">
                    <div className="flex flex-col justify-between px-6 pt-6">
                        <div className="flex flex-col justify-start pb-4 md:pb-0 cursor-pointer">
                            <FavoriteBorderIcon/>
                        </div>
                        <div className="flex flex-col justify-start md:gap-2 gap-1">
                            <h1 className="font-bold text-start capitalize">Datejust 36</h1>
                            <p className='text-start'>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <img src={heroDmax} alt="" className="h-full lg:object-cover object-contain transition duration-300 hover:scale-105" />
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

 
export default Product_List;