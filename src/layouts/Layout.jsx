import React from 'react';
import Navbar from '../components/web/navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/web/footer/Footer.jsx';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
}

export default Layout;