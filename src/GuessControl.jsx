import React, { Component } from "react";
import Button from "./Button";

function GuessControl(onGuess) {
  const [currentGuess, setCurrentGuess] = ('');

  function handleInputChange() {
    setCurrentGuess(e.target.value);
  }

  function onSubmitGuess(onGuess) {
    onGuess(Number(currentGuess));
    setCurrentGuess('');
  }

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
}




export default GuessControl;
