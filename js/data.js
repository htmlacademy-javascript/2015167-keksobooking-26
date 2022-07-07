import {getRandomInt, getRandomFloatInt, getAvatarValue, getRandomArrayElement, createArray, createPhotoArray} from './utility.js';

const getLat = () => getRandomFloatInt(35.65000, 35.70000, 5);
const getLng = () => getRandomFloatInt(139.70000, 139.80000, 5);
const adressValue = () => `${getLat()}, ${getLng()}`;
const getPriceValue = () => getRandomInt(1, 100000);
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const getRoomsValue = () => getRandomInt(1, 10);
const getGuestsValue = () => getRandomInt(1, 10);
const CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const REQUIRED_OBJECTS = 25;

const getAuthor = () => ({
  avatar: getAvatarValue(),
});

const getOffer = () => ({
  // title: 'Лучшее предложение по Вашим критериям',
  adress: adressValue(),
  price: getPriceValue(),
  type: getRandomArrayElement(TYPES),
  rooms: getRoomsValue(),
  guests: getGuestsValue(),
  checkin: getRandomArrayElement(CHECKIN_TIMES),
  checkout: getRandomArrayElement(CHECKOUT_TIMES),
  features: createArray(FEATURES),
  description: 'Шведский стол на завтрак включен в стоимость проживания',
  photos: createPhotoArray(PHOTOS),
});

const getLocation = () => ({
  lat: getLat(),
  lng: getLng(),
});

const createObject = () => ({
  author: getAuthor(),
  offer: getOffer(),
  location: getLocation(),
});

const createRequiredQuantityObjects = () => Array.from({length:REQUIRED_OBJECTS}, createObject);
export {PHOTOS, FEATURES, createRequiredQuantityObjects};

