import styled from "styled-components";


export const PostCard = styled.div`

box-sizing: border-box;

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;



border: 1px solid #E0E0E0;
border-radius: 12px;
margin: 5px;
p{
    font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 8px;
    
}

`

export const PostBotao = styled.button`
display: flex;
/* flex-direction: row; */
justify-content: center;
padding: 8px 120px;
margin: 14px;

width: 21rem;
background:linear-gradient(90deg, #FF6489 0%, #F9B24E 60%);
border-radius: 1rem;

:hover{
    background-color: #3e8e41;
  color: white;

}

`


export const ContainerBotao = styled.div`
display: flex;
flex-direction: row;
margin-left: 10px;
width: 200px;
justify-content: space-between;

`