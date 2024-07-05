import Footer from "../Footer";
import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardTitle,
  } from "@/components/ui/card"

const SingleBlog = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const api=import.meta.env.VITE_NEWS_NY_API

    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
            // https://api.nytimes.com/svc/search/v2/articlesearch.json?q={watches,tagheuer,rolex,patek}&
            fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q={watches,rolex}&api-key=${api}`)
            .then(response => response.json())  // Parse JSON
            .then(result => {
              if (result.response.docs && Array.isArray(result.response.docs)) {
                setBlogs(result.response.docs);  // Assuming 'data' is the array of articles
              } else {
                console.error('Unexpected API response structure:', result);
                setBlogs([]);  // Set to empty array if data is not as expected
              }
            })
            .catch(error => console.log('error', error));

    },[id])

    return ( 
        <>
        <NavBar/>
        <div className="">
        <div className="rounded-lg md:py-10 py-4 md:px-8 px-3  bg-[#f7f8f2] md:mt-20 mt-8">
                <div className="flex flex-col justify-center items-center mb-3 w-full">
                    <h1 className="font=extrabold text-sm mb-3">Explore</h1>
                    <h1 className="font-bold text-lg">All The Blog</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                    {Array.isArray(blogs) && blogs.map((blog)=>(
                        <Card key={blog._id}>
                            <Link to={blog.web_url} target="_blank" >
                        <div className="mb-4">
                            <img src={`https://static01.nyt.com/${blog.multimedia.map((url)=>(url.url)).slice(0,1)}`} alt="" className="rounded-t-lg object-cover w-full h-[300px]" />
                        </div>
                        <CardTitle className='mb-4 capitalize'>{blog.headline.main}</CardTitle>
                        <CardContent>
                            <p className="text-center capitalize text-[#4c4d4d] font-medium">{blog.snippet}</p>
                        </CardContent>
                        </Link>
                        </Card>
                    ))}
                </div>
            </div>
               
            </div>

        
       
        <Footer/>
        </>
     );
}
 
export default SingleBlog;