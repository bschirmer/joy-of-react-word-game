import React, { useState } from 'react';

function WordInput({ setGuesses }) {
  const [guess, setGuess] = useState('');

  function handleSubmitGuess(event) {
    event.preventDefault();
    setGuesses((prev) => [...prev, guess]);
    setGuess('');
  }
  return (
    <form onSubmit={handleSubmitGuess} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Za-z]{5}"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        title="Guesses must be a 5 letter word"
      />
    </form>
  );
}

export default WordInput;
