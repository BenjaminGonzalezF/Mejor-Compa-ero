import React from 'react'
import ReactDOM from 'react-dom/client'
import VotacionAlumno from './VotacionAlumno.jsx'
import Login from './components/Login.jsx' 
import PestañaInicial from './components/pestañaInicial.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PestañaModulo from './components/PestañaModulo.jsx'

const router = createBrowserRouter([
{
  path: '/', 
  element: <Login/>,
},
{
  path: '/inicio', 
  element: <VotacionAlumno/>,
},
{
  path: '/pestañaInicial', 
  element: <PestañaInicial/>,
},
{
  path: '/pestañaModulo', 
  element: <PestañaModulo/>,
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
