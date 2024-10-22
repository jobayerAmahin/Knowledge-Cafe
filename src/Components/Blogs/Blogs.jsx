import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [BlogArray,setBlogArray]=useState([])
    useEffect(()=>{
        fetch('Blog.json')
            .then(res=>res.json())
            .then(data=>setBlogArray(data))
    },[])
    
    return (
        <div className="md:w-2/3">
            {
                BlogArray.map(blog=>
                    <Blog key={blog.id} blog={blog}></Blog>
                )
            }
        </div>
    );
};

export default Blogs;