import * as React from 'react';
import Button from "./Button";

const GuessControl = ({onGuess}) => {

  const [currentGuess, setCurrentGuess] = React.useState('');

  const handleInputChange = (event) =>{
    setCurrentGuess(event.target.value);
  }

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess('');
  }

  return(
    <>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </>
  )
}


export default GuessControl;
