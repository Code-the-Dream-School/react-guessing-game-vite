import React, { useState } from "react"
import GuessControl from "./GuessControl"
import GuessMessage from "./GuessMessage"
import GameOver from "./GameOver"


function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}

const MAX_ATTEMPTS = 5;

const NumberGuessingGame = () => {
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber())
  const [numberOfGuesses, setNumberOfGuesses] = useState(0)
  const [latestGuess, setLatestGuess] = useState(null)


  // Task: handleGuess function that will be passed in to the GuessControl 
  // component as the onGuess prop. It should take the 
  // guess as an argument and set the latestGuess state with the guess 
  // (converted to a number using the Number function) 
  // and increment the numberOfGuesses state.


  const handleGuess = (guess) => {
    setLatestGuess(Number(guess))
    setNumberOfGuesses(prevNumberOfGuesses => prevNumberOfGuesses + 1)
  }

  // Task: handleReset function within component that resets 
  // all 3 of the state properties the same way the handleReset 
  // function from the class component reset them. Pass this function 
  // to the GameOver component as the onReset prop.

  const handleReset = () => {
    setNumberToGuess(getRandomNumber())
    setNumberOfGuesses(0)
    setLatestGuess(null)
  };

  const isCorrectGuess = latestGuess === numberToGuess
  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  )
}
export default NumberGuessingGame;