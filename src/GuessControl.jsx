import React, { useState } from "react";
import Button from "./Button";

function GuessControl ({onGuess}){

  const [ currentGuess, setCurrentGuess] = useState("");

  function handleInputChange(event){
    //handleChange
    setCurrentGuess(event.target.value);
  }

  function onSubmitGuess(){
    // handleSubmitGuess
    onGuess(Number(currentGuess));
    setCurrentGuess("")
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
