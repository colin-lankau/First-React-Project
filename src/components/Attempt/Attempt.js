import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';


function Attempt({attempt, answer}) {

  const wordData = checkGuess(attempt, answer);

  return (
    <>
      {range(5).map( i => {
        const cellClass = attempt != '' ? wordData[i].status : '';
        return <span key={`cell${i}`} className={`cell ${cellClass}`}>{attempt[i]}</span>
      })}
    </>
  );
}

export default Attempt;
