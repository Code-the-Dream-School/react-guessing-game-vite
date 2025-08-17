import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

function NumberGuessingGame() {
  const [numberToGuess, setNumberToGuess] = useState(() => {
    Math.floor(Math.random() * 100) + 1;
  });
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);
  const MAX_ATTEMPTS = 5;

  function handleGuess(guess) {
    setLatestGuess(Number(guess));
    setNumberOfGuesses(numberOfGuesses + 1);
  }
  function handleReset() {
    setNumberToGuess(getRandomNumber());
    setLatestGuess(Number(guess));
    setNumberOfGuesses(numberOfGuesses + 1);
  }
  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && <GameOver hasWon={isCorrectGuess} onReset={handleReset} />}
      {!isGameOver && (
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
