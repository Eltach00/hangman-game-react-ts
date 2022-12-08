import './keyboard.css'

const KEYS: string[] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
].map((letter) => letter.toLowerCase())

type KeyboardProps = {
  onClick: (letter: string) => void
  activeLetters: string[]
  inActiveLetters: string[]
  endGame: boolean
  newGame: () => void
}

export default function Keyboard({
  onClick,
  activeLetters,
  inActiveLetters,
  endGame,
  newGame,
}: KeyboardProps) {
  return (
    <div className="keyboard">
      {KEYS.map((letter, ind) => {
        const active = activeLetters.includes(letter)
        const inActive = inActiveLetters.includes(letter)
        return (
          <button
            disabled={inActive || active || endGame}
            className={`btn ${active ? 'active' : ''} ${
              inActive ? 'inactive' : ''
            }`}
            key={ind}
            onClick={() => onClick(letter)}
          >
            {letter}
          </button>
        )
      })}
      <button className="btn ng" onClick={() => newGame()}>
        New Game
      </button>
    </div>
  )
}
