import {createRequiredQuantityObjects} from './data.js';

const similarCardPlace = document.querySelector('#map-canvas');
const similarTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const cards = createRequiredQuantityObjects();


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
  const popupFeatures = cardTemplate.querySelector('.popup__features');
  const popupFeature = popupFeatures.querySelectorAll('.popup__feature');

  popupFeature.forEach((item) => {
    const isNecessary = features.some(
      (feature) => item.classList.contains(`popup__feature--${feature}`)
    );
    if (!isNecessary) {
      item.remove();
    }
  });
  cardTemplate.querySelector('.popup__description').textContent = card.offer.description;
  const photosContainer = cardTemplate.querySelector('.popup__photos');
  const photo = photosContainer.querySelector('.popup__photo');
  photo.remove();
  for (let i = 0; i < card.offer.photos.length; i++) {
    const image = document.createElement('img');
    image.classList.add('.popup__photo');
    image.src = card.offer.photos[i];
    image.width = 45;
    image.height = 40;
    image.alt = 'Фотография жилья';
    photosContainer.appendChild(image);
  }

  const avatar = cardTemplate.querySelector('.popup__avatar');
  avatar.src = card.author.avatar;

  const validationData = [
    card.offer.title,
    card.offer.adress,
    card.offer.price,
    popupType,
    card.offer.rooms,
    card.offer.guests,
    card.offer.checkin,
    card.offer.checkout,
    card.offer.features,
    card.offer.description,
    card.offer.photos,
    card.author.avatar,
  ];
  const validationCard = [
    cardTemplate.querySelector('.popup__title'),
    cardTemplate.querySelector('.popup__text--address'),
    cardTemplate.querySelector('.popup__text--price'),
    cardTemplate.querySelector('.popup__type'),
    cardTemplate.querySelector('.popup__text--capacity'),
    cardTemplate.querySelector('.popup__text--capacity'),
    cardTemplate.querySelector('.popup__text--time'),
    cardTemplate.querySelector('.popup__text--time'),
    popupFeatures,
    cardTemplate.querySelector('.popup__description'),
    photosContainer,
    avatar,
  ];
  for (let i = 0; i < validationData.length; i++) {
    if (!validationData[i]) {
      validationCard[i].remove();
    }
  }

  similarCardPlace.appendChild(cardTemplate);
});
