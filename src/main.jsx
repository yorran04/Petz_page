import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './GlobalStyles.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routers/Home/Home.jsx';
import RacasDog from './routers/Racas/RacasDog.jsx';
import App from './App.jsx';
import Servicos from './routers/Servicos/Servicos.jsx';

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
        path : "/servicos",
        element: <Servicos/>
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
