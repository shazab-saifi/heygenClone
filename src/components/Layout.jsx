import React from 'react'
import Header from './header/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout