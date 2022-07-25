import styled from "styled-components";

export const ContainerOrder = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-template-rows: 0fr 3fr;
    position: fixed;
    height: 13vh;
    width: 100%;
    bottom: 4.2rem;
    left: 0;
    background-color: #E8222E;
    border-top: 1px solid #999;
    z-index: 2;
    h4{
        padding-top: 1rem;
    }
`
export const ContainerInfo = styled.div`
`

export const ContainerIcon = styled.div`
display:flex;
width: 100%;
padding-left: 2rem;
padding-top: 2rem;
`