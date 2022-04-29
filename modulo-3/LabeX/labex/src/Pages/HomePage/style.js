import styled from "styled-components";

export const Header = styled.div`
  border: solid 2px black;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    width: 7.3rem;
    height: 2.2rem;
    border-radius: 1rem;
    border: solid 1px black;
    color: #01dfd7;
    background-color: #e6e6e6;
    margin-right: 1rem;
    font-size: 13px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      width: 7.4rem;
      height: 2.3rem;
      background-color: #00ffff;
      color: #fff;
    }
  }
`;

export const Logo = styled.img`
  width: 3rem;
  cursor: pointer;
`;

export const Title = styled.p`
  font-family: Tahoma;
  font-weight: 500;
  font-size: large;
  padding-right: 47rem;
  cursor: default;
`;

export const I = styled.i`
  color: #01dfd7;
  font-weight: bolder;
`;

export const Button = styled.button`
  margin: 2rem;
  width: 8rem;
  height: 2.8rem;
  border-radius: 1rem;
  border: solid 1px black;
  color: #01dfd7;
  background-color: #fff;
  margin-left: 8rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    width: 8.5rem;
    height: 3rem;
    background-color: #00ffff;
    color: #fff;
  }
`;

export const TextHome = styled.div`
  /* position: relative;
  bottom: 18rem; */
  width: 100%;
  height: 25rem;
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 1.2rem;
  padding-top: 8rem;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: Tahoma;
  p{
    margin-right: 8rem;
  }
`;
export const ImgHome = styled.img`
  width: 100%;
  height: 28rem;
`;

export const PHome = styled.p`
  color: #fff;
  position: relative;
  bottom: 18rem;
  font-size: 1.6rem;
  margin-left: 2rem;
  font-family: Tahoma;
  text-shadow: black 0.1em 0.1em 0.2em
`
export const DivHome = styled.div`
height: 20rem;
`

