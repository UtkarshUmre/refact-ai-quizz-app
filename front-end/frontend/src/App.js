import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import Leaderboard from './Leaderboard';
import './App.css';

function App() {
  const [stage, setStage] = useState('start');
  const [selected, setSelected] = useState([]);

  const startQuiz = () => {
    setSelected([]);
    setStage('quiz');
  };

  const handleQuizEnd = (answers) => {
    setSelected(answers);
    setStage('result');
  };

  const handleRestart = () => {
    setStage('start');
    setSelected([]);
  };

  // Calculate score for leaderboard
  const getScore = () => selected.reduce((acc, ans, idx) =>
    ans === require('./quizData').default[idx].answer ? acc + 1 : acc, 0
  );

  return (
    <div className="App">
      {stage === 'start' && (
        <div className="start-container">
          <h1>Welcome to the Quiz App!</h1>
          <button onClick={startQuiz}>Start Quiz</button>
          <Leaderboard userScore={getScore()} />
        </div>
      )}
      {stage === 'quiz' && <Quiz onQuizEnd={handleQuizEnd} />}
      {stage === 'result' && (
        <>
          <Result selected={selected} onRestart={handleRestart} />
          <Leaderboard userScore={getScore()} />
        </>
      )}
    </div>
  );
}

export default App;
