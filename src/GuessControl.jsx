import { useState } from "react";

function GuessControl({ onGuess }) {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value);
  };

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess(""); // Reset input field
  };

  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <button onClick={onSubmitGuess}>Submit Guess</button>
    </div>
  );
}

export default GuessControl;
