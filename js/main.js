//Источник информации https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Общее задание

function getRandomIntInclusive(min, max) {
  if(min < 0 || max < 0) {
    console.log('Значения не должны быть отрицательными');
  } else {
    if (min>=max) {
      console.log('Значение min должно быть больше max');
    } else {
      min = Math.round(min);
      max = Math.round(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
getRandomIntInclusive(1.1, 2.2);

// Задание по кексобукингу

function getRandomIntInclusiveKeksobooking(min, max, digits) {
  if(digits > 100) {
    console.log('Количество знаков после запятой должно быть не более 100');
  } else {
    if(min < 0 || max < 0) {
      console.log('Значения не должны быть отрицательными');
    } else {
      if (min>=max) {
        console.log('Значение min должно быть больше max');
      }
      else {
        min.toFixed([digits]);
        max.toFixed([digits]);
        return Math.random() * (max - min + 1) + min;
      }
    }
  }
}

getRandomIntInclusiveKeksobooking(32, 5303, 100);
