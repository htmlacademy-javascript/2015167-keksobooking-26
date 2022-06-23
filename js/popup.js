import {createRequiredQuantityObjects} from './data.js';

const similarCardPlace = document.querySelector('#map-canvas');
const similarTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const cards = createRequiredQuantityObjects();
const popupFeatures = similarTemplate.querySelector('.popup__features');
const popupFeature = popupFeatures.querySelectorAll('.popup__feature');

cards.forEach((card) => {
  const cardTemplate = similarTemplate.cloneNode(true);
  cardTemplate.querySelector('.popup__title').textContent = card.offer.title;
  cardTemplate.querySelector('.popup__text--address').textContent = card.offer.adress;
  cardTemplate.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  let popupType = 'Квартира';
  if (card.offer.type === 'bungalow') {
    popupType = 'Бунгало';
  }
  if (card.offer.type === 'house') {
    popupType = 'Дом';
  }
  if (card.offer.type === 'palace') {
    popupType = 'Дворец';
  }
  if (card.offer.type === 'hotel') {
    popupType = 'Отель';
  }
  cardTemplate.querySelector('.popup__type').textContent = popupType;
  cardTemplate.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  const features = card.offer.features;
  popupFeature.forEach((item) => {
    const isNecessary = features.some(
      (feature) => item.classList.contains(`popup__feature--${feature}`)
    );
    if (!isNecessary) {
      item.remove();
    }
  });
  // cardTemplate.querySelector('.popup__features').remove();
  // similarCardPlace.appendChild(popupFeatures);
  // popupFeatures.insertAdjacentHTML('afterbegin','');
  similarCardPlace.appendChild(cardTemplate);
});
console.log(popupFeatures)
