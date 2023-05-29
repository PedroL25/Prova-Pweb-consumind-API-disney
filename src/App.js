import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  //CRIAR UM ESTADO
  const [personagens, setPersonagens] = useState([]);
  //FUNÇÃO DE INICIALIZAÇÃO
  useEffect(
    ()=>{
      const listaDePersonagens = async () => {
      try{
        //duncao asicrona
        //resposta esta aguardando o axios retornar um json de api 
        const resposta = await axios.get("https://api.disneyapi.dev/character");
        setPersonagens(resposta.data.data);
      }catch(error){
        console.log(error);
      }
    }  
    listaDePersonagens();
    }, []
  );
  return(
    <>
    <h1>API DA DISNEY</h1>
    {personagens.map((objeto)=>(
          <li key={objeto.name}>
          <h3>{objeto.name}</h3>
          <img  src= {objeto.imageUrl}
          alt={objeto.name}
          style={{width: "30vh", height: "50vh"}}
          />
          </li>
          
    )
      )
    }
    </>
  )
   
  
}

export default App;
