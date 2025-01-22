import React, { useState } from "react";
import GuessControl from "./GuessControl";

const NumberGuessingGame = () => {
  const [numberToGuess, setNumberToGuess] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  // Handles the guess from the child component
  const handleGuess = (guess) => {
    setLatestGuess(guess); // Sets the latest guess
    setNumberOfGuesses((prevGuesses) => prevGuesses + 1); // Increments the number of guesses
  };

  // Resets the game
  const handleReset = () => {
    setNumberToGuess(Math.floor(Math.random() * 100) + 1);
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>Number of guesses: {numberOfGuesses}</p>
      {latestGuess !== null && (
        <p>
          Your guess {latestGuess} is{" "}
          {latestGuess === numberToGuess
            ? "Correct!"
            : latestGuess < numberToGuess
            ? "Too low!"
            : "Too high!"}
        </p>
      )}
      <GuessControl onGuess={handleGuess} />
      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
};

export default NumberGuessingGame;
