import React from 'react';
import { ResetButton } from './Styles';

function Banner({gameStatus, numGuesses, answer, reset}) {

  return (
    <>
    {gameStatus === 'won' ? 
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{' '}{numGuesses} guesses</strong>.
          <br/>
          <button style={ResetButton} onClick={ () => {
            reset();
          }}>RESET</button>
        </p>
      </div> : gameStatus === 'lost' ?
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <button style={ResetButton} onClick={ () => {
          reset();
        }}>RESET</button>
      </div>
      : null
    }
    </>
  );
}

export default Banner;
