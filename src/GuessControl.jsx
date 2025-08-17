import React, { useState } from "react";
import Button from "./Button";

function GuessControl({ onGuess }) { //component called GuessControl that will take an onGuess prop
  const [currentGuess, setCurrentGuess] = useState(""); //Create a new state variable named currentGuess with setter setCurrentGuess and default value of an empty string  
  
  const handleInputChange = (event) => { //function to update the currentGuess state value
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    // Since the values from an HTML input are strings by default,
    //  convert to a number for the returned guess value
    //  by passing in the string to the Number function.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange} //Set onChange property for the input element to refer to handleInputChange
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;

