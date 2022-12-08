import HangManDrawing from './Drawing'
import Letters from './Letters'
import Keyboard from './Keyboard'
import { useEffect, useState } from 'react'
import words from './data/words.json'
import './app.css'

function getWord(): string {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord) //The word to guess
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]) //guessed letters state

  function addKeyToGuessed(letter: string) {
    if (guessedLetters.includes(letter) || isWin || isLose) {
      return
    }
    setGuessedLetters((currentLetters) => [...currentLetters, letter])
  }

  // Typing from a keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!e.key.match(/^[a-z]$/)) {
        return
      }
      e.preventDefault()
      addKeyToGuessed(e.key)
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [wordToGuess, guessedLetters])
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )

  const isLose = incorrectLetters.length >= 6
  const isWin = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter))

  function handleNewGame() {
    setWordToGuess(getWord)
    setGuessedLetters([])
  }

  return (
    <div className="app">
      <div className="loseWin">
        {isLose && 'Nice try!'}
        {isWin && 'Winner!'}
      </div>
      <HangManDrawing numberOfGuesses={incorrectLetters.length} />
      <Letters
        reveal={isLose}
        theWord={wordToGuess}
        guessedLetters={guessedLetters}
      />
      <Keyboard
        onClick={addKeyToGuessed}
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inActiveLetters={incorrectLetters}
        endGame={isLose || isWin}
        newGame={handleNewGame}
      />
    </div>
  )
}

export default App
