import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [expiryTime, setExpiryTime] = useState("1 jan 2024 12:01:01");
  const [countdownTime, setCountdownTime] = useState(
    {
      countdownDays: '',
      countdownHours: '',
      countdownlMinutes: '',
      countdownSeconds: ''
    }
  );
  const countdownTimer = () => {
    const timer = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds
      }
      setCountdownTime(runningCountdownTime);
      if (remainingDayTime < 0) {
        clearInterval(timer);
        setExpiryTime(false);
      }
    }, 1000);
  }

  useEffect(() => {
    countdownTimer();
  });
  return (
    <>
      <div className='container'>
        <h4 className="text-center mt-5">Countdown timer</h4>
        <h5>New year 2024</h5>
        <div>
          {expiryTime !== false ?
            <>
              <button type="button" className="btn btn-primary mx-1">{countdownTime.countdownDays} <span>Days</span></button>

              <button type="button" className="btn btn-danger mx-1">{countdownTime.countdownHours} <span>Hours</span></button>

              <button type="button" className="btn btn-success mx-1">{countdownTime.countdownMinutes} <span>Minutes</span></button>

              <button type="button" className="btn btn-warning mx-1">{countdownTime.countdownSeconds} <span>Seconds</span></button>
            </>
            : <h1>Happy New year 2024 🎊 🎉</h1>}
        </div>
      </div>
    </>
  );
}

export default App;
