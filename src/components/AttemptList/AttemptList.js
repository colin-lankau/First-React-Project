import React from 'react';
import Attempt from '../Attempt'
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function AttemptList({attempts, answer}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map( i => {
        return (
          <p className="guess">
            { attempts[i] == undefined ?
              <Attempt key={`attempt${i}`} attempt={""} answer={answer}/> : 
              <Attempt key={`attempt${i}`} attempt={attempts[i]} answer={answer}/>
            }
          </p>
        );
      })}
    </div>
  );
}

export default AttemptList;
