// import React, { Component } from "react";
import React, { useState } from "react";
import Button from "./Button";

// // // class GuessControl extends Component {
// // // 12.1 - Rename the current GuessControl class to GuessControlOld if you want to keep it a reference while converting the code
// export class GuessControlOld extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentGuess: "",
//     };

//     /**
//      * These lines are required to make the methods/functions declared on this
//      *  class have the correct `this` object when they run.
//      */
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.onSubmitGuess = this.onSubmitGuess.bind(this);
//   }

//   handleInputChange(event) {
//     this.setState({ currentGuess: event.target.value });
//   }

//   onSubmitGuess() {
//     // Since the values from an HTML input are strings by default,
//     //  convert to a number for the returned guess value
//     //  by passing in the string to the Number function.
//     // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//     this.props.onGuess(Number(this.state.currentGuess));
//     this.setState({ currentGuess: "" });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="number"
//           value={this.state.currentGuess}
//           onChange={this.handleInputChange}
//         />
//         <Button onClick={this.onSubmitGuess}>Submit Guess</Button>
//       </div>
//     );
//   }
// }

// // export default GuessControl;

// 12.2 - Create a new function component called GuessControl that will take an onGuess prop
const GuessControl = ({ onGuess }) => {
  // 12.4 - Create a state with useState
  const [currentGuess, setCurrentGuess] = useState("");

  // 12.5 - Input change handler (Create a handleInputChange function within the component that updates the currentGuess state value when the user changes the value in the input. Set the onChange property for the input element to refer to this function.)
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  // 12.6 - Guess send handler - Create a onSubmitGuess function that calls the onGuess prop with the currentGuess value converted to a number and also resets the currentGuess to an empty string when it is called
  const onSubmitGuess = () => {
    onGuess(Number(currentGuess)); // Pass the current value to the onGuess prop
    setCurrentGuess(""); // Resetting the state
  };

  // 12.3 - Copy the return value from the render function in the class component to be the return value in the new function component. Remove any references to this. since those will be replaced with new references to local variables or props passed in to the function component
  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl;
