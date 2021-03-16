import React from "react";
import "./Dice.css";

function Dice() {
  // Declare states for dice and result
  const [dice, setDice] = React.useState(20);
  const [random, setRandom] = React.useState(0);

  // Handles what happens when the Roll button is clicked
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent default submit action
    event.preventDefault();
    // roll the dice
    setRandom(Math.floor(Math.random() * dice) + 1);
  };

  // Handles what happens when the select option is changed
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // get value of select option and parse as integer
    let x = parseInt(event.target.value);
    // set value of dice
    setDice(x);
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
    </div>
  );
}

export default Dice;
