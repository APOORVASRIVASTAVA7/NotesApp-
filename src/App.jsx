import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar'
import RecentlyCards from './components/RecentlyCards/RecentlyCards'
import AllCards from './components/AllCards/AllCards'
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const cards = [
    {
      id: 1,
      heading: "Untitled Note",
      content: "hey there",
      date: "May 30, 2026"

    },
    {
      id: 2,
      heading: "Untitled Note",
      content: "nothing to worry about",
      date: "May 30, 2026"
    },
    {
      id: 3,
      heading: "Untitled Note",
      content: "everything is fine ",
      date: "May 30, 2026"
    }
  ]


  return (
    <div id='whole' className='w-full h-screen'>
      <div className='px-95 py-20' >
        <Navbar />
        <Searchbar />
        <RecentlyCards cards={cards} />
        <AllCards />
      </div>
    </div>
  )
}

export default App
