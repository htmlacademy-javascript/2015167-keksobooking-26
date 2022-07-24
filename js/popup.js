import { doFormsEnabled } from './form.js';

const buttonReset = document.querySelector('.ad-form__reset');
const inputAdress = document.querySelector('#address');
const similarTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createCustomPopup = (card) => {
  const cardTemplate = similarTemplate.cloneNode(true);
  cardTemplate.querySelector('.popup__title').textContent = card.offer.title;
  cardTemplate.querySelector('.popup__text--address').textContent = card.offer.adress;
  cardTemplate.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  let popupType;
  switch (card.offer.type ) {
    case 'bungalow':
      popupType = 'Бунгало';
      break;
    case 'house':
      popupType = 'Дом';
      break;
    case 'palace':
      popupType = 'Дворец';
      break;
    case 'hotel':
      popupType = 'Отель';
      break;
    default:
      popupType = 'Квартира';
  }

  cardTemplate.querySelector('.popup__type').textContent = popupType;
  cardTemplate.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  const features = card.offer.features;
  const popupFeatures = cardTemplate.querySelector('.popup__features');
  const popupFeature = popupFeatures.querySelectorAll('.popup__feature');
  if (!features) {
    popupFeatures.remove();
  } else {
    popupFeature.forEach((item) => {
      const isNecessary = features.some(
        (feature) => item.classList.contains(`popup__feature--${feature}`)
      );
      if (!isNecessary) {
        item.remove();
      }
    });
  }

  cardTemplate.querySelector('.popup__description').textContent = card.offer.description;
  const photosContainer = cardTemplate.querySelector('.popup__photos');
  const photo = photosContainer.querySelector('.popup__photo');
  const images = card.offer.photos;
  if (!images) {
    photo.remove();
  } else {
    photo.remove();
    for (let i = 0; i < card.offer.photos.length; i++) {
      const image = document.createElement('img');
      image.classList.add('.popup__photo');
      image.src = card.offer.photos[i];
      image.width = 45;
      image.height = 40;
      image.alt = 'Фотография жилья';
      photosContainer.appendChild(image);
    }}

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
  const validationCards = [
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
      validationCards[i].remove();
    }
  }
  return cardTemplate;
};

const map = L.map('map')
  .on('load', () => {
    doFormsEnabled();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

mainPinMarker.addTo(map);

const markerGroup = L.layerGroup().addTo(map);
const createMarker = (card) => {
  const {lat, lng} = card.location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(createCustomPopup(card));
};

const renderCards = (cards) => {
  const qualityCards = 10;
  markerGroup.clearLayers();

  cards
    .slice(0, qualityCards)
    .forEach((card) => {
      createMarker(card);
    });
};

const resetPhotos = () => {
  if (document.querySelector('.ad-form-header__image')) {
    document.querySelector('.ad-form-header__image').src = 'img/muffin-grey.svg';
  }
  if (document.querySelector('.ad-form__photo-image')) {
    document.querySelector('.ad-form__photo-image').remove();
  }
};

const resetForms = (cards) => {
  buttonReset.addEventListener('click', () => {
    document.querySelector('.map__filters').reset();
    renderCards(cards);
    resetPhotos();
    mainPinMarker.setLatLng({
      lat: 35.6895,
      lng: 139.692,
    });
    map.setView({
      lat: 35.6895,
      lng: 139.692,
    }, 12);
  });
};

inputAdress.value = '35.6895 139.692';
mainPinMarker.on('moveend', (evt) => {
  const address = evt.target.getLatLng();
  inputAdress.value = `${address.lat.toFixed(5)} ${address.lng.toFixed(5)}`;
});

export {buttonReset, renderCards, resetForms, resetPhotos};
