
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmark'
import Header from './Components/Header/Header'

function App() {
  const [BookMarkTitle,setBookMarkTitle]=useState([])
  const handleBookMark=blog=>{
      const newTitle=[...BookMarkTitle,blog]
      setBookMarkTitle(newTitle)
  }

  const [readingTime,setReadingTime]=useState(0)
  const handleReadingTime=(timeValue,id)=>{
    setReadingTime(readingTime+timeValue)
    //Adding Bookmark Discard function
    const remainingBookmarks=BookMarkTitle.filter(bookMark=>bookMark.id!==id)
    setBookMarkTitle(remainingBookmarks)
  }
  console.log(readingTime)
  return (
    <>
        <div className='max-w-7xl mx-auto'>
          <Header></Header>
          <div className='md:flex'>
            <Blogs handleReadingTime={handleReadingTime} handleBookMark={handleBookMark}></Blogs>
            <Bookmark readingTime={readingTime} BookMarkTitle={BookMarkTitle}></Bookmark>
          </div>
        </div>
      
    </>
  )
}

export default App
