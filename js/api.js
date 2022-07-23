import { doFormsDisabled, doFormsEnabled } from './form.js';
import {errorMessage, successMessage, showAlert, } from './util.js';

const getData = (onSuccess) => {
  doFormsDisabled();
  fetch ('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((cards) => onSuccess(cards))
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
