
import Button from "./Button";
import { useState } from "react";


const GuessControl = ( {onGuess} ) => {

    const [currentGuess, setCurrentGuess] = useState ("");

  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value);
  };

 const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess( "" );
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

export default GuessControl;