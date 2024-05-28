import React, { useState } from 'react';

const GuessControl = ({ onGuess }) => {
  
  const [currentGuess, setCurrentGuess] = useState('');

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess('');
  };

  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <button onClick={onSubmitGuess}>Submit Guess</button>
    </div>
  );
};

export default GuessControl;

