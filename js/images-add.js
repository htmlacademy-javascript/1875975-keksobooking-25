const IMAGE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_AVATAR_SRC = 'img/muffin-grey.svg';

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoChooser = document.querySelector('.ad-form__upload input[type=file]');
const photoPreview = document.querySelector('.ad-form__photo');


avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = IMAGE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});

photoChooser.addEventListener('change', () => {
  const photo = photoPreview.querySelector('img');
  const file = photoChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = IMAGE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const newPhoto = document.createElement('img');
    newPhoto.src = URL.createObjectURL(file);
    newPhoto.width = '70';
    newPhoto.height = '70';

    if (!photo) {
      photoPreview.append(newPhoto);
    }
    else {
      photo.src = URL.createObjectURL(file);
    }
  }
});

const resetImage = () => {
  avatarPreview.src = DEFAULT_AVATAR_SRC;
  if (photoPreview.querySelector('img')) {
    photoPreview.querySelector('img').remove();
  }
};

export {resetImage};
