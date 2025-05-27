import { useState } from 'react'
import './App.css'
import { Nav } from './components/Nav/Nav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: "home"
        }
      ]
    }
  ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
