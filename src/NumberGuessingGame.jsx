import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Maximum number of attempts allowed
const MAX_ATTEMPTS = 5;

function NumberGuessingGame() {
  // State variables for the game
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  // Handler for when a guess is submitted
  const handleGuess = (guess) => {
    setLatestGuess(Number(guess));
    setNumberOfGuesses(prevGuesses => prevGuesses + 1);
  };

  // Handler for resetting the game
  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

  // Check if the guess is correct
  const isCorrectGuess = latestGuess === numberToGuess;

  // Check if the game is over (correct guess or max attempts reached)
  const isGameOver =
    isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      {/* Component for inputting guesses */}
      <GuessControl onGuess={handleGuess} />
      {/* Show GameOver component if the game is over */}
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {/* Show GuessMessage component if the game is still ongoing */}
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
