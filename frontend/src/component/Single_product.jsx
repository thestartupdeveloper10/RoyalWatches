/* eslint-disable react/prop-types */
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Single_product = ( { item } ) => {
  return (
    <div>

            <div className="grid grid-cols-2 bg-[#f7f8f2] hover:shadow-lg transition duration-300 hover:scale-105 pb-6 md:pb-0">
                                <div className="flex flex-col justify-between px-6 pt-6">
                                    <div className="flex flex-col justify-start pb-4 md:pb-0 cursor-pointer">
                                        <FavoriteBorderIcon/>
                                    </div>
                                    <div className="flex flex-col justify-start md:gap-2 gap-1">
                                        <h1 className="font-bold text-start capitalize">{item.title}</h1>
                                        <p className='text-start'>{item.des}</p>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div>
                                    <img src={item.img} alt="" className="h-full lg:object-cover object-contain transition duration-300 hover:scale-105" />
                                </div>
                            </div>

            </div>
  )
}

export default Single_product