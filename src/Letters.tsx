import './letters.css'

type LettersProps = {
  theWord: string
  guessedLetters: string[]
  reveal?: boolean
}

export default function Letters({
  theWord,
  guessedLetters,
  reveal = false,
}: LettersProps) {
  return (
    <div className="letterContainer">
      {theWord.split('').map((letter, index) => {
        return (
          <span key={index} className="underline">
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? 'visible'
                    : 'hidden',
                color:
                  guessedLetters.includes(letter) && reveal ? 'black' : 'red',
              }}
            >
              {letter}
            </span>
          </span>
        )
      })}
    </div>
  )
}
