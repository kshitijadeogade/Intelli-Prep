import React, { useState } from 'react';

function HardwareScore() {
  const [connected, setConnected] = useState(false);
  const [score, setScore] = useState(null);

  const handleConnect = () => {
    setConnected(true);
    // Simulate score fetch
    setScore(Math.floor(Math.random() * 100));
  };

  return (
    <div className="hardware-score-page">
      <h2>Score</h2>
      <p>Wear the hardware kit and connect to see your score.</p>
      {!connected ? (
        <button onClick={handleConnect} className="cta-btn">Connect Hardware</button>
      ) : (
        <div className="score-display">
          <p><strong>Your Score:</strong> {score}</p>
        </div>
      )}
    </div>
  );
}

export default HardwareScore;
