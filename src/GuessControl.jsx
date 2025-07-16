import React, { useState } from "react";
import Button from "./Button";

function GuessControl(props) {
  const [currentGuess, setCurrentGuess] = useState("");

  function handleInputChange(event) {
    setCurrentGuess(event.target.value);
  }

  function submitGuess() {
    props.onGuess(Number(currentGuess));
    setCurrentGuess(""); // Clear the input after guessing
  }

  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={submitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
