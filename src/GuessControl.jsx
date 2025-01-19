import { useState } from "react";
import Button from "./Button";

const GuessControl = (props) => {
  const { onGuess } = props;
  const [currentGuess, setCurrentGuess] = useState("");
  
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value)
  }

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess("");    
  }

  return (
    <>
      <input 
        type="number" 
        value={currentGuess}
        onChange={(e) => {handleInputChange(e)}}
      />
      <Button onClick={() => {onSubmitGuess()}}>Submit Guess</Button>
    </>
  )
}

export default GuessControl;
