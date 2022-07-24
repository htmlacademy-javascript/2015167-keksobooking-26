import { buttonReset } from './popup.js';

const sliderElement = document.querySelector('.ad-form__slider');
const inputPrice = document.querySelector('.ad-form__value-price');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  inputPrice.value = sliderElement.noUiSlider.get();
});

inputPrice.addEventListener('input', () => {
  sliderElement.noUiSlider.updateOptions(
    {
      start: `${inputPrice.value}`
    }
  );
});

buttonReset.addEventListener('click', () => {
  sliderElement.noUiSlider.set(1000);
});
