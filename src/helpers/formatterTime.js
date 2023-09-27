const formatterTime = time => {
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return {
    hours,
    minutes,
    seconds,
    milliseconds,
  };
};

export default formatterTime;
