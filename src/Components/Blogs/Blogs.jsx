import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [BlogArray,setBlogArray]=useState([])
    useEffect(()=>{
        fetch('Blog.json')
            .then(res=>res.json())
            .then(data=>setBlogArray(data))
    },[])
    console.log()
    return (
        <div>
            <h2>Done</h2>
            {
                BlogArray.map((blog,idx)=>
                    <Blog key={idx} blog={blog}></Blog>
                )
            }
        </div>
    );
};

export default Blogs;