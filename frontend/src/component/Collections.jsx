import Banner from "./Banner";
import Collection_item from "./Collection_item";




const Collections = () => {
  
  const items = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/262484/pexels-photo-262484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "New Releases in Women's Watches",
      des:"Unveil our stunning selection of premium women's watches",
      action:"Shop The Collection",
      cat:"Women"
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/691640/pexels-photo-691640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Latest Trends in Men's Watches",
      des:"Experience the allure of our luxurious Men's watch collection",
      action:"Shop The Collection",
      cat:"Men"
    }
  ];

    return ( 
        <div className="md:mt-20 mt-4">
            <Banner/>
            <div className="flex justify-start">
          <h1 className="uppercase font-bold text-md  md:text-xl md:mt-20 ">
            Curated Category
          </h1>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-5 md:mt-10">
               
               {
                items.map((item)=>{
                  return  <Collection_item item={item} key={item.id}/>
                })
               }
            </div>
        </div>
     );
}
 
export default Collections;