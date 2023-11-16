import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Phishing from './components/Cards/phishing/index.jsx'
import Baiting from './components/Cards/baiting/index.jsx'
import PreText from './components/Cards/pretexting/index.jsx'
import Home from './components/Home'

// Use sandwiching concept for using route inside route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/Phishing' element={<Phishing />} />
      <Route path='/Baiting' element={<Baiting />} />
      <Route path='/Pretexting' element={<PreText />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
