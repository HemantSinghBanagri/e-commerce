import styled from "styled-components";



export const CartDropDowncontainer =styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: rgb(255, 255, 255);
top: 90px;
right: 40px;
z-index: 5;
`


export const EmptyMessage=styled.div`
font-size: 18px;
      margin: 50px auto;
`




export const CartItem =styled.div`


height: 240px;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
` 



export const Containerbutton =styled.button`
 margin-top: auto;
      min-width: 165px;
      width: auto;
      height: 50px;
      letter-spacing: 0.5px;
      line-height: 50px;
      padding: 0 35px 0 35px;
      font-size: 15px;
      background-color: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      
      text-transform: uppercase;
      font-family: 'Open Sans Condensed';
      font-weight: bolder;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
    
      &:hover {
        background-color: white;
        color: rgb(0, 0, 0);
        border: 1px solid black;
      }
`
