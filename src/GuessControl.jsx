import{ useState } from "react";
import Button from "./Button";

// class GuessControl extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentGuess: "",
//     };
function GuessControl({ onGuess }) {
  // Initialize state using the useState hook
  const [currentGuess, setCurrentGuess] = useState('');


    /**
     * These lines are required to make the methods/functions declared on this
     *  class have the correct `this` object when they run.
     */
  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.onSubmitGuess = this.onSubmitGuess.bind(this);
  // }

  // handleInputChange(event) {
  //   this.setState({ currentGuess: event.target.value });
  // }
  function handleInputChange(event) {
    setCurrentGuess(event.target.value);
  }

  // onSubmitGuess() {
  //   // Since the values from an HTML input are strings by default,
  //   //  convert to a number for the returned guess value
  //   //  by passing in the string to the Number function.
  //   // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  //   this.props.onGuess(Number(this.state.currentGuess));
  //   this.setState({ currentGuess: "" });
  // }
  function onSubmitGuess() {
    //to Convert currentGuess to a number
    onGuess(Number(currentGuess));
    // to Reset currentGuess to an empty string
    setCurrentGuess('');
  }
// use render key word with only class 
  // render() {
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
  }
// }

export default GuessControl;



