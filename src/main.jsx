import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './GlobalStyles.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routers/Home/Home.jsx';
import Acessorios from './routers/Acessorios/Acessorios.jsx';
import RacasDog from './routers/Racas/RacasDog.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/acessorios",
        element: <Acessorios/>
      },
      {
        path: "/racas",
        element: <RacasDog/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
