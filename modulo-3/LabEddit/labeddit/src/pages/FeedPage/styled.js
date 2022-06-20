import styled from "styled-components";



export const Postar = styled.textarea`
display: flex;
flex-direction: row;
align-items: flex-start;
margin-top: 9px;
width: 364px;
height: 131px;
font-family: 'IBM Plex Sans';
font-style: normal;
background-color: #EDEDED;
border-radius: 8px;
border: #e0e0e0;

`
export const PostarTitulo = styled.textarea`
display: flex;
flex-direction: row;
align-items: flex-start;
margin-top: 9px;
width: 364px;
height: 20px;
font-family: 'IBM Plex Sans';
font-style: normal;
background-color: #EDEDED;
border-radius: 8px;
border: #e0e0e0;

`




export const Linha = styled.hr`
height: 3px;
border-radius: 35%;
background:linear-gradient(90deg, #FF6489 0%, #F9B24E 60%);

`

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