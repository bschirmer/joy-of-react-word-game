import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(0, 5).map((i) => {
        const currentLetter = checkedGuess[i];
        const className = `cell ${currentLetter.status}`;
        return (
          <span key={`cell-${i}`} className={className}>
            {checkedGuess[i].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
