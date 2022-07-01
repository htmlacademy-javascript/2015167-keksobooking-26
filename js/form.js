const formPublic = document.querySelector ('.ad-form');
const formFind = document.querySelector ('.map__filters');


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

doFormsDisabled();


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

doFormsEnabled();

const onButtonSubmit = formPublic.querySelector('.ad-form__submit');
const pristine = new Pristine(formPublic, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text'
});
const roomNumber = formPublic.querySelector('#room_number');
const guestNumber = formPublic.querySelector('#capacity');

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
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  } else {
    onButtonSubmit.disabled = true;
  }
});
