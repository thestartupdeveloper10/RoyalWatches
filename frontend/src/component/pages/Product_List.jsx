import NavBar from '../NavBar';
import Footer from '../Footer';

import { popularProducts } from "../../data";
import Single_product from '../Single_product';

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

                {popularProducts.map((item)=>{
                    return <Single_product item={item} key={item.id}/>
                })}

            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

 
export default Product_List;