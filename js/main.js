//Источник информации https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Общее задание

const getRandomInt = (min, max) => {
  if(min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min,max] = [max,min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(10, 1);

// Задание по кексобукингу

const getRandomFloatInt = (min, max, digits) => {
  if(digits > 100) {
    return;
  }
  if(min < 0 || max < 0) {
    return -1;
  }
  if (min>max) {
    [min,max] = [max,min];
  }
  return (Math.random() * (max - min + 1) + min).toFixed([digits]);
};

getRandomFloatInt(32, 5303, 22);
