import { getData } from './api.js';
import { renderCards } from './popup.js';

const formFilters = document.querySelector('.map__filters');
const filterType = formFilters.querySelector('.map__filter--type');
const filterPrice = formFilters.querySelector('.map__filter--price');
const filterRooms = formFilters.querySelector('.map__filter--rooms');
const filterGuests = formFilters.querySelector('.map__filter--guests');
const filterWifi = formFilters.querySelector('.map__checkbox--wifi');
const filterDishwasher = formFilters.querySelector('.map__checkbox--dishwasher');
const filterParking = formFilters.querySelector('.map__checkbox--parking');
const filterWasher = formFilters.querySelector('.map__checkbox--washer');
const filterElevator = formFilters.querySelector('.map__checkbox--elevator');
const filterConditioner = formFilters.querySelector('.map__checkbox--conditioner');


// console.log(getCards());

formFilters.addEventListener('change', () => {
  getData();
});

const setType = (card) => {
  if (filterType.value === card.offer.type || filterType.value === 'any') {
    return true;
  }
};
const setPrice = (card) => {
  const min = 10000;
  const max = 50000;
  if (filterPrice.value === 'any') {
    return true;
  }
  if (filterPrice.value === 'middle') {
    if (card.offer.price > min && card.offer.price < max) {
      return true;
    }
  }
  if (filterPrice.value === 'low') {
    if (card.offer.price < min) {
      return true;
    }
  }
  if (filterPrice.value === 'high') {
    if (card.offer.price > max) {
      return true;
    }
  }

};
const setRooms = (card) => {
  if (card.offer.rooms === +filterRooms.value || filterRooms.value === 'any') {
    return true;
  }

};
const setGuests = (card) => {
  if (filterGuests.value === 'any') {
    return true;
  } else if (filterGuests.value === card.offer.guests) {
    return true;
  }

};
const setWifi = (card) => {
  if (!filterWifi.checked) {
    return true;
  } else {
    return card.offer.features.includes(filterWifi.value);
  }

};
const setDishwasher = (card) => {
  if (!filterDishwasher.checked) {
    return true;
  } else {
    return card.offer.features.includes(filterDishwasher.value);
  }
};
const setParking = (card) => {
  if (!filterParking.checked) {
    return true;
  } else {
    return card.offer.features.includes(filterParking.value);
  }

};
const setWasher = (card) => {
  if (!filterWasher.checked) {
    return true;
  } else {
    return card.offer.features.includes(filterWasher.value);
  }
};
const setElevator = (card) => {
  if (!filterElevator.checked) {
    return true;
  } else {
    return card.offer.features.includes(filterElevator.value);
  }

};
const setConditioner = (card) => {
  if (!filterWifi.checked) {
    return true;
  } else {
    return card.offer.features.includes(filterConditioner.value);
  }
};

const filterTrue = (card) => {
  if (setType(card) && setPrice(card) && setRooms(card) && setGuests(card) && setWifi(card) && setDishwasher(card) && setParking(card) && setWasher(card) && setElevator(card) && setConditioner(card)) {
    return true;
  }
};

const getCards = (cards) => {
  const filterData = cards.slice();
  const renderData = [];
  filterData.forEach((item) => {
    console.log(filterTrue(item));
    if(filterTrue(item)) {
      renderData.push(item);
    }
  }
  );
  renderCards(renderData);
};

export {getCards};
