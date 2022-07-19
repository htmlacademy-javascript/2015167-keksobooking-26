const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('.ad-form-header__input');
const previewAvatar = document.querySelector('.ad-form-header__image');

fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});


const fileChooserPhoto = document.querySelector('.ad-form__input');
const previewPhoto = document.querySelector('.ad-form__photo');

fileChooserPhoto.addEventListener('change', () => {
  const file = fileChooserPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const image = document.createElement('img');
    image.classList.add('.ad-form__photo-image');
    image.src = URL.createObjectURL(file);
    image.alt = 'Изображение объявления.';
    image.width = '70';
    image.height = '70';
    previewPhoto.appendChild(image);
  }
});
