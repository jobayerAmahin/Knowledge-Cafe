
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmark'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
        <div className='max-w-7xl mx-auto'>
          <Header></Header>
          <div className='md:flex'>
            <Blogs></Blogs>
            <Bookmark></Bookmark>
          </div>
        </div>
      
    </>
  )
}

export default App
