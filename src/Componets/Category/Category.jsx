import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

import './Category.css';

import Pata from '../../img/patadog.png'
import Dente from '../../img/dente.png'
import DogCatedoria from '../../img/dog-categoria.png'
import CatCategoria from '../../img/cat-categoria.png'
import RabbitCategoria from '../../img/rabbit-categoria.png'

const Category = () => {
  return (
    <section className="category-container">
      <div className="category-content">
        <div className="category-whatdo">
          <div className="category-text">
            <h2>O que você quer fazer</h2>
            <p>
              Há uma grande variedade de acessórios para animais de estimação
              com os quais você pode se divertir. A simples adição de suéteres e
              casacos de inverno para animais de estimação pode unificar
              perfeitamente todos na imagem.
            </p>
            <div className="category-icons">
              <FaArrowCircleLeft className="icone-category" />
              <FaArrowCircleRight className="icone-category"/>
            </div>
          </div>
          <div className="box-category">
            <div className="box">
             <div className="box-pata">
              <img id="pata-dog" src={Pata} alt="pata de cachorro" />
              </div>
              <p>Veterinária</p>
              <span style={{textAlign: 'center' , color: "#8a8989"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="box">
                <div className="box-dente">
              <img id="dente-dog" style={{width:"80%"}} src={Dente} alt="dente" />
              </div>
              <p>Dentes Limpos</p>
              <span style={{textAlign: 'center', color: "#8a8989"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
        </div>
        <div className="shop-category">
          <h2>Comprar por Categoria</h2>
          <p>
            Há uma grande variedade de roupas para animais de estimação com as
            quais você pode se divertir. A adição simples do inverno para
            animais de estimação
          </p>
          <div className="shop-box-category">
            <div className="shop_box dog-categoria">
                <img style={{width: '150px'}} src={DogCatedoria} alt="" />
                <div className="box-detail">
                <h3>Dog</h3>
                <span>Lorem ipsum, dolor sit amet. </span>
                <a href="#">See All</a>
                </div>
            </div>
            <div className="shop_box cat-categoria">
                <img style={{width: '150px'}} src={CatCategoria} alt="" />
                <div className="box-detail">
                <h3>Cat</h3>
                <span>Lorem ipsum, dolor sit amet. </span>
                <a href="#">See All</a>
                </div>
            </div>
            <div className="shop_box rabbit-categoria">
                <img style={{width: '150px'}} src={RabbitCategoria} alt="" />
                <div className="box-detail">
                <h3>Rabbit</h3>
                <span>Lorem ipsum, dolor sit amet. </span>
                <a href="#">See All</a>
                </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
