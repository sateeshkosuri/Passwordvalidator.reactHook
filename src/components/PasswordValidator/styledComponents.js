import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #383a4e;
  background-size: cover;
  height: 320px;
  width: 370px;
  box-shadow: 2px 2px 2px 2px #434451;
  border: none;
  border-radius: 10px;
  @media screen and (max-width: 576px) {
    height: 220px;
    width: 260px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`
export const Paragraph = styled.p`
  color: #f8fafc;
  font-size: 17px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`
export const UserInput = styled.input`
  background-color: #edeeff;
  background-size: cover;
  height: 30px;
  width: 200px;
  font-size: 15px;
  font-family: 'Roboto';
  border: none;

  @media screen and (max-width: 576px) {
    height: 20px;
    width: 120px;
  }
`

export const ErrorMassage = styled.p`
  color: #ef4444;
  font-size: 13px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`
