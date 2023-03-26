const getTwoDigitsFormat = (time) => {
  return time > 9 ? `${time}` : `0${time}`;
};

// не самая красивая функция, но задачу выполняет
export const formatTime = (time) => {
  let seconds, minutes, hours;

  if (time < 60) {
    return `${time}`;
  }

  seconds = getTwoDigitsFormat(time % 60);

  if (time < 3600) {
    minutes = Math.floor(time / 60);
    return `${minutes}:${seconds}`;
  }

  minutes = getTwoDigitsFormat(Math.floor((time / 60) % 60));
  hours = Math.floor(time / 3600);

  return `${hours}:${minutes}:${seconds}`;
};
