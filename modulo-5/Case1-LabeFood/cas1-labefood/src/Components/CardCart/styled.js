import styled from 'styled-components';

export const Container = styled.div`
  margin: 16px;
  border: 1px solid #b8b8b8;
  width:328px;
  border-radius: 8px;
  height: 121px;
  color: #5cb646;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  margin-top: 10px;
  margin-left: 15px;
`;

export const ButtonContainer = styled.div``;

export const StyledImg = styled.img`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 30%;
  height: 120px;
  object-fit: cover;
`;

export const StyledName = styled.p`
  color: #5cb646;
  letter-spacing: -0.39px;
`;

export const StyledDescription = styled.p`
  width: 200px;
  height: 30px;
  margin: 8px 16px 4px;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

export const StyledPrice = styled.p`
  width: 118px;
  height: 19px;
  margin: 4px 8px 15px 16px;
  font-size: 16px;
  font-weight: bolder;
  color: black;
  letter-spacing: -0.39px;
`;

export const StyledTitle = styled.p`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
`;

export const Path = styled.div`
  width: 337px;
  height: 1px;
  margin-left: 10px;
  margin-right: 15px;
  border: 1px solid black;
  margin-bottom: 10px;
`;

export const ButtonRed = styled.button`
  border: 1px solid black; 
  border-color: red;
  color: red;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 12px;
  padding: 5px 20px;
  margin: -62px -3px 0 233px;
  position: absolute;
`