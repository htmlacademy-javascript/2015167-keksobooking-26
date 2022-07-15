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
  // console.log(evt.target.value)
  // console.log(card.offer.features)
  // console.log(filterWifi.value)
});

const setType = (card) => {
  if (filterType.value === 'any' || filterType.value === card.offer.type) {
    return true;
  }
  return false;
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
  return false;
};
const setRooms = (card) => {
  if (card.offer.rooms === +filterRooms.value || filterRooms.value === 'any') {
    return true;
  }
  return false;
};
const setGuests = (card) => {
  if (filterGuests.value === 'any') {
    return true;
  }
  if (+filterGuests.value === card.offer.guests) {
    return true;
  }
  return false;
};
const setWifi = (card) => {
  const value = filterWifi.value;
  // console.log(value)
  if (!filterWifi.checked) {
    return true;
  }
  if (card.offer.features.includes(`${value}`)) {
    return true;
  }
  return false;
};
const setDishwasher = (card) => {
  if (!filterDishwasher.checked) {
    return true;
  }
  if (!card.offer.features) {
    return false
  }
  return card.offer.features.includes(filterDishwasher.value);
};
const setParking = (card) => {
  if (!filterParking.checked) {
    return true;
  }
  if (card.offer.features.includes(filterParking.value)) {
    return true;
  }
  return false;
};
const setWasher = (card) => {
  if (!filterWasher.checked) {
    return true;
  }
  if (card.offer.features.includes(filterWasher.value)) {
    return true;
  }
  return false;
};
const setElevator = (card) => {
  if (!filterElevator.checked) {
    return true;
  }
  if (card.offer.features.includes(filterElevator.value)) {
    return true;
  }
  return false
};
const setConditioner = (card) => {
  if (!filterWifi.checked) {
    return true;
  }
  if (card.offer.features.includes(filterConditioner.value)) {
    return true;
  }
  return false;
};


const getCards = (cards) => {
  cards.filter((card) => {setDishwasher(card)
  console.log(setDishwasher(card))
})
  // renderCards(cards);
}

export {getCards};
