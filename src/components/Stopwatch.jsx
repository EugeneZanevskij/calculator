import { useState, useEffect } from 'react';
import Timer from './Timer';
import ControlButtons from './ControlButtons';

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive && !isPaused) {
        interval = setInterval(() => setTime(time => time + 10), 10);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="w-[40vw] h-[70vh] flex flex-col items-center justify-between bg-[#0d0c1b] p-8">
      <Timer time={time} />
      <ControlButtons
        isActive={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  )
}

export default Stopwatch