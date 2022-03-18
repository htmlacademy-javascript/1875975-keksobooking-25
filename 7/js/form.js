const adForm = document.querySelector('.ad-form');
const adFormFieldset = adForm.querySelectorAll('.ad-form__element');
const mapForm = document.querySelector('.map__filters');
const mapFilters = mapForm.querySelectorAll('.map__filter, .map__features');

const getDisableForm = () => {
  adForm.classList.add('.ad-form--disabled');
  mapForm.classList.add('.ad-form--disabled');

  // for (let i = 0; i < adFormFieldset.length; i++ ) {
  //   adFormFieldset[i].disabled = true;
  // }

  // for (let i = 0; i < mapFilters.length; i++ ) {
  //   mapFilters[i].disabled = true;
  // }

  adFormFieldset.forEach((fieldset) => {
    fieldset.disabled = true;
  });

  mapFilters.forEach((filter) => {
    filter.disabled = true;
  });
};

const getActiveForm = () => {
  adForm.classList.remove('.ad-form--disabled');
  mapForm.classList.remove('.ad-form--disabled');

  // for (let i = 0; i < adFormFieldset.length; i++ ) {
  //   adFormFieldset[i].disabled = false;
  // }

  // for (let i = 0; i < mapFilters.length; i++ ) {
  //   mapFilters[i].disabled = false;
  // }

  adFormFieldset.forEach((fieldset) => {
    fieldset.disabled = false;
  });

  mapFilters.forEach((filter) => {
    filter.disabled = false;
  });
};

export {getDisableForm, getActiveForm};
