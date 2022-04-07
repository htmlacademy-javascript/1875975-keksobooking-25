import {pristine, type, MIN_PRICE} from './form-validator.js';
import {sendData} from './api.js';
import {priceSlider} from './slider.js';
import {getSendMessages, SUCCESS, ERROR} from './messages.js';
import {resetMap} from './map.js';

const form = document.querySelector('.ad-form');
const submitButton = document.querySelector('.ad-form__submit');
const resetButton = document.querySelector('.ad-form__reset');


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';

};

const resetForm = () => {
  form.reset();
  pristine.reset();
  priceSlider.noUiSlider.updateOptions({
    start: MIN_PRICE[type.value],
  });
  resetMap();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

const successSendForm = () => {
  resetForm();
  getSendMessages(SUCCESS);
  unblockSubmitButton();
};

const failSendForm = () => {
  getSendMessages(ERROR);
  unblockSubmitButton();
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
    sendData(
      successSendForm,
      failSendForm,
      formData);
  }
});
