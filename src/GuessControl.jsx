import React, { Component } from "react";
import { useState } from "react";
import Button from "./Button";

function GuessControl(props){

  const [currentGuess, setCurrentGuess] = useState();

  function handleInputChange(event) {
    setCurrentGuess(event.target.value);
  }

  function  onSubmitGuess() {
    props.onGuess(Number(currentGuess));
    setCurrentGuess("");
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
