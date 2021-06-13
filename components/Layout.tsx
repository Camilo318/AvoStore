import React from 'react'
import Navbar from './Navbar/index'
import Gutter from './Gutter/index'
import Footer from './Footer/index'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Gutter />
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
