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


