import React, { useState } from 'react';
import './Dice.css';

// Define what a dice roll should look like to the history array
interface Roll {
  random: number;
  dice: number;
}

// The actual dice roll wizardry
function rollDice(die: number) {
  return Math.floor(Math.random() * die) + 1;
}

// Functional Component 'Dice'
function Dice() {
  // Declare states for dice: number, random: number, and roll history (array of interface Roll)
  const [dice, setDice] = useState(20);
  const [random, setRandom] = useState(0);
  const [history, setHistory] = useState<Roll[]>([]);

  // Handles what happens when the Roll button is clicked
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent default submit action
    event.preventDefault();

    // Roll the dice
    setRandom(rollDice(dice));

    // Add result to history array
    setHistory([{ random, dice }, ...history]);
  };

  // Handles what happens when the select option is changed
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Push last roll to beginning of history array
    setHistory([{ random, dice }, ...history]);

    // Re-initialise random
    setRandom(0);

    // Get value of select option, parse as integer, set dice value
    setDice(parseInt(event.target.value));
  };

  // Handles what happens when reset button is clicked
  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Reset random and history to default values
    setRandom(0);
    setHistory([]);

    // Log click
    console.log('Reset clicked');
  };

  // Validation logging - uncomment lines below to examine history array
  // console.log(`History items: ${history.length}`);
  // console.log(history);

  // Initialise history output array
  const output: Array<string> = [];

  // Loop through roll history
  history.forEach(function (roll) {
    // Negate addition of initial zero rolls to output array
    if (roll.random !== 0) {
      // Add string to output array
      output.push(`${roll.random} (${roll.dice})`);
    }
  });

  const DiceSelector = (): JSX.Element => {
    return (
      <select onChange={handleSelect}>
        <option value="20">d20</option>
        <option value="12">d12</option>
        <option value="10">d10</option>
        <option value="8">d8</option>
        <option value="6">d6</option>
        <option value="4">d4</option>
        <option value="100">d100</option>
      </select>
    );
  };

  return (
    <div className="dice">
      <form onSubmit={handleSubmit}>
        <h2>Dice Roller</h2>
        <DiceSelector />
        <button>Roll!</button>
        <p>
          You rolled:{' '}
          <span className="result">
            {random} ({dice})
          </span>
        </p>
      </form>
      <div className="results">
        <div className="results-title">
          <h4>Roll History</h4>
        </div>
        <div className="results-reset">
          <button onClick={handleReset}>Clear</button>
        </div>
        <div className="results-items">
          <ol>
            {output.map((listItem) => (
              <li>{listItem}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Dice;
