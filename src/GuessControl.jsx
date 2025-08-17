import { useState } from "react";
import Button from './Button'

const GuessControl = ({onGuess}) => {
  const[currentGuess, setCurrentGuess] = useState('');
        
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  }

  const onSubmitGuess = () => {
    const guessNumber = parseInt(currentGuess, 10);
      onGuess(guessNumber);
      setCurrentGuess('');
  }
      
  return (
        <div>
          <input 
            type='text'
            value={currentGuess}
            onChange={handleInputChange}
          />
         <Button onClick={onSubmitGuess}>Guess</Button>
        </div>
      );
    }

    export default GuessControl;
    