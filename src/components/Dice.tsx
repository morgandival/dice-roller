import React from 'react';


function Dice () {

  return(
    <div className="dice">
      <form>
        <select>
            <option>d20</option>
            <option>d12</option>
            <option>d10</option>
            <option>d8</option>
            <option>d6</option>
            <option>d4</option>
            <option>d100</option>
        </select>
        <button>Roll!</button>
      </form>
    </div>
  );
}

export default Dice;