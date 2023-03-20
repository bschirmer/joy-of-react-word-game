import React, { useState } from 'react';

const WORDLE_LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function WordleKeyboard({ onLetterSelect }) {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    onLetterSelect(letter);
  };

  return (
    <div className="wordle-keyboard">
      {WORDLE_LETTERS.map((letter) => (
        <button
          key={letter}
          className={`wordle-keyboard__button${
            selectedLetter === letter ? ' wordle-keyboard__button--selected' : ''
          }`}
          onClick={() => handleLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default WordleKeyboard;
