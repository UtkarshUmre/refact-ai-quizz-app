import React, { useState } from 'react';
import quizData from './quizData';

function Quiz({ onQuizEnd }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleOptionClick = (idx) => {
    const newSelected = [...selected];
    newSelected[current] = idx;
    setSelected(newSelected);
    setShowError(false);
  };

  const handleNext = () => {
    if (selected[current] === undefined) {
      setShowError(true);
      return;
    }
    if (current < quizData.length - 1) {
      setCurrent(current + 1);
    } else {
      onQuizEnd(selected);
    }
  };

  return (
    <div className="quiz-container">
      <div className="card">
        <div className="question-title">Question {current + 1} of {quizData.length}</div>
        <div style={{marginBottom: '18px'}}>{quizData[current].question}</div>
        <ul className="options-list">
          {quizData[current].options.map((opt, idx) => (
            <li key={idx}>
              <div
                className={`option-card${selected[current] === idx ? ' selected' : ''}`}
                onClick={() => handleOptionClick(idx)}
              >
                {opt}
              </div>
            </li>
          ))}
        </ul>
        {showError && <div style={{color: 'red', marginBottom: '10px'}}>Please select an option!</div>}
        <button onClick={handleNext}>
          {current === quizData.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
