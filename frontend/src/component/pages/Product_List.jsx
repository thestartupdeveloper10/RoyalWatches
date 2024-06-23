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
            <div className='lg:mb-20 mb-8 bg-[#f3f3a844]'>
              
            <div className="flex justify-between flex-wrap">
        <div className="m-5 flex md:flex  items-center sm:w-auto">
          <span className="md:text-xl font-semibold mr-5 sm:mr-0">Filter Products:</span>
          <select
            name="color"
            onChange={()=>{}}
            className="p-2 m-0 mr-3 sm:mr-5 sm:m-5"
          >
            <option disabled>Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <select
            name="size"
            onChange={()=>{}}
            className="p-2 m-0 sm:mr-5 sm:m-5"
          >
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="m-5 flex items-center sm:flex-row sm:w-auto">
          <span className="md:text-xl font-semibold mr-5 sm:mr-0">Sort Products:</span>
          <select
            onChange={()=>{}}
            className="p-2 m-0 sm:mr-5 sm:m-5"
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>


            </div>
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