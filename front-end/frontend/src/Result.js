import React from 'react';
import quizData from './quizData';

function Result({ selected, onRestart }) {
  const score = selected.reduce((acc, ans, idx) =>
    ans === quizData[idx].answer ? acc + 1 : acc, 0
  );

  return (
    <div className="result-container">
      <div className="card">
        <h2 style={{marginTop: 0}}>Quiz Results</h2>
        <p style={{fontWeight: 600}}>Your Score: {score} / {quizData.length}</p>
        <ul style={{padding: 0, listStyle: 'none'}}>
          {quizData.map((q, idx) => (
            <li key={idx} style={{marginBottom: '12px'}}>
              <div style={{fontWeight: 500}}>{q.question}</div>
              <div>Your answer: <span style={{color: selected[idx] === q.answer ? 'green' : 'red'}}>{q.options[selected[idx]] || 'No answer'}</span></div>
              <div>Correct answer: <span style={{color: 'green'}}>{q.options[q.answer]}</span></div>
            </li>
          ))}
        </ul>
        <button onClick={onRestart}>Restart Quiz</button>
      </div>
    </div>
  );
}

export default Result;
