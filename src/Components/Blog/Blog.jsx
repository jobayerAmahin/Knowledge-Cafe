import PropTypes from 'prop-types'; 
import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({blog,handleBookMark,handleReadingTime}) => {
    const {cover,author,posted_date,reading_time,title,hashtags,id}=blog
    return (
        <div>
            <div className='w-11/12 mx-auto space-y-4 my-8 py-4 border-b-2'>
                <img className="h-[400px] rounded-lg w-[900px]" src={cover} alt="" />
                <div className='flex justify-between items-center space-y-4'>
                    <div className='flex gap-3 justify-between items-center'>
                        <img className="h-[50px] w-[50px] rounded-full" src={cover} alt="" />
                        <div>
                            <h4 className='text-lg font-bold'>{author}</h4>
                            <h6 className='text-md'>{posted_date}</h6>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-md'>{reading_time+' '}min read</span>
                        <button onClick={()=>handleBookMark(blog)} className='ml-2 hover:bg-blue-200'><FaRegBookmark></FaRegBookmark></button>
                    </div>
                </div>
                <h1 className='text-5xl font-bold my-4'>{title}</h1>
                <p>
                    {
                        hashtags.map((hash,idx)=> <span key={idx} className='mx-1'><a href="">{hash}</a></span>)
                    }
                </p>
                <button onClick={()=>handleReadingTime(reading_time,id)} className='btn btn-md underline text-md text-blue-400 my-4'>Mark as read</button>
            </div>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookMark:PropTypes.func,
    handleReadingTime:PropTypes.func
}
export default Blog;