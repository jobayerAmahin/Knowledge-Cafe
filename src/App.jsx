
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmark'
import Header from './Components/Header/Header'

function App() {
  const [BookMarkTitle,setBookMarkTitle]=useState([])
  const handleBookMark=title=>{
      const newTitle=[...BookMarkTitle,title]
      setBookMarkTitle(newTitle)
  }
  console.log(BookMarkTitle)
  return (
    <>
        <div className='max-w-7xl mx-auto'>
          <Header></Header>
          <div className='md:flex'>
            <Blogs handleBookMark={handleBookMark}></Blogs>
            <Bookmark BookMarkTitle={BookMarkTitle}></Bookmark>
          </div>
        </div>
      
    </>
  )
}

export default App
