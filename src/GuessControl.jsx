import { useState } from "react";


export default function GuessControl (onGuess){

    const [currentGuess ,setCurrentGuess] =useState('');  


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


      function  handleInputChange (e){
        setCurrentGuess(e.target.value);
       
      }

      function onSubmitGuess(onGuess){
        onGuess(Number(currentGuess));
        setCurrentGuess('');
      }


    }
