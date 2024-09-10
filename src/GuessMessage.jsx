function getGuessMessage(guess, numberToGuess) {
    const distanceApart = Math.abs(numberToGuess - guess);
    if (guess < numberToGuess) {
        if (distanceApart > 10) {
            return "Your guess was well below the number.";
        } else {
            return "Your guess was a little below the number.";
        }
    } else {
        if (distanceApart > 10) {
            return "Your guess was well above the number.";
        } else {
            return "Your guess was a little above the number.";
        }
    }
}

function GuessMessage({ guess, numberToGuess, numberOfGuesses }) {
    return (
        <div>
            {guess && <p>{getGuessMessage(guess, numberToGuess)}</p>}
            <p>Guesses so far: {numberOfGuesses}</p>
        </div>
    );
}

export default GuessMessage;
