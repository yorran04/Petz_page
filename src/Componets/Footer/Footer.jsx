
import './Footer.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className='collumn1'>
                <h2>Petz</h2>
                <p>By: Yorran Alves</p>
                <div className="footer_icones">
                <FaInstagram/>
                <FaFacebook/>
                <FaGithub/>
                </div>
            </div>
            <div className='collumn2'>
                <p>Recursos</p>
                <a href="#">Nossa Agenda</a>
                <a href="#">Membros</a>
                <a href="#">Video</a>
            </div>
            <div className='collumn3'>
                <form>
                    <p>Contato</p>
                    <input 
                    type="text"
                    placeholder="Email" />
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer
