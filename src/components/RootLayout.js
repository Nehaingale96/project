import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Product from './Product'

function RootLayout() {
  return (
    <div>
        <Navbar/>
        {/* <Product/> */}
        <Outlet/>
    </div>
  )
}

export default RootLayout