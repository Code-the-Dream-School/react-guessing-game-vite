import { useState, useEffect } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

const NumberGuessingGame = () => {
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);
  const [isCorrectGuess, setIsCorrectGuess] = useState(latestGuess === numberToGuess);
  const [isGameOver, setIsGameOver] = useState(isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS);

  const handleGuess = (guess) => {
    setLatestGuess(guess);
    setNumberOfGuesses(sum => sum + 1);
  }

  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  } 

  useEffect( () => {
    console.log("Number to guess: ", numberToGuess);
    console.log("Number of guesses: ", numberOfGuesses);
    console.log("Latest Guess: ", latestGuess);

    setIsCorrectGuess(latestGuess === numberToGuess);
    setIsGameOver(isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS);
  }, [latestGuess, numberOfGuesses, isCorrectGuess, numberToGuess]);

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={(latestGuess) => handleGuess(latestGuess)} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={() => {handleReset()}} />
      )}
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
