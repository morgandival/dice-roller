import React from 'react';
import './Dice.css';

function Dice() {
  // Declare states for dice, random result, and previous rolls
  const [dice, setDice] = React.useState(20);
  const [random, setRandom] = React.useState(0);
  const [history, setHistory] = React.useState<object[]>([]);

  // Handles what happens when the Roll button is clicked
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent default submit action
    event.preventDefault();

    // Roll the dice
    setRandom(Math.floor(Math.random() * dice) + 1);

    // Add result to history array
    setHistory([{ random, dice }, ...history]);

    console.log(`History items: ${history.length}`);

    // Error checking
    if (history.length > 0) {
      console.log(history);
    } else {
      console.log(`No history items to display!`);
    }
  };

  // Handles what happens when the select option is changed
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Get value of select option, parse as integer, set dice value
    setDice(parseInt(event.target.value));
  };

  return (
    <div className="dice">
      <form onSubmit={handleSubmit}>
        <select onChange={handleSelect}>
          <option value="20">d20</option>
          <option value="12">d12</option>
          <option value="10">d10</option>
          <option value="8">d8</option>
          <option value="6">d6</option>
          <option value="4">d4</option>
          <option value="100">d100</option>
        </select>
        <button>Roll!</button>
      </form>
      <p>
        You rolled: <span className="result">{random}</span>
      </p>
      <h4>Roll History</h4>
    </div>
  );
}

export default Dice;
