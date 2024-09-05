import React, { Component } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";
import { useState } from "react";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;
//Steps for refactoring class components to function components
//1.Create new empty functional component
//2. Render mothod ==> return
//3. props ==> props
//4. this.state ==> useState() (remember to import useState)
//5. handlerMethods ==> handlerFunctions
//6. Ensure all this's are gone and also this.state's
//7. Ensure all setStates are replaced with individual useState setter

function NumberGuessingGame() {
  // this.state = {
  //   numberToGuess: getRandomNumber(),
  //   numberOfGuesses: 0,
  //   latestGuess: null,
  // };
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuest] = useState(null);

  function handleGuess(guess) {
    setLatestGuest(guess);
    setNumberOfGuesses(numberOfGuesses + 1);
    // setState({
    //   latestGuess: guess,
    //   numberOfGuesses: numberOfGuesses + 1,
    // });
  }

  function handleReset() {
    setNumberToGuess(getRandomNumber);
    setNumberOfGuesses(0);
    setLatestGuest(null);
    // this.setState({
    //   numberToGuess: getRandomNumber(),
    //   numberOfGuesses: 0,
    //   latestGuess: null,
    // });
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

// class NumberGuessingGame extends Component {
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

export default NumberGuessingGame;

