import { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  
  const [currentGuess, setCurrentGuess] = useState("");

  const onSubmitGuess = () => {
    if (currentGuess !== "") {
      onGuess(parseInt(currentGuess));
      setCurrentGuess(""); // Reset currentGuess to an empty string after submitting
    }
  };


  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value); // Update currentGuess state value when input changes
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange} // Set the onChange property for the input element to refer to handleInputChange function
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl;
