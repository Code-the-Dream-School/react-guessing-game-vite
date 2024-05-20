import React, { Component, useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

function NumberGuessingGame(props){

  const [numToGuess, setNumtoGuess] = useState(Math.floor(Math.random() * 100) + 1);
  const [numOfGuesses, setNumOfGuesses] = useState(0);
  const [guess, setGuess] = useState();

  const MAX_ATTEMPTS = 5;

  function getRandomNumber() {
     return (Math.floor(Math.random() * 100) + 1);
  }

  function handleGuess(guess){
    setGuess(guess)
    setNumOfGuesses(numOfGuesses+1)
  }

  function handleReset(){
    setNumtoGuess(getRandomNumber);
    setNumOfGuesses(0);
    setGuess();
  }

  const isCorrectGuess = guess === numToGuess;
  const isGameOver = isCorrectGuess || numOfGuesses === MAX_ATTEMPTS;

  return(
    <>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?</h2>

        <GuessControl onGuess={handleGuess} />
        {isGameOver && (
          <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
        )}
        {!isGameOver && (
          <GuessMessage
            guess={guess}
            numberToGuess={numToGuess}
            numberOfGuesses={numOfGuesses}
          />
        )}
    </>
  )
}
export default NumberGuessingGame;
