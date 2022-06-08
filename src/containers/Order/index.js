import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



import burguer from '../../Assets/burger.png'
import trash from '../../Assets/trash.svg'
import {
  Container,
  Image,
  H1,
  Button,
  ContainerTrash,
  ContainerItens,
  P1,
  P2,
} from './style'



const Order = () => {
  const [orders, setOrders] = useState([])
  const Navigate = useNavigate()


  useEffect(() => {
    async function fetchRequest() {
      const { data: newRequest } = await axios.get("http://localhost:3002/users/")
      setOrders(newRequest)
      console.log(newRequest)
    }

    fetchRequest()
  }, [])

  async function deleteRequest(userId){
    await axios.delete(`http://localhost:3002/users/${userId}`)
    const newRequest = orders.filter(user => user.id !== userId)
    setOrders(newRequest)
  }

  function goBackPage(){
    Navigate("/")
  }

  return (
    <Container>
      <Image src={burguer} alt='People' />

      <H1>Pedidos!</H1>
        <div className="container">

       
        {orders.map((user) => (
           <ContainerTrash>
              <ContainerItens key={user.id}>
                  <P1>{user.order}</P1>
                  <P2>{user.clientName}</P2>
              </ContainerItens>
          <button onClick={()=> deleteRequest(user.id)}>
              <img src={trash} alt="lata de lixo" />
          </button>
        </ContainerTrash>
        ))}
        </div>     
    
      <Button  onClick={goBackPage}>
        Voltar
      </Button>


    </Container>
  );
}

export default Order;
