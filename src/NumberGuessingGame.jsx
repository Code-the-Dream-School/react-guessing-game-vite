import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; // Random number from 1-100
}

function NumberGuessingGame() {
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  function handleGuess(guess) {
    setLatestGuess(guess);
    setNumberOfGuesses(numberOfGuesses + 1);
  }

  function resetGame() {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  }

  const isGameOver = latestGuess === numberToGuess || numberOfGuesses === 5;

  return (
    <div>
      <h2>Guess a number between 1 and 100!</h2>
      <h3>You have 5 tries. Good luck!</h3>
      <GuessControl onGuess={handleGuess} />
      {isGameOver ? (
        <GameOver hasWon={latestGuess === numberToGuess} onReset={resetGame} />
      ) : (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}

export default NumberGuessingGame;
