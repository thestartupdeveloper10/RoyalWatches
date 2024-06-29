/* eslint-disable react/prop-types */
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Single_product = ({ item }) => {
  // Function to get the first paragraph
  const getFirstParagraph = (desc) => {
    // Split by newline or double newline characters
    const paragraphs = desc.split(".");
    // Return the first paragraph or the whole description if there's no paragraph break
    return paragraphs[0];
  };

  // Extract the first paragraph from item.desc
  const firstParagraph = getFirstParagraph(item.desc);

  return (
    <div className="grid grid-cols-2 bg-[#f7f8f2] hover:shadow-lg transition duration-300 hover:scale-105 pb-6 md:pb-0">
      <div className="flex flex-col justify-between px-6 pt-6">
        <div className="flex flex-col justify-start pb-4 md:pb-0 cursor-pointer">
          <FavoriteBorderIcon />
        </div>
        <div className="flex flex-col justify-start md:gap-2 gap-1">
          <h1 className="font-bold text-start capitalize">{item.title}</h1>
          <p className='text-start hidden sm:block text-sm'>{firstParagraph}</p>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-between font-bold'>
            $ {item.price}
            <AddBoxIcon className='cursor-pointer' />
          </div>
          <div className='flex justify-items-start py-3'>
            {item.categories.includes("Men") ? "Men" : "Women"}
          </div>
        </div>
      </div>
      <Link to={`/product/${item._id}`}>
        <div className='h-full w-full flex flex-col justify-center items-center'>
          <img src={item.img} alt="" className="h-full w-full lg:object-cover object-contain transition duration-300 hover:scale-105" />
        </div>
      </Link>
    </div>
  );
}

export default Single_product;
