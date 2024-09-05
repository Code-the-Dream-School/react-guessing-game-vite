import Button from "./Button";

// eslint-disable-next-line react/prop-types
function GameOver({ hasWon, onReset }) {
  return (
    <div>
      {hasWon && <h2>Congratulation! You guessed my number.</h2>}
      {!hasWon && (
        // eslint-disable-next-line react/no-unescaped-entities
        <h2>You didn't guess my number. Would you like to try again?</h2>
      )}
      <Button onClick={onReset}>Play Again!</Button>
    </div>
  );
}

export default GameOver;
