import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home'
import MyPlants from './views/MyPlants'
import About from './views/About'
import Layout from './Layout'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/my-plants',
        element: <MyPlants />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
