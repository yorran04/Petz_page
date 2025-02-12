import './Banner.css'
import Img_banner from '../../img/img-banner.png'


const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-container">
      <div className='banner-img'>
        <img id='img_banner' src={Img_banner} alt="" />
      </div>
      <div>
        <p className='paragrafo-banner'>descubra os fatores alimentares 
          e ambientais aos quais seu cão é intolerante.
           Este teste de alergia fácil e caseiro fornecerá um 
           relatório completo sobre alimentos comuns
        </p>
      </div>
      <div className='container-bola'>
        <div className='bola'>
          <div className='bola-azul'>
          <p>99 <br/>
            <span>
              Stories
            </span>
          </p>
          </div>
          <a className='link-banner' href="#">Learn More</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Banner
