//Источник информации https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Общее задание

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min,max] = [max,min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(1, 10);

// Задание по кексобукингу

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
  return Number((Math.random() * (max - min + 1) + min).toFixed([digits]));
};

getRandomFloatInt(0, 99, 5);

const idPng = getRandomInt(1, 9);
const getAvatarValue = function () {
  if (idPng < 10) {
    return `img/avatars/user0${idPng}.png`;
  }
  return `img/avatars/user${idPng}.png`;
};

const author = {
  avatar: getAvatarValue(idPng),
};

const getLat = getRandomFloatInt(35.65000, 35.70000, 5);
const getLng = getRandomFloatInt(139.70000, 139.80000, 5);
const adressValue = `${getLat  }, ${  getLng}`;
const priceValue = getRandomInt(1, 100000);
const typeArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const roomsValue = getRandomInt(1, 10);
const guestsValue = getRandomInt(1, 10);
const checkinArray = ['12:00', '13:00', '14:00'];
const checkoutArray = ['12:00', '13:00', '14:00'];

// Определяем длину массива, создаём новый массив, перезаписываем новый массив удаляя повторения

const featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const newArrayLength = getRandomInt(0, featuresArray.length - 1);
const newArray = [];
const uniqueArray = [];
const createArray = function () {
  for (let i = 0; i <= newArrayLength; i++) {
    const options = getRandomArrayElement(featuresArray);
    newArray.push(options);
  }

  newArray.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;
};

// С массивом фото такая же история как и featuresArray только другие названия переменных

const photosArray = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const newPhotoArrayLength = getRandomInt(0, photosArray.length - 1);
const newPhotoArray = [];
const uniquePhotoArray = [];
const createPhotoArray = () => {
  for (let i = 0; i <= newPhotoArrayLength; i++) {
    const options = getRandomArrayElement(photosArray);
    newPhotoArray.push(options);
  }

  newPhotoArray.forEach((element) => {
    if (!uniquePhotoArray.includes(element)) {
      uniquePhotoArray.push(element);
    }
  });
  return uniquePhotoArray;
};

const offer = {
  title: 'Лучшее предложение по Вашим критериям',
  adress: adressValue,
  price: priceValue,
  type: getRandomArrayElement(typeArray),
  rooms: roomsValue,
  guests: guestsValue,
  checkin: getRandomArrayElement(checkinArray),
  checkout: getRandomArrayElement(checkoutArray),
  features: createArray(featuresArray),
  description: 'Шведский стол на завтрак включен в стоимость проживания',
  photos: createPhotoArray(photosArray),
};

//Изменил location на название myLocation потому что в консоле выдавало ошибку, что слово уже используется. Я так понимаю глобальное название

const myLocation = {
  lat: getLat,
  lng: getLng,
};

const createObject = () => ({
  author,
  offer,
  myLocation,
});

const requiredQuantity = 10;

const createRequiredQuantityObjects = Array.from({length:requiredQuantity}, createObject);

createObject();
createRequiredQuantityObjects();
