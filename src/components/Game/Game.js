import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import AttemptList from '../AttemptList';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [attempts, setAttempts] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });
  console.log(answer);
  // for colormapping keyboard
  const letters = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('');
  const defineColorMap = () => {
    let map = {};
    letters.forEach( char => {
      map[char] = 'unused';
    })
    return map;
  }
  const [colorMap, setColorMap] = React.useState(defineColorMap());
  const updateColorMap = (update) => {
    let updatedMap = structuredClone(colorMap);
    for(let subdict of update){
      if(updatedMap[subdict.letter] == 'unused' || updatedMap[subdict.letter] == 'misplaced'){
        updatedMap[subdict.letter] = subdict.status;
      }
    }
    setColorMap(updatedMap);
  }
  // for resetting game
  const reset = () => {
    setAttempts([]);
    setGameStatus('running');
    setAnswer(() => {
      return sample(WORDS);
    })
    setColorMap(defineColorMap());
  }

  return (
    <div>
      <Banner gameStatus={gameStatus} numGuesses={attempts.length} answer={answer} reset={reset}/>
      <AttemptList attempts={attempts} answer={answer}/>
      <Guess attempts={attempts} setAttempts={setAttempts} answer={answer} gameStatus={gameStatus} setGameStatus={setGameStatus} updateColorMap={updateColorMap}/>
      <br/>
      <Keyboard colorMap={colorMap}/>
    </div>
  );
}

export default Game;
