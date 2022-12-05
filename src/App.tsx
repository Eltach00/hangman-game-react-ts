import HangManDrawing from './HangManDrawing'
import './app.css'
import Letters from './Letters'
import Keyboard from './Keyboard'
import { useState } from 'react'

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>('test')
  const [guessedLetters, setGuessedLetters] = useState<string[]>(['g'])

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  ).length
  return (
    <div className="app">
      <div className="loseWin">Lose Win</div>
      <HangManDrawing numberOfGuesses={incorrectLetters} />
      <Letters theWord={wordToGuess} guessedLetters={guessedLetters} />
      <Keyboard />
    </div>
  )
}

export default App
