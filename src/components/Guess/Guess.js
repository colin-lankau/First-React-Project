import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({attempts, setAttempts, answer, gameStatus, setGameStatus, updateColorMap}) {
  const [guess, setGuess] = React.useState("");

  const gameLogic = () => {
    if(guess === answer){
      setGameStatus('won');
    }
    if(attempts.length == NUM_OF_GUESSES_ALLOWED-1){
      setGameStatus('lost');
    }
    setGuess("");
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newAttempts = [...attempts, guess];
    setAttempts(newAttempts);
    gameLogic();
    updateColorMap(checkGuess(guess, answer));
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="[a-zA-Z]{5}" value={guess} onChange={e => setGuess(e.target.value.toUpperCase())} disabled={gameStatus != 'running'} required/>
    </form>
  );
}

export default Guess;
