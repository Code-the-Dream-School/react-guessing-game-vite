import React, { useState } from "react";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState(""); // State for the current guess

  // Updates the state when the input value changes
  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value);
  };

  // Submits the guess and resets the input
  const onSubmitGuess = () => {
    if (currentGuess.trim() !== "") {
      onGuess(Number(currentGuess)); // Calls the parent function with the guess
      setCurrentGuess(""); // Resets the input field
    }
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <button onClick={onSubmitGuess}>Submit Guess</button>
    </div>
  );
};

export default GuessControl;
