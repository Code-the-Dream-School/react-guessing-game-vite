import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess("");
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

// Define prop types for the component
GuessControl.propTypes = {
  onGuess: PropTypes.func.isRequired, // onGuess should be a function and is required
};

export default GuessControl;
