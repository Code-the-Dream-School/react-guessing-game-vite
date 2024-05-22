import React, { useState } from "react"
import Button from "./Button"

const GuessControl = ({ onGuess }) => {

  // Task: a new state variable named currentGuess with setter setCurrentGuess 
  // and default value of an empty string. Set the value property for the 
  // input element to refer to this state value

  const [currentGuess, setCurrentGuess] = useState("")

  // Task: handleInputChange function within the component that 
  // updates the currentGuess state value when the user changes 
  // the value in the input. Set the onChange property for the 
  // input element to refer to this function.


  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value)
  };

// Task: onSubmitGuess function that calls the onGuess 
// prop with the currentGuess value converted to a number 
// and also resets the currentGuess to an empty string when it is called. 
// Set the onClick property on the button to refer to this function.

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess))
    setCurrentGuess("")
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl
