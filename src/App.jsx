import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import Navbar from './components/Navbar'
import Project from './pages/Project'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />


        {/* <Route path='/useState' element={<UseState />} />
        <Route path='/useEffect' element={<UseEffect />} /> */}


      </Routes>

      <Footer/>
    </div>
  )
}

export default App