import './NavBar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowCircleRight } from "react-icons/fa";


import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
    <nav className="nav_bar">
    <h2 className='logo'>Petz</h2>
         <ul className='menu_list'>
             <li>
                 <Link className='link_menu' to="/">Home</Link>
             </li>
             <li>
                 <Link className='link_menu' to="/acessorios">Acessórios</Link>
             </li>
             <li>
                 <Link className='link_menu' to="/racas">Raças</Link>
             </li>
             <li>
                 <a className='link_menu' href="#Medi-care">Medi-care</a>
             </li>
         </ul>
         <button>Sing In
            <FaArrowCircleRight className='icon-menu'/>
         </button>
         <div className='mobile-menu'>
         <GiHamburgerMenu className='mobile-icon'/>
         </div>
    </nav>
 </header>
  )
}

export default NavBar
