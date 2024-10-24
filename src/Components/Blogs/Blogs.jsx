import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookMark,handleReadingTime}) => {
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
                    <Blog key={blog.id} blog={blog} handleReadingTime={handleReadingTime} handleBookMark={handleBookMark}></Blog>
                )
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookMark:PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blogs;