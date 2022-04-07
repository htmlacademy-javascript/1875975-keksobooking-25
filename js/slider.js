import {pristine, price, type, MIN_PRICE, MAX_PRICE} from './form-validator.js';

const form = document.querySelector('.ad-form');
const priceSlider = form.querySelector('.ad-form__slider');


noUiSlider.create(priceSlider, {
  range: {
    min: MIN_PRICE[type.value],
    max: MAX_PRICE,
  },
  start: MIN_PRICE[type.value],
  step: 50,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => parseFloat(value),
  },
});

priceSlider.noUiSlider.on('slide', () => {
  price.value = priceSlider.noUiSlider.get();
  pristine.validate(price);
});

price.addEventListener('change', () => {
  priceSlider.noUiSlider.set(price.value);
});

type.addEventListener('change', () => {
  priceSlider.noUiSlider.updateOptions ({
    range: {
      min: MIN_PRICE[type.value],
      max: MAX_PRICE,
    },
  });
});

export {priceSlider};
