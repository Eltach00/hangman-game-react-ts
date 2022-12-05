import './letters.css'

type LettersProps = {
  theWord: string
  guessedLetters: string[]
}

export default function Letters({ theWord, guessedLetters }: LettersProps) {
  return (
    <div className="letterContainer">
      {theWord.split('').map((letter) => {
        return (
          <span className="underline">
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? 'visible'
                  : 'hidden',
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
