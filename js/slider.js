const rangeSlider = document.getElementById('slider-range');
const inputValue = document.querySelector('.ad-form__value-price');
noUiSlider.create(rangeSlider, {
  start: [5000],
  range: {
    'min': [0],
    'max': [100000]
  }
});

// console.log(typeof(toggleRange))
// console.log(typeof(inputValue.value))
inputValue.addEventListener('input', () =>{
  // let toggleRange = rangeSlider.querySelector('.noUi-handle').ariaValueNow;
  rangeSlider.querySelector('.noUi-handle').ariaValueText = inputValue.value ;
});


// const rangeSliderValueElement = document.getElementById('.ad-form__value-price');

// rangeSlider.noUiSlider.on('update', (values, handle) => {
//   rangeSliderValueElement.innerHTML = values[handle];
// });
