import React from 'react';

// Mock leaderboard data
const leaderboardData = [
  { name: 'Alice', score: 3 },
  { name: 'Bob', score: 2 },
  { name: 'Charlie', score: 2 },
  { name: 'You', score: 0 }, // Placeholder for current user
];

function Leaderboard({ userScore }) {
  // Insert/update user's score in the leaderboard (for demo)
  const data = leaderboardData.map(entry =>
    entry.name === 'You' ? { ...entry, score: userScore } : entry
  ).sort((a, b) => b.score - a.score);

  return (
    <div className="leaderboard-container">
      <div className="card">
        <h2 style={{marginTop: 0}}>Leaderboard</h2>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, idx) => (
              <tr key={entry.name} style={entry.name === 'You' ? {fontWeight: 'bold', color: '#3399ff'} : {}}>
                <td>{idx + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
