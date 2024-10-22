
const Blog = ({blog}) => {
    const {cover}=blog
    return (
        <div>
                    <div>
                        <h1>Good</h1>
                        <img className="h-[100px] w-[200px" src={cover} alt="" />
                    </div>
        </div>
    );
};

export default Blog;