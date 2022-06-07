import styled from 'styled-components'

import bg from '../../Assets/bg.png'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url("${bg}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    .container{
        @media screen and (max-width: 700px){
            height: 328px;
   
    }
        height: 150px;
        overflow-y: auto;
    }

   

`
export const Image = styled.img`
    width: 200px;
    height: 250px; 
    margin-top: 30px;
`


export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 40px;
    color: #FFFFFF;

    `

export const ContainerTrash = styled.div`
    width: 270px;

    background: rgba(255, 255, 255, 0.25);
    background-size: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 13px;
    margin-bottom: 10px;

    button {
        background: none;
        border: none;
    cursor: pointer;
    &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.5;
        }
}
   

`

export const ContainerItens = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
`

export const P1 = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 28px;
    color: #fff9;
`

export const P2 = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 28px;
    color: #ffffff;
`


export const Button = styled.button`
    width: 270px;
    height: 52px;
    margin-top: 50px;

    background: rgba(255, 255, 255, 0.14);
    border: none;
    cursor: pointer;
    

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
 
    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

`


