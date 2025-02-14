import './NavBar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import { useState } from 'react';


import { Link } from 'react-router-dom'





const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <header>
    <nav className="nav_bar">
    <h2 className='logo'>Petz</h2>
         <ul className='menu_list'>
             <li>
                 <Link className='link_menu' to="/">Home</Link>
             </li>
             <li>
                 <Link className='link_menu' to="/servicos">Serviços</Link>
             </li>
             <li>
                 <Link className='link_menu' to="/racas">Raças</Link>
             </li>
             <li>
                 <a className='link_menu' href="#Medi-care">Medi-care</a>
             </li>
         </ul>
         <button  id='btn-sing'>Sing In
            <FaArrowCircleRight className='icon-menu'/>
         </button>
         <button id='btn_hamburguer' onClick={toggleMenu} className='mobile-menu'>
            {isOpen ? <IoCloseSharp style={{fontSize: '2rem', color:'#217cf3'}}/> : <GiHamburgerMenu className='mobile-icon'/>}
         </button>
         {isOpen && (
              
               <ul className='menu_list_mobile'>
               <li>
                   <Link className='link_menu' to="/">Home</Link>
               </li>
               <li>
                   <Link className='link_menu' to="/servicos">Serviços</Link>
               </li>
               <li>
                   <Link className='link_menu' to="/racas">Raças</Link>
               </li>
               <li>
                   <a className='link_menu' href="#Medi-care">Medi-care</a>
               </li>
           </ul>
         )}
    </nav>
 </header>
  )
}

export default NavBar
