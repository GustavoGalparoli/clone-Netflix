import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Peliculas from './routes/Peliculas.jsx'
import Series from './routes/Series.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RootProvider from './providers/RootProvider.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import PublicRoute from './components/PublicRoute.jsx'
import Buscar from './routes/Buscar.jsx'
import Mosaico from './routes/Mosaico.jsx'
import Detalle from './routes/Detalle.jsx'
import Login from './routes/Login.jsx'
import AcercaDe from './routes/AcercaDe.jsx'




// pasarlo a un archivo aparte
const router = createBrowserRouter([
  {
      path: '/',
      element: (/*<BasicCard/><App/>*/<PublicRoute><Login/></PublicRoute>)
  },
  {
    path: '/series',
    element: (<PrivateRoute><Series/></PrivateRoute>)
},
{
  path: '/peliculas',
  element: (<PrivateRoute><Peliculas/></PrivateRoute>)
},
{
  path: '/mosaico/genero/:genero/tipo/:tipo',
  element: (<PrivateRoute><Mosaico/></PrivateRoute>)
},
{
  path: '/detalle',
  element: (<PrivateRoute><Detalle/></PrivateRoute>)
},
{
  path: '/buscar/:palabra',
  element: (<PrivateRoute><Buscar/></PrivateRoute>)
            
},
{
  path: '/acercaDe',
  element: (<PrivateRoute><AcercaDe/></PrivateRoute>)
            
},
{
  path: '*',
  element: <h1> la pagina no existe</h1>
            
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <RootProvider>
     <RouterProvider router={router}></RouterProvider>
     </RootProvider>
     
    </>
)