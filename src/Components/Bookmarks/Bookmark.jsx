import PropTypes from "prop-types";
const Bookmark = ({BookMarkTitle,readingTime}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-lg p-5">
            <div className="border-2 mb-9 border-dashed border-violet-800 bg-violet-300 text-center text-xl p-5 font-bold rounded-lg">
                Spent Time on Read:{readingTime}
            </div>
            <div>
            {
                BookMarkTitle.map((markTitle,idx)=>
                    <div className="card rounded-lg p-6 bg-slate-200 my-4 font-bold" key={idx}>{markTitle.title}</div>
                )
            }
            </div>
        </div>
    );
};
Bookmark.propTypes={
    BookMarkTitle:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmark;