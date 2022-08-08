import styled from "styled-components"

export const FilterButton = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 40px;
  background-color: ${(p) => p.select ? "#D18000" : "white"};
  color: ${(p) => p.select ? "white" : "#323232"};
  border: none;
  border-radius: 4px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  :hover {
    cursor: pointer;
  }
  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    height: 32px;
    font-size: 14px;
    line-height: 20px;
  }
`