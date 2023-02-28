import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 576px) {
    padding: 5px;
    padding-top: 10px;
    padding-bottom: 30px;
  }
`
export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #ffffff;
  border-radius: 20px;
  padding: 10px;
  padding-left: 50px;
  padding-right: 50px;
  width: 80%;
  @media screen and (max-width: 576px) {
    width: 95%;
  }
`

export const ScoreCard = styled.div`
  text-align: center;
  background-color: #ffffff;
  height: 15vh;
  width: 130px;
  border-radius: 20px;
`

export const ScoreHeadingContainer = styled.div`
  line-height: 1.6;
`

export const ScoreContainerHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 25px;
`

export const ScoreCardHeading = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 20px;
  font-weight: 600;
`
export const Score = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const GameListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 80px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  width: 35%;
  height: 80%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  font-family: 'Bree Serif';
  border: none;
  padding: 10px;
  color: #223a5f;
  border-radius: 5px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 50px;
  cursor: pointer;
`
export const RuleImg = styled.img`
  width: 90%;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  cursor: pointer;
  background-color: transparent;
  color: #223a5f;
  border: none;
  margin-left: 20px;
  @media screen and (max-width: 576px) {
    margin-left: 80px;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  @media screen and (max-width: 576px) {
    width: 100%;
    height: 100%;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  background-color: transparent;
  margin-top: 50px;
  height: 80%;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`

export const ResultSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 100%;
  background-color: transparent;
`
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: transparent;
`

export const ResultHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 25px;
`
export const Img = styled.img`
  width: 150px;
`
export const ResultStatus = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
`
export const PlayButton = styled.button`
  background-color: #ffffff;
  font-family: 'Bree Serif';
  border: none;
  padding: 10px;
  color: #223a5f;
  border-radius: 10px;
  width: 150px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`
