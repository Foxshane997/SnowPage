import React, { useEffect, useState } from 'react';
import '../styles/Clock.css';

const Clock = () => {
  const [time, setTime] = useState('');

  const updateClock = () => {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString([], options);
    setTime(timeString);
  };

  useEffect(() => {
    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="clock">
      {time}
    </div>
  );
};

export default Clock;
