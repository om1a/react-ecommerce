import React from 'react'
import Navbar from '../components/dashboard/navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/dashboard/footer/Footer.jsx'

export default function Dashboardlayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer />
    </div>
  )
}
