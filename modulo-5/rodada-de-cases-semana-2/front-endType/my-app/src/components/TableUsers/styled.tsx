import styled from "styled-components";

export const TableUserFirstName = styled.div`
    
    
    width: 65%; 
    height: 4vh; 
    align-items: center;
    justify-content: center;
    text-indent: 15px;
    font-size: 1.1rem; 
    color: #707070; 
    font-weight: 600;
`

export const TableDiv = styled.div`
  width: 50%;
height: auto;
margin: 0.5rem;
table{
    border-collapse: collapse;
    border: 1px solid black;
};
tr:nth-child(even){
    background-color: rgb(228,228,228);
};
     
`
export const TableFirstNameDiv = styled.div`
    width: 30%; 
    height: 100%; 
    display: flex; 
    border: 1px #bdbbbb solid; 
    border-right: 0px;
    
    align-items: center;
    
`
export const TableLastNameDiv = styled.div`
    width: 30%; 
    height: 100%; 
    display: flex; 
    border: 1px #bdbbbb solid; 
    align-items: center;
   
`
export const TableParticipationDiv=styled.div`
    width: 30%; 
    height: 100%; 
    display: flex; 
    border: 1px #bdbbbb solid; 
    border-left: 0px; 
    align-items: center;
    justify-content: center;
    
` 