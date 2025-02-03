import React from 'react';

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses!</p>
          <p>Refresh for a new game</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind!</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time!</p>
          <p>Refresh for a new game</p>
        </div>
      )}
    </div>
  );
}
