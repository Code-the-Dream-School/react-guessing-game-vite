import React, { useState } from "react";
import Button from "./Button";

function GuessControl({ onGuess }) {
  // Create a new state variable named currentGuess with setter setCurrentGuess
  // and default value of an empty string.
  const [currentGuess, setCurrentGuess] = useState("");

  // Create a handleInputChange function within the component that updates
  // the currentGuess state value when the user changes the value in the input.
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  // Create a onSubmitGuess function that calls the onGuess prop with the
  // currentGuess value converted to a number and also resets the currentGuess
  // to an empty string when it is called.
  const onSubmitGuess = () => {
    // Since the values from an HTML input are strings by default,
    // convert to a number for the returned guess value
    // by passing in the string to the Number function.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };

  return (
    <div>
      {/* Set the value property for the input element to refer to the currentGuess state value */}
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      {/* Set the onClick property on the button to refer to the onSubmitGuess function */}
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
