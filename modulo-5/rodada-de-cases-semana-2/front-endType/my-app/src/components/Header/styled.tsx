import styled from "styled-components"

export const Header = styled.div`
    
    
    display: flex; 
    flex-direction: row;
    background-color: #00b8e2; 
    height: 20vh; 
    width: 100vw; 


    form{
        width: 100%; 
        height: 100%;
        display: flex; 
        align-items: center;
        justify-content: center;
    }

    input{
        height: 18%; 
        width: 15%;
        margin-right: 4%; 
        border-radius: 5px; 
        border-width: 0px; 
        font-size: 1rem;
        color: black;
        background-color: white;

        :focus{
            border:  0px; 
        }
        ::placeholder{
            color: #7d3737; 
            font-weight: 500;
        }
    }
    button {
        height: 25%; 
        width: 6%; 
        font-size: 1.2rem; 
        background-color:#00b8e2; 
        color: white; 
        border: white solid 3px;
        border-radius: 4px;
        padding-top: 5px;
        padding-bottom: 3px;

        :hover{
            opacity: 0.6; 
        }
    }

`