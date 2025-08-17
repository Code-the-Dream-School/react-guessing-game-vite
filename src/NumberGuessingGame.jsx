//import React, { Component } from "react";
import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const MAX_ATTEMPTS = 5;

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */

function NumberGuessingGame() {
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver = isCorrectGuess || numberOfGuesses >= MAX_ATTEMPTS;

  //Create a handleInputChange function
  const handleGuess = (guess) => {
    setLatestGuess(Number(guess));
    setNumberOfGuesses((prev) => prev + 1);
  };

  //create a handleReset function
  const handleReset = () => {
    setNumberToGuess(Math.floor(Math.random() * 100) + 1);
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

      {isGameOver ? (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
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

//function getRandomNumberOld() {
//   return Math.floor(Math.random() * 100) + 1;
// }

// const MAX_ATTEMPTS = 5;

// class NumberGuessingGame extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       numberToGuess: getRandomNumberOld(),
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
//       numberToGuess: getRandomNumberOld(),
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
