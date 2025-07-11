"use client"; 
import { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Timer Next.js</h1>
      <h2>{formatTime(time)}</h2>
      <button
        onClick={() => setIsRunning(!isRunning)}
        style={{ marginRight: '10px' }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setTime(0)}>Zerar</button>
    </div>
  );
}