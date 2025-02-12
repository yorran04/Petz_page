import { useState} from "react"
import axios from "axios";

import './RacasDog.css'

const RacasDog = () => {

const [dogs, setDogs] = useState("");
const [image, setImage] = useState(null);
const [error, setError] = useState(null);

const fethApi = async () => {
  if(!dogs) return;
  setImage(null);
  setError(null);
  try{
    const response = await axios.get(`https://dog.ceo/api/breed/${dogs}/images/random`)
    setImage(response.data.message)
  }catch(err) {
    setError("Raça não encontrada. Tente outra!" , err)
  }
};




  return (
    <div className="section-racas">
      <div className="racas_container">
      <h2>Busca por Raça</h2>
      <div className="racas-content">
        <input 
      
        type="text"
        placeholder="Digite um raça. (ex: Husky)"
        value={dogs}
        onChange={(e) => setDogs(e.target.value.toLowerCase())} 
        id="input-racas"/>
        <button onClick={fethApi}>Buscar</button>
      </div>
      <div className="card_racas">
        {error && <p>{error}</p>}
        {image && 
        <div>
          <img src={image} alt="Imagem de cachorro" />
        </div>}
      </div>
      </div>
    </div>
  )
}

export default RacasDog
