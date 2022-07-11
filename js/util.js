const ALERT_SHOW_TIME = 5000;

const success = document.querySelector('.success-template')
  .content
  .querySelector('.success');
const error = document.querySelector('.error-template')
  .content
  .querySelector('.error');
const body = document.querySelector('.body');
const isEscapeKey = (evt) => evt.key === 'Escape';
const buttonError = error.querySelector('.error__button');
const errorMessage = () => {
  const newError = error.cloneNode(true);
  body.appendChild(newError);
  document.addEventListener('click', () => {
    newError.remove();
  });
  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      newError.remove();
    }
  };
  document.addEventListener('keydown', onPopupEscKeydown);
  buttonError.querySelector('click', () => {
    newError.remove();
  });
};

const successMessage = () => {
  const newSuccess = success.cloneNode(true);
  body.appendChild(newSuccess);
  document.addEventListener('click', () => {
    newSuccess.remove();
  });
  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      newSuccess.remove();
    }
  };
  document.addEventListener('keydown', onPopupEscKeydown);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {errorMessage, successMessage, showAlert};
