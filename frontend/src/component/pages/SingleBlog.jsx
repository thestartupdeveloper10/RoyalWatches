import Footer from "../Footer";
import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";

const SingleBlog = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [blog, setBlog] = useState({});

    const api=import.meta.env.VITE_NEWS_API

    useEffect(() => {
        fetch(`https://api.thenewsapi.com/v1/news/uuid/${id}?api_token=${api}`)
            .then(response => response.json())  // Parse JSON
            .then(result => {
                setBlog(result)
            })
            .catch(error => console.log('error', error));
      }, [id]);

      console.log(blog)

    return ( 
        <>
        <NavBar/>
        <div className="py-10 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="">
                    <img src={blog.image_url} className=" object-cover" alt="" />
                    </div>
                    <div>
                    <div>
                        <h1 className="font-extrabold lg:text-[56px] md:text-[36px] text-2xl text-gray-800 leading-none">{blog.title}</h1>
                        <p className="text-center text-lg mt-2 lg:text-xl text-gray-600 max-w-2xl">{blog.description}</p>
                    </div>
                    <div className="mt-5">
                        <p>Read More</p>
                        <Link to={blog.url} className="underline">HERE</Link>
                    </div>
                </div>    
                </div>
               
            </div>

        
       
        <Footer/>
        </>
     );
}
 
export default SingleBlog;