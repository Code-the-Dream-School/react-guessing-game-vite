import React, { Component } from "react";
import Button from "./Button";
import { useState } from "react";


const GuessControl = ({onGuess}) => {

  const [currentGuess, setCurrentGuess] = React.useState('')

  const handleInputChange = (event) => {
      setCurrentGuess(event.target.value)
  }
  const onSubmitGuess = () => {
    onGuess(Number(currentGuess))
    setCurrentGuess("");
  }

  return(
  <div>
  <input
    type="number"
    value={currentGuess}
    onChange={handleInputChange}
  />
  <Button onClick={onSubmitGuess}>Submit Guess</Button>
</div>
  )
}


export default GuessControl;