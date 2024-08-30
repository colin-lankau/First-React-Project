import React from 'react';
import { statusStyles } from './KeyboardStyles';

function KeyboardRow({letters, colorMap}) {

  const rowStyle = {
    'display': 'flex',
    'justifyContent': 'center',
    'width': '100%'
  }

  const cellStyle = {
    'display': 'flex',
    'justifyContent': 'center',
    'border': '2px solid black',
    'width': '6%',
    'margin': '2px',
    'paddingLeft': '15px',
    'paddingRight': '15px',
    'textAlign': 'center',
    'borderRadius': '5px',
    'fontSize': '125%'
  }

  return (
    <div style={rowStyle}>
      {letters.map( char => {
        console.log(colorMap[char]);
        let statusStyle = statusStyles[colorMap[char]];
        {/* console.log(statusStyle); */}
        return <span key={char} style={{...cellStyle, ...statusStyle}}>{char}</span>
      })}
    </div>
  );
}

function Keyboard({colorMap}) {

  return (
    <div>
      <KeyboardRow letters={'QWERTYUIOP'.split('')} colorMap={colorMap}/* update={letters.slice(0,10).map( char => { return })}*//>
      <KeyboardRow letters={'ASDFGHJKL'.split('')} colorMap={colorMap}/>
      <KeyboardRow letters={'ZXCVBNM'.split('')} colorMap={colorMap}/>
    </div>
  );
}

export default Keyboard;
