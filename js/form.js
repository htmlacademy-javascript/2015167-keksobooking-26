import { sendData } from './api.js';
import { resetPhotos } from './popup.js';
import { showErrorMessage} from './util.js';

const formPublic = document.querySelector ('.ad-form');
const formFind = document.querySelector ('.map__filters');
const buttonSubmit = formPublic.querySelector('.ad-form__submit');
const roomNumber = formPublic.querySelector('#room_number');
const guestNumber = formPublic.querySelector('#capacity');
const selectType = formPublic.querySelector('.type');
const selectTypeInput = formPublic.querySelector('.ad-form__value-price');
const selectTimeIn = formPublic.querySelector('.timein');
const selectTimeOut = formPublic.querySelector('.timeout');
const RuleSelectType = {
  BUNGALOW: '0',
  FLAT: '1000',
  HOTEL: '3000',
  HOUSE: '5000',
  PALACE: '10000'
};


const doFormPublicDisabled = () => {
  formPublic.classList.add('ad-form--disabled');
  formPublic.childNodes.disabled = true;
  for (let i = 0; i < formPublic.childNodes.length; i++) {
    formPublic.childNodes[i].disabled = true;
  }
};

const doFormFindDisabled = () => {
  formFind.classList.add('ad-form--disabled');
  for (let i = 0; i < formFind.childNodes.length; i++) {
    formFind.childNodes[i].disabled = true;
  }
};

const doFormsDisabled = () =>{
  doFormPublicDisabled();
  doFormFindDisabled();
};

const doFormPublicEnabled = () => {
  formPublic.classList.remove('ad-form--disabled');
  for (let i = 0; i < formPublic.childNodes.length; i++) {
    formPublic.childNodes[i].disabled = false;
  }
};

const doFormFindEnabled = () => {
  formFind.classList.remove('ad-form--disabled');
  for (let i = 0; i < formFind.childNodes.length; i++) {
    formFind.childNodes[i].disabled = false;
  }
};

const doFormsEnabled = () =>{
  doFormPublicEnabled();
  doFormFindEnabled();
};

const pristine = new Pristine(formPublic, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text'
});

pristine.addValidator(roomNumber, () => {
  if (roomNumber.value >=guestNumber.value){
    return true;
  }
  return false;
}, 'Измените количество комнат', 1, false);

pristine.addValidator(guestNumber, () => {
  if (guestNumber.value === '0'){
    return roomNumber.value === guestNumber.value;
  }
  return true;
}, 'Не для гостей только 100 комнат', 1, false);


formPublic.addEventListener('submit', (evt)=>{
  const formData = new FormData(evt.target);
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    buttonSubmit.disabled = true;
    sendData(formData);
    formPublic.reset();
    resetPhotos();
  } else {
    showErrorMessage();
  }
});


const validateTypeInput = () => +RuleSelectType[selectType.value] <= +selectTypeInput.value;
const validateTypeInputMessage = () => `Минимальная цена ${RuleSelectType[selectType.value]} руб`;
pristine.addValidator(selectTypeInput, validateTypeInput, validateTypeInputMessage);

selectType.addEventListener('change', ()=> {
  selectTypeInput.placeholder = RuleSelectType[selectType.value];
});

selectTimeIn.addEventListener('change', () => {
  selectTimeOut.value = selectTimeIn.value;
});

selectTimeOut.addEventListener('change', () => {
  selectTimeIn.value = selectTimeOut.value;
});

export {doFormsEnabled, doFormsDisabled};
