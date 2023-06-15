import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './Router'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
      {/* <Navbar/> */}
        <RouterProvider router={router} />

    </div>
  )
}

export default Home