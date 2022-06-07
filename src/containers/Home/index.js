import React, {useState, useRef} from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


import burguer1 from '../../Assets/burger1.png'

import {
  Container, 
  Image, 
  H1, 
  InputLabel, 
  Button, 
  Input,
} from './style'

const App = ()=> {
const [orders, setOrders] = useState([])
const request = useRef()
const name = useRef()
const Navigate = useNavigate()



async function addNewRequest(){
 const {data: newRequest} = await axios.post("http://localhost:3002/users/", 
{
order:request.current.value,	
clientName:name.current.value
});
setOrders([...orders,newRequest])
 Navigate("/pedidos")
}


  return (
    <Container>
    <Image src={burguer1} alt='People' /> 

      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={request} placeholder='1 Coca-Cola, 1-X Salada' />

      <InputLabel>Nome</InputLabel>
      <Input ref={name}  placeholder='Steve Jobs' />

      <Button onClick={addNewRequest} >
        Cadastrar  
      </Button>

  </Container>
  );
}

export default App;
