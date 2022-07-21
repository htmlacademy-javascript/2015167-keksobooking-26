
const formFilters = document.querySelector('.map__filters');
const filterType = formFilters.querySelector('.map__filter--type');
const filterPrice = formFilters.querySelector('.map__filter--price');
const filterRooms = formFilters.querySelector('.map__filter--rooms');
const filterGuests = formFilters.querySelector('.map__filter--guests');

const getType = (card) => filterType.value === 'any' || filterType.value === card.offer.type;

const getPrice = (card) => {
  const MIN = 10000;
  const MAX = 50000;
  if (filterPrice.value === 'any') {
    return true;
  }
  if (filterPrice.value === 'middle') {
    if (card.offer.price > MIN && card.offer.price < MAX) {
      return true;
    }
    return false;
  }
  if (filterPrice.value === 'low') {
    if (card.offer.price < MIN) {
      return true;
    }
    return false;
  }
  if (filterPrice.value === 'high') {
    if (card.offer.price > MAX) {
      return true;
    }
    return false;
  }
};

const getRooms = (card) => card.offer.rooms === +filterRooms.value || filterRooms.value === 'any';

const getGuests = (card) => filterGuests.value === 'any' || +filterGuests.value === card.offer.guests;

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
