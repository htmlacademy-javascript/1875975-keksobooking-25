const form = document.querySelector('.ad-form');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const priceSlider = form.querySelector('.ad-form__slider');
const type = form.querySelector('#type');
const time = form.querySelector('.ad-form__element--time');
const checkIn = form.querySelector('#timein');
const checkOut = form.querySelector('#timeout');
const rooms = form.querySelector('#room_number');
const guests = form.querySelector('#capacity');
const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const MAX_PRICE = 100000;

const ROOMS_OPTIONS = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error-text',
});

//Заголовок
const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator (
  title,
  validateTitle,
  'От 30 до 100 символов', 2, true,
);

// Цена и тип жилья
const validatePrice = (value) => value >= MIN_PRICE[type.value] && value <= MAX_PRICE;
const getPriceErrorMessage = () => `Цена от ${MIN_PRICE[type.value]} до ${MAX_PRICE} ₽/ночь`;

pristine.addValidator (
  price,
  validatePrice,
  getPriceErrorMessage
);

const onTypeChange = () => {
  price.placeholder = MIN_PRICE[type.value];
  price.min = MIN_PRICE[type.value];
  priceSlider.noUiSlider.updateOptions ({
    range: {
      min: MIN_PRICE[type.value],
      max: MAX_PRICE,
    },
    // start: MIN_PRICE[type.value],
  });
  pristine.validate(price);
};

type.addEventListener('change', () => {
  onTypeChange();
});

//Слайдер

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

// Время заезда и выезда

const onTimeChange = (evt) => {
  checkIn.value = evt.target.value;
  checkOut.value = evt.target.value;
};

time.addEventListener('change', (evt) => {
  onTimeChange(evt);
});

// Количество комнат и мест
const validateRoomsGuests = () => ROOMS_OPTIONS[rooms.value].includes(guests.value);

const getRoomsGuestsErrorMessage = () => {
  switch (rooms.value) {
    case '1':
      return 'Не больше одного гостя';
    case '2':
      return 'Не больше двух гостей';
    case '3':
      return 'Не больше трёх гостей';
    case '100':
      return 'Не для гостей';
  }
};

rooms.addEventListener('change', () => {
  pristine.validate(guests);
});

pristine.addValidator(
  guests,
  validateRoomsGuests,
  getRoomsGuestsErrorMessage);

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
