import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

margin: 2rem;

select{
width: 25.5rem;
margin-bottom: 1rem;
}

input{
width: 25rem;
height: 2rem;
margin-bottom: 2rem;
}
`

export const Button = styled.div`
width: 15rem;
display: flex;
flex-direction: row;
justify-content: space-between;
button{
    width: 5rem;
    height: 2rem;
    border: solid 0.5px black;
}
`