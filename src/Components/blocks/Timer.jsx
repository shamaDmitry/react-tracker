import { useEffect, useState } from 'react';
import Play from '../../assets/icons/play.svg?react';
import Pause from '../../assets/icons/pause.svg?react';

const Timer = ({ initTime }) => {
  const [time, setTime] = useState(initTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <div className="mb-3 flex p-4 border border-primary-500 gap-x-8 rounded-[15px] ">
      <div className="flex items-start mr-auto">
        <div className="flex flex-col items-center">
          <span className="text-primary-500 text-[40px] font-bold leading-8 mb-2">
            {hours.toString().padStart(2, '0')}
          </span>
          <span className="text-sm text-dark-300">Hours</span>
        </div>

        <div className="flex flex-col items-center mx-1 mr-2">
          <span className="text-primary-500 text-[40px] font-bold leading-7">
            :
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-primary-500 text-[40px] font-bold leading-8 mb-2">
            {minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-sm text-dark-300">Minutes</span>
        </div>

        <div className="flex flex-col items-center mx-1 mr-2 opacity-50">
          <span className="text-primary-500 text-[40px] font-bold leading-7">
            :
          </span>
        </div>

        <div className="flex flex-col items-center opacity-50">
          <span className="text-primary-500 text-[40px] font-bold leading-8 mb-2 relative">
            {seconds.toString().padStart(2, '0')}

            <span className="absolute text-base text-black -right-4">
              {milliseconds.toString().padStart(2, '0')}
            </span>
          </span>
          <span className="text-sm text-dark-300">Seconds</span>
        </div>
      </div>

      <button
        className="w-[56px] h-[56px] border-primary-500 flex items-center justify-center shrink-0 border rounded-full hover:border-primary-400 hover:text-primary-400 text-primary-500"
        onClick={startAndStop}
      >
        {isRunning ? <Pause /> : <Play />}
      </button>
    </div>
  );
};

export default Timer;
