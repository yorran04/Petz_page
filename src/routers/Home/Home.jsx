import './Home.css';
import { FaArrowCircleRight } from "react-icons/fa";
import {motion} from 'framer-motion'

import Dog1 from '../../img/dog1.png';
import Dog2 from '../../img/dog2.png';
import Dog3 from '../../img/dog3.png';
import Banner from '../../Componets/Banner/Banner';
import Category from '../../Componets/Category/Category';
import Botoes from '../../Componets/Buttons/Buttons';




const Home = () => {
  return (
    <div>
   <section className='home-container'>
    <div className="home-content">
      <div className="text">
        <div className="texto-principal">
        <h2>Os olhos de um animal têm o poder de se comunicar.</h2>
        </div>
        <div className="text-botton">
         <p>Há uma grande variedade de roupas para animais de estimação com as quais você pode se divertir.</p>
          <Botoes>Mostre Mais
          <FaArrowCircleRight/>
          </Botoes>
        </div>
      </div>
     <div className="imagens-petz">
      <motion.img
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay: 0.3}}
      src={Dog1}
      id='dog1'
      >
      </motion.img>
      <motion.img
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7, delay: 0.5}}
      src={Dog2}
       id='dog2'
      >
      </motion.img>
      <motion.img
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.9, delay: 0.7}}
      src={Dog3}
       id='dog3'
      >
      </motion.img>
     </div>
    </div> 
    
   </section>
   <Banner/>
   <Category/>
   </div>
  
  )
}

export default Home
