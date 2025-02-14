
import Botoes from '../../Componets/Buttons/Buttons'
import { FaArrowCircleRight } from 'react-icons/fa'

import './Servicos.css'

import ImgTowDog from '../../img/twoDogs.jpg';
import ImgBgNone from '../../img/dog_bg_none.png';
import ImgBgPink from '../../img/dog_bg_pink.png';

const Servicos = () => {
  return (
    <section className="section_container">
      <div className="servicos_container">
        <div className="servicos">
          <div className="img_container">
            <img className='img_one' src={ImgTowDog} alt="" />
            <div className='img_two'><img src={ImgBgNone} alt="" /></div>
          </div>
          <div className="servicos_description_one">
            <h2 className="servicos_title">
              Nós os faremos verdadeiramente felizes
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              expedita reiciendis numquam, corrupti in labore atque quas neque
              fuga perspiciatis, ab veniam, molestiae exercitationem repudiandae
              consequatur culpa. Impedit, consectetur expedita?
            </p>
            <Botoes>Mostre Mais
            <FaArrowCircleRight/>
          </Botoes>
          </div>
        
        </div>
        <div className="servicos">
        <div className="servicos">
          <div className="servicos_description_two">
            <h2 className="servicos_title">             
                Comentários de Clientes
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              expedita reiciendis numquam, corrupti in labore atque quas neque
              fuga perspiciatis, ab veniam, molestiae exercitationem repudiandae
              consequatur culpa. Impedit, consectetur expedita?
            </p>
            
          </div>
          <img id='img_three' src={ImgBgPink} alt="" />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Servicos
