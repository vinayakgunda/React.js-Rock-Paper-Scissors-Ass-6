import {GameList, GameButton, GameImg} from './styledComponents'

const ChoiceItem = props => {
  const {gameDetails, onClickChoice} = props
  const {imageUrl, id} = gameDetails

  const onClickGame = () => {
    onClickChoice(id)
  }

  let testId = ''

  switch (id) {
    case 'ROCK':
      testId = 'rockButton'
      break
    case 'PAPER':
      testId = 'paperButton'
      break
    default:
      testId = 'scissorsButton'
  }

  return (
    <GameList>
      <GameButton type="button" data-testid={testId} onClick={onClickGame}>
        <GameImg src={imageUrl} alt={id} />
      </GameButton>
    </GameList>
  )
}

export default ChoiceItem
