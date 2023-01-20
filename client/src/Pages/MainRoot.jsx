import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const MainRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainRoot