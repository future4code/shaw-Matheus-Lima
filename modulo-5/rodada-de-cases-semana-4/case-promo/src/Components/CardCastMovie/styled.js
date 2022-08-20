import styled from "styled-components"

export const CastCardContainer = styled.div `
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 16px;
  width: 200px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px; 
  :hover {
    cursor: pointer;
  }
`

export const Path = styled.img `
  border-radius: 4px;
`