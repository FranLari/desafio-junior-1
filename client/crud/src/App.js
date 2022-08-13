
import React,{useState,useEffect} from "react"
import './App.css';
import Axios from "axios";
import Card from "./components/cards/card";


function App() {
  const[values,setValues] = useState();
  const [listPets, setPets] = useState();

  console.log(values);
  console.log(listPets);
  const handleChangeValues = (value) => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
    
  };

  const handleClickButton = ()=> {
    Axios.post("http://localhost:3001/register",{
      dono: values.dano,
      endereco: values.endereco,
      telefone: values.telefone,
      nome: values.nome,
      idade: values.idade,
      tipo: values.tipo,
      raca: values.raca,

    }).then(()=>{
      setListPets([
        ...listPets,
        {
          dono: values.dano,
          endereco: values.endereco,
          telefone: values.telefone,
          nome: values.nome,
          idade: values.idade,
          tipo: values.tipo,
          raca: values.raca,

        },
      ]);
     
    });
  };
  useEffect(()=>{
    Axios.get("http://localhost:3001/getCards").then((response) => {
      console.log(response.data);
    });
  },[])


  return (
  
    <div className="app--container">
      <h1 className="register--title">PetShop</h1>
      <div className="register--container">
      <h1 className="register--subtitulo">Dados Pessoais</h1>

      <label className='register--label'>Dono do Pet:</label>
      <input 
      type="text" 
      name="dono" 
      placeholder='Nome' 
      className='register--input' 
      onChange={handleChangeValues}/>

      <label className='register--label'>Endereço:</label>
      <input 
      type="text" 
      name="endereco" 
      placeholder='Endereço' 
      className='register--input' 
      onChange={handleChangeValues}/>

      <label className='register--label'>Telefone:</label>
      <input 
      type="text" 
      name="telefone" 
      placeholder='Telefone' 
      className='register--input' 
      onChange={handleChangeValues}/>


      <h1 className="register--subtitulo">Dados do Pet</h1>
      <label className='register--label'>Nome do Pet:</label>
      <input 
      type="text" 
      name="nome" 
      placeholder='Nome' 
      className='register--input' 
      onChange={handleChangeValues}/>

      <label className='register--label'>Idade do Pet:</label>
      <input 
      type="text" 
      name="idade" 
      placeholder='Idade' 
      className='register--input'
      onChange={handleChangeValues}/>

      <label className='register--label'>Tipo do Pet:</label>
      <input 
      type="text" 
      name="tipo" 
      placeholder='Tipo (Gato ou Cachorro)' 
      className='register--input'
      onChange={handleChangeValues}/>

      <label className='register--label'>Raça:</label>
      <input 
      type="text" 
      name="raca" 
      placeholder='Raça' 
      className='register--input'
      onChange={handleChangeValues}/>

      <button 
      className="register--button" 
      onClick={()=> handleClickButton()}>
        Salvar
      </button>
    </div>
    {typeof listPets !=="undefined" && listPets.map((value)=>{
      return <Card 
      key={value.id} 
      listCard = {listPets}
      setListCard= {setListPets}
      id = {value.idpets}
      dono= {values.dano}
      endereco= {values.endereco}
      telefone= {values.telefone}
      nome= {values.nome}
      idade= {values.idade}
      tipo= {values.tipo}
      raca= {values.raca}

      ></Card>;
    })}

    
    </div>
    
  );
}

export default App;

