const formFilters = document.querySelector('.map__filters');
const filterType = formFilters.querySelector('.map__filter--type');
const filterPrice = formFilters.querySelector('.map__filter--price');
const filterRooms = formFilters.querySelector('.map__filter--rooms');
const filterGuests = formFilters.querySelector('.map__filter--guests');
const MIN = 10000;
const MAX = 50000;
const ANY = 'any';
const MIDDLE = 'middle';
const LOW = 'low';
const HIGH = 'high';

const getType = (card) => filterType.value === ANY || filterType.value === card.offer.type;
const getPrice = (card) => {
  if (filterPrice.value === ANY) {
    return true;
  }
  if (filterPrice.value === MIDDLE) {
    return card.offer.price > MIN && card.offer.price < MAX;
  }
  if (filterPrice.value === LOW) {
    return card.offer.price < MIN;
  }
  if (filterPrice.value === HIGH) {
    return card.offer.price > MAX;
  }
};

const getRooms = (card) => card.offer.rooms === +filterRooms.value || filterRooms.value === ANY;
const getGuests = (card) => filterGuests.value === ANY || +filterGuests.value === card.offer.guests;
const getFeatures = (card) => {
  const checkedsInputs = Array.from(formFilters.querySelectorAll('input[type="checkbox"]:checked'));

  if (card.offer.features) {
    return checkedsInputs.every((el) => card.offer.features.includes(el.value));
  }

  return false;
};

const setTypeClick = (cards, callback) => {
  formFilters.addEventListener('change', () => {
    const cardsCopy = cards.slice();
    const filterCards = cardsCopy.filter((card) => {
      if (getType(card) && getPrice(card) && getRooms(card) && getGuests(card) && getFeatures(card)) {
        return true;
      }
    });
    callback(filterCards);
  });

};

export {setTypeClick};
