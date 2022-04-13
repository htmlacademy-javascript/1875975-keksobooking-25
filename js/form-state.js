import {priceSlider} from './slider.js';

const adForm = document.querySelector('.ad-form');
const adFormFieldset = adForm.querySelectorAll('.ad-form__element');
const mapForm = document.querySelector('.map__filters');
const mapFilters = mapForm.querySelectorAll('.map__filter, .map__features');

const getDisableForm = () => {
  adForm.classList.add('.ad-form--disabled');
  mapForm.classList.add('.ad-form--disabled');

  adFormFieldset.forEach((fieldset) => {
    fieldset.disabled = true;
  });

  mapFilters.forEach((filter) => {
    filter.disabled = true;
  });
  priceSlider.setAttribute('disabled', true);
};

const getActiveForm = () => {
  adForm.classList.remove('.ad-form--disabled');
  mapForm.classList.remove('.ad-form--disabled');

  adFormFieldset.forEach((fieldset) => {
    fieldset.disabled = false;
  });

  mapFilters.forEach((filter) => {
    filter.disabled = false;
  });
  priceSlider.removeAttribute('disabled', true);
};

export {getDisableForm, getActiveForm};
