import React from 'react';
import { range } from '../../utils';

function EmptyGuess() {
  return (
    <p className="guess">
      {range(0, 5).map((i) => {
        return <span key={`cell-${i}`} className="cell"></span>;
      })}
    </p>
  );
}

export default EmptyGuess;
