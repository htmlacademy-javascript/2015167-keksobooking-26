import {renderCards} from './popup.js';
import {errorMessage, successMessage, showAlert} from './util.js';
const getData = () => {
  fetch ('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((cards) => {
      renderCards(cards);
    })
    .catch(() => {
      showAlert('Не удалось получить данные с сервера');
    });
};

const sendData = (formData) => {
  fetch(
    'https://26.javascript.pages.acadesmy/keksobooking',
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


