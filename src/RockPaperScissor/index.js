import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import ChoiceItem from '../ChoiceItem'

import './index.css'

import {
  BgContainer,
  ScoreContainer,
  ScoreCard,
  ScoreHeadingContainer,
  ScoreContainerHeading,
  ScoreCardHeading,
  Score,
  GameListContainer,
  RulesButton,
  RuleImg,
  CloseButton,
  ModalContainer,
  ResultContainer,
  ResultSubContainer,
  SelectContainer,
  ResultHeading,
  Img,
  ResultStatus,
  PlayButton,
} from './styledComponents'

class RockPaperScissor extends Component {
  state = {
    score: 0,
    showChoiceItem: true,
    showResult: false,
    selectedChoice: '',
    computerChoice: '',
    resultState: '',
  }

  increaseScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  decreaseScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  onClickChoice = id => {
    const {choicesList} = this.props

    const randomNumber = Math.floor(Math.random() * choicesList.length)
    const computerChose = choicesList[randomNumber].id

    let resultStatus = ''

    if (id === 'ROCK' && computerChose === 'ROCK') {
      resultStatus = 'IT IS DRAW'
    } else if (id === 'ROCK' && computerChose === 'PAPER') {
      resultStatus = 'YOU LOSE'
      this.decreaseScore()
    } else if (id === 'ROCK' && computerChose === 'SCISSORS') {
      resultStatus = 'YOU WON'
      this.increaseScore()
    } else if (id === 'PAPER' && computerChose === 'PAPER') {
      resultStatus = 'IT IS DRAW'
    } else if (id === 'PAPER' && computerChose === 'ROCK') {
      resultStatus = 'YOU WON'
      this.increaseScore()
    } else if (id === 'PAPER' && computerChose === 'SCISSORS') {
      resultStatus = 'YOU LOSE'
      this.decreaseScore()
    } else if (id === 'SCISSORS' && computerChose === 'SCISSORS') {
      resultStatus = 'IT IS DRAW'
    } else if (id === 'SCISSORS' && computerChose === 'PAPER') {
      resultStatus = 'YOU WON'
      this.increaseScore()
    } else {
      resultStatus = 'YOU LOSE'
      this.decreaseScore()
    }

    this.setState({
      showResult: true,
      showChoiceItem: false,
      selectedChoice: id,
      computerChoice: computerChose,
      resultState: resultStatus,
    })
  }

  onPlayAgain = () => {
    this.setState({showResult: false, showChoiceItem: true})
  }

  renderResultContainer = () => {
    const {choicesList} = this.props
    const {showResult, selectedChoice, computerChoice, resultState} = this.state

    const userSelectedChoice = choicesList.filter(
      eachChoice => eachChoice.id === selectedChoice,
    )

    const computerSelectedChoice = choicesList.filter(
      eachChoice => eachChoice.id === computerChoice,
    )

    if (showResult === true) {
      return (
        <ResultContainer>
          <ResultSubContainer>
            <SelectContainer>
              <ResultHeading>YOU</ResultHeading>
              <Img src={userSelectedChoice[0].imageUrl} alt="your choice" />
            </SelectContainer>
            <SelectContainer>
              <ResultHeading>OPPONENT</ResultHeading>
              <Img
                src={computerSelectedChoice[0].imageUrl}
                alt="opponent choice"
              />
            </SelectContainer>
          </ResultSubContainer>
          <ResultStatus>{resultState}</ResultStatus>
          <PlayButton onClick={this.onPlayAgain}>PLAY AGAIN</PlayButton>
        </ResultContainer>
      )
    }
    return null
  }

  renderScoreCard = () => {
    const {score} = this.state
    return (
      <ScoreContainer>
        <ScoreHeadingContainer>
          <ScoreContainerHeading>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </ScoreContainerHeading>
        </ScoreHeadingContainer>
        <ScoreCard>
          <ScoreCardHeading>Score</ScoreCardHeading>
          <Score>{score}</Score>
        </ScoreCard>
      </ScoreContainer>
    )
  }

  renderChoiceItem = () => {
    const {choicesList} = this.props
    const {showChoiceItem} = this.state

    if (showChoiceItem === true) {
      return (
        <GameListContainer>
          {choicesList.map(eachGame => (
            <ChoiceItem
              gameDetails={eachGame}
              key={eachGame.id}
              onClickChoice={this.onClickChoice}
            />
          ))}
        </GameListContainer>
      )
    }
    return null
  }

  renderRules = () => (
    <Popup
      modal
      trigger={<RulesButton type="button">RULES</RulesButton>}
      className="popup-content"
      position="top right"
    >
      {close => (
        <ModalContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine size={20} />
          </CloseButton>

          <RuleImg
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </ModalContainer>
      )}
    </Popup>
  )

  render() {
    return (
      <BgContainer>
        {this.renderScoreCard()}
        {this.renderChoiceItem()}
        {this.renderResultContainer()}
        {this.renderRules()}
      </BgContainer>
    )
  }
}

export default RockPaperScissor
