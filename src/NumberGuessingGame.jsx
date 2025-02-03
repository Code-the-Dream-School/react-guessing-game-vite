import React, { Component, useEffect } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";
import { useState } from "react";

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

function NumberGuessingGame() {
  const [numberToGuess, setNumberToGuess] = React.useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = React.useState(0);
  const [latestGuess, setLatestGuess] = React.useState(null);

  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  const handleGuess = (guess) => {
    setLatestGuess(Number(guess));
    setNumberOfGuesses(numberOfGuesses + 1);
  };

  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

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
