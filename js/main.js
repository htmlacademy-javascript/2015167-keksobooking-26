import './popup.js';
import './photo.js';
import './form.js';
import './slider.js';
import {getData} from './api.js';
import {renderCards} from './popup.js';
import {setTypeClick} from './filter.js';
import {debounce} from './util.js';

const RENDER_DELAY = 500;

getData((cards) => {
  renderCards(cards);
  setTypeClick(cards, debounce(renderCards, RENDER_DELAY));
});

