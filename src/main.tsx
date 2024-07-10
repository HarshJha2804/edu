import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import Home from './component/Home/Home'
import Layout from './Layout'
import About from './component/About/about'
import Services from './component/Services/services'
import Signup from './component/Signup/Signup'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
