import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './Router'

function Home() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Home