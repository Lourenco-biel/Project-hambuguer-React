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
 
`
export const Image = styled.img`
    width: 200px;
    height: 200px; 
    margin-top: 30px;

    @media screen and (max-width: 700px){
        width: 300px;
        height: 300px; 
   
    }

`


export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 55px;
    text-align: center;
    margin-bottom: 40px;
    color: #FFFFFF;

    @media screen and (max-width: 700px){
        width: 253px;
    }

    `

    
export const InputLabel = styled.p`
width: 220px;

font-style: normal;
font-weight: 700;
font-size: 18px;
line-height:26px;

color: #EEEEEE;

`
export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
outline: none;

width: 233px;
height: 40px;
padding-left: 13px;
padding-right: 9px;

font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;
margin-bottom: 34px;

@media screen and (max-width: 700px){
    width: 285px;
    height: 58px;
}
`


export const Button = styled.button`
    width: 247px;
    height: 48px;
    margin-top: 18px;

    background: #D93856;
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

    @media screen and (max-width: 700px){
        width: 285px;
        height: 58px;
        margin-top: 40px;
    }

`


