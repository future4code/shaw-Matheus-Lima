import styled from "styled-components"

export const MovieCardContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-bottom: 48px;
  :hover {
    cursor: pointer;
  }
  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    width: 150px;
  }
`

export const Poster = styled.img `
  border-radius: 4px;
  min-height: 300px;
  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    min-height: 250px;
  }
`

export const BottomContainer = styled.div `
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`

export const MovieReleaseDate = styled.p `
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #646464;
`