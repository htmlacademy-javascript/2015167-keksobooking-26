import { doFormsDisabled, doFormsEnabled } from './form.js';
// import { renderCards } from './popup.js';
import {errorMessage, successMessage, showAlert, } from './util.js';
import {getCards} from './filter.js';
const getData = () => {
  doFormsDisabled();
  fetch ('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((cards) => {getCards(cards);})
    // .then((cards) => {
    //   renderCards(cards);
    // })
    .then(() => {
      doFormsEnabled();
    })
    .catch(() => {
      showAlert('Не удалось получить данные с сервера');
    }
    );
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


