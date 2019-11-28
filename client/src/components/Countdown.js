import React, { useState, useEffect, useRef } from 'react';

const countDownDate = new Date('Dec 1, 2019 0:00:0').getTime();
function Countdown({classNames}) {
  const countDown = useRef(
    setInterval(() => {
      setTimeLeft(calculateCountdown());
    }, 1000)
  );

  const calculateCountdown = () => {
    let diff =
      (Date.parse(new Date(countDownDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      d: 0,
      h: 0,
      m: 0,
      s: 0,
  
    };

    // 365.25 * 24 * 60 * 60
    diff -= Math.floor(diff / (365.25 * 86400)) * 365.25 * 86400;


    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.d = Math.floor(diff / 86400);
      diff -= timeLeft.d * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.h = Math.floor(diff / 3600);
      diff -= timeLeft.h * 3600;
    }
    if (diff >= 60) {
      timeLeft.m = Math.floor(diff / 60);
      diff -= timeLeft.m * 60;
    }
    timeLeft.s = diff;

    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateCountdown());

  return (
    <div
      className={"countdown text-arapawa is-countdown " + (classNames ? classNames : '')}
    >
      <span className="countdown-row">
        <span className="countdown-section">
          <span className="countdown-amount">{timeLeft.d}</span>
          <span className="countdown-period">Days</span>
        </span>
        <span className="countdown-sep">:</span>
        <span className="countdown-section">
          <span className="countdown-amount">{timeLeft.h}</span>
          <span className="countdown-period">Hours</span>
        </span>
        <span className="countdown-sep">:</span>
        <span className="countdown-section">
          <span className="countdown-amount">{timeLeft.m}</span>
          <span className="countdown-period">Minutes</span>
        </span>
        <span className="countdown-sep">:</span>
        <span className="countdown-section">
          <span className="countdown-amount">{timeLeft.s}</span>
          <span className="countdown-period">Seconds</span>
        </span>
      </span>
    </div>
  );
}

export default Countdown;
