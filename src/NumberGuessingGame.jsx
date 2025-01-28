import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GameOver from "./GameOver";

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

function NumberGuessingGame() {
  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  const handleGuess = (guess) => {
    setLatestGuess(Number(guess));
    setNumberOfGuesses((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setNumberToGuess(generateRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      {latestGuess === numberToGuess ? (
        <GameOver
          numberOfGuesses={numberOfGuesses}
          onReset={handleReset}
        />
      ) : (
        <>
          <p>Number of guesses: {numberOfGuesses}</p>
          <p>Latest guess: {latestGuess}</p>
          <GuessControl onGuess={handleGuess} />
        </>
      )}
    </div>
  );
}

export default NumberGuessingGame;
