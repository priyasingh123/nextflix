import React from 'react'
import Header from './Header'

import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './LogIn'
import LogIn from './LogIn'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LogIn/>
        }, 
        {
            path: "/browse",
            element: <Browse/>
        }
    ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
