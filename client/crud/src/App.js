
import React,{useState} from "react"
import './App.css';

function App() {
  const[values,setValues] = useState();
  console.log(values);
  const handleChangeValues = (value) => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
    
  };

  const handleClickButton = ()=> {
    console.log(values);
  };


  return (
    <div className="app--container">
      <h1 className="register--title">PetShop</h1>
      <div className="register--container">
      <h1 className="register--title">Dados do Pet</h1>
      <input 
      type="text" 
      name="name" 
      placeholder='Nome' 
      className='register--input' 
      onChange={handleChangeValues}/>


      <input 
      type="text" 
      name="idade" 
      placeholder='Idade' 
      className='register--input'
      onChange={handleChangeValues}/>


      <input 
      type="text" 
      name="tipo" 
      placeholder='Tipo (Gato ou Cachorro)' 
      className='register--input'
      onChange={handleChangeValues}/>


      <input 
      type="text" 
      name="raca" 
      placeholder='Raça' 
      className='register--input'
      onChange={handleChangeValues}/>

      <button className="register--button" onClick={()=> handleClickButton()}>Salvar</button>
    </div>
    </div>
  );
}

export default App;
