import {renderCards} from './popup.js';
import {errorMessage, successMessage, showAlert} from './util.js';
const qualityCards = 25;
const getData = () => {
  fetch ('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((cards) => {
      renderCards(cards.slice(0, qualityCards));
    })
    .catch(() => {
      showAlert('Не удалось получить данные с сервера');
    });
};

const sendData = (formData) => {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        successMessage();
      } else {
        errorMessage();
      }
    })
    .catch(() => {
      errorMessage();
    });
};

export {getData, sendData};


