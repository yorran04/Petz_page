import Footer from "./Componets/Footer/Footer"
import NavBar from "./Componets/Header/NavBar"
import { Outlet } from "react-router-dom"


function App() {
 

  return (
   <div>
   <NavBar/>
   <Outlet/>
   <Footer/>
   </div>
  )
}

export default App
