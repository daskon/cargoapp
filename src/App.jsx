import { useState } from 'react'
import './App.css'
import { Nav } from './components/Nav/Nav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout';
import Homepage from './Pages/Homepage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Homepage/>
        }
      ]
    }
  ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
