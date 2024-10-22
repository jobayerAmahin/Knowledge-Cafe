import PropTypes from "prop-types";
const Bookmark = ({BookMarkTitle}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-lg p-5">
            {
                BookMarkTitle.map((markTitle,idx)=>
                    <div className="card rounded-lg p-6 ml-4 bg-slate-200 my-4 font-bold" key={idx}>{markTitle}</div>
                )
            }
        </div>
    );
};
Bookmark.propTypes={
    BookMarkTitle:PropTypes.array
}
export default Bookmark;