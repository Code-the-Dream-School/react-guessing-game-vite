// import React, { Component } from "react";
import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

// /**
//  *
//  * Returns a random integer number from 1-100 inclusive
//  */
// function getRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }

// const MAX_ATTEMPTS = 5;

// // class NumberGuessingGame extends Component {
// // 12.7 - Rename the current NumberGuessingGame class to NumberGuessingGameOld if you want to keep it a reference while converting the code
// export class NumberGuessingGameOld extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       numberToGuess: getRandomNumber(),
//       numberOfGuesses: 0,
//       latestGuess: null,
//     };

//     /**
//      * These lines are required to make the methods/functions declared on this
//      *  class have the correct `this` object when they run.
//      */
//     this.handleGuess = this.handleGuess.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//   }

//   handleGuess(guess) {
//     this.setState({
//       latestGuess: guess,
//       numberOfGuesses: this.state.numberOfGuesses + 1,
//     });
//   }

//   handleReset() {
//     this.setState({
//       numberToGuess: getRandomNumber(),
//       numberOfGuesses: 0,
//       latestGuess: null,
//     });
//   }

//   render() {
//     const isCorrectGuess = this.state.latestGuess === this.state.numberToGuess;

//     const isGameOver =
//       isCorrectGuess || this.state.numberOfGuesses === MAX_ATTEMPTS;

//     return (
//       <div>
//         <h2>I'm thinking of a number from 1 to 100.</h2>
//         <h2>
//           Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
//         </h2>
//         <GuessControl onGuess={this.handleGuess} />
//         {isGameOver && (
//           <GameOver hasWon={isCorrectGuess} onReset={this.handleReset} />
//         )}
//         {!isGameOver && (
//           <GuessMessage
//             guess={this.state.latestGuess}
//             numberToGuess={this.state.numberToGuess}
//             numberOfGuesses={this.state.numberOfGuesses}
//           />
//         )}
//       </div>
//     );
//   }
// }

// // export default NumberGuessingGame;

// 12.8 - New functional component
const NumberGuessingGame = () => {
  // 12.9 - State variables. reate 3 state variables and their setters for numberToGuess, numberOfGuesses, and latestGuess and initialize them to the same values from the class component version
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  // 12.10 - Handle a user's guess
  const handleGuess = (guess) => {
    setLatestGuess(Number(guess)); // Convert guess to a number
    setNumberOfGuesses((prev) => prev + 1); // Increment guesses
  };

  // 12.11 - Reset the game
  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

  // 12.12 - Determine if the guess is correct or if the game is over
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
};

export default NumberGuessingGame;
