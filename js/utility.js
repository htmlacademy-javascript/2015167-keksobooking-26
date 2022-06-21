import {PHOTOS, FEATURES} from './data.js';

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min,max] = [max,min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatInt = (min, max, digits) => {
  if (digits > 5) {
    return -1;
  }
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min,max] = [max,min];
  }
  return Number((Math.random() * (max - min) + min).toFixed([digits]));
};

const getAvatarValue = () => {
  const idPng = getRandomInt(1, 9);
  if (idPng < 10) {
    return `img/avatars/user0${idPng}.png`;
  }
  return `img/avatars/user${idPng}.png`;
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];
const newArrayLength = () => getRandomInt(0, FEATURES.length - 1);

const createArray = () => {
  const newArray = [];
  const uniqueArray = [];
  for (let i = 0; i <= newArrayLength(); i++) {
    const options = getRandomArrayElement(FEATURES);
    newArray.push(options);
  }

  newArray.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;
};

const newPhotoArrayLength = () => getRandomInt(0, PHOTOS.length - 1);

const createPhotoArray = () => {
  const newPhotoArray = [];
  const uniquePhotoArray = [];
  for (let i = 0; i <= newPhotoArrayLength(); i++) {
    const options = getRandomArrayElement(PHOTOS);
    newPhotoArray.push(options);
  }

  newPhotoArray.forEach((element) => {
    if (!uniquePhotoArray.includes(element)) {
      uniquePhotoArray.push(element);
    }
  });
  return uniquePhotoArray;
};

export {getRandomInt, getRandomFloatInt, getAvatarValue, getRandomArrayElement, newArrayLength, createArray, createPhotoArray};


