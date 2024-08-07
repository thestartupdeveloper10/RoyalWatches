import NavBar from '../NavBar';
import Footer from '../Footer';
import { useLocation } from "react-router";
import { useState } from "react";
import Products from '../Products';

const Product_List = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <NavBar/>
      <div className='mt-16'>
        <div className="flex flex-col w-full justify-center items-center gap-3 lg:gap-6 lg:mb-10 mb-8">
          <h1 className="font-lightbold md:text-xl text-lg uppercase">Royal watches</h1>
          <h1 className="font-extrabold lg:text-[56px] md:text-[36px] text-2xl">Royalwatches {cat} watches</h1>
        </div>
        <div>
          <div className='lg:mb-20 mb-8 bg-[#f3f3a844]'>
            <div className="flex justify-between flex-wrap">
              <div className="m-5 flex md:flex items-center sm:w-auto">
                <span className="md:text-xl text-start font-semibold mr-5 sm:mr-0">Filter Products:</span>
                <select
                  name="color"
                  onChange={handleFilters}
                  className="p-2 m-0 mr-3 sm:mr-5 sm:m-5 bg-[#dacaca]"
                >
                  <option disabled>Color</option>
                  <option>white</option>
                  <option>black</option>
                  <option>brown</option>
                  <option>red</option>
                  <option>blue</option>
                  <option>yellow</option>
                  <option>green</option>
                  <option>silver</option>
                  <option>gold</option>
                  <option>gray</option>
                </select>
                <select
                  name="size"
                  onChange={handleFilters}
                  className="p-2 m-0 sm:mr-5 sm:m-5 bg-[#dacaca]"
                >
                  <option disabled>Size</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="m-5 flex items-center sm:flex-row sm:w-auto">
                <span className="md:text-xl text-start font-semibold mr-5 sm:mr-0">Sort Products:</span>
                <select
                  onChange={(e) => setSort(e.target.value)}
                  className="p-2 m-0 sm:mr-5 sm:m-5 bg-[#dacaca]"
                >
                  <option value="newest">Newest</option>
                  <option value="asc">Price (asc)</option>
                  <option value="desc">Price (desc)</option>
                </select>
              </div>
              <div className="m-5 flex items-center sm:flex-row sm:w-auto">
                <input
                  type="text"
                  placeholder="Search by title"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="p-2 text-black bg-[#dacaca]"
                />
              </div>
            </div>
          </div>
          <Products cat={cat} filters={filters} sort={sort} searchTerm={searchTerm} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Product_List;
