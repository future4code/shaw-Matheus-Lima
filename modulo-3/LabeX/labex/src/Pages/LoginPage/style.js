import styled from "styled-components";

export const Header = styled.div`
  border: solid 2px black;

  height: 3rem;
  display: flex;

  align-items: center;
  button {
    width: 7.3rem;
    height: 2.2rem;

    border: solid 1px black;
    color: #01dfd7;
    background-color: #e6e6e6;

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

  cursor: default;
  :hover {
    background-color: #01dfd7;
    color: #fff;
    border: solid 3px #01dfd7;
    cursor: pointer;
  }
`;

export const I = styled.i`
  color: #01dfd7;
  font-weight: bolder;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;

  color: #6195e4;
  text-shadow: black 0.1em 0.1em 0.2em;

  button {
    margin-top: 1rem;
    width: 5rem;
    height: 2rem;
    border-radius: 1rem;
    border: solid 1px #fff;
    color: #01dfd7;
    background-color: #e6e6e6;
    font-size: 15px;
    cursor: pointer;
    transition: 0.1s;
    :hover {
      background-color: #01dfd7;
      color: #fff;
      border: solid 1px #01dfd7;
    }
  }
`;
export const Inputs = styled.input`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 2rem;
  background: none;
  border: 1px solid #fff;
  border-radius: 1rem;
  margin-top: 1rem;
  color: black;
`;
export const Img = styled.img``;
export const DivInput = styled.div`
  position: relative;
`;
