import React, { useState } from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput from '../WordInput/WordInput';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import EmptyGuess from '../EmptyGuess/EmptyGuess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
          const guess = guesses[i];
          const key = `guess-${i}`;
          if (!!guess) return <Guess key={key} guess={guesses[i]} answer={answer} />;
          return <EmptyGuess key={key} />;
        })}
      </div>
      {guesses[guesses.length - 1] === answer ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      ) : guesses.length === NUM_OF_GUESSES_ALLOWED ? (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      ) : (
        <WordInput setGuesses={setGuesses} />
      )}
    </>
  );
}

export default Game;
