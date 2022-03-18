const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error-text',
});

const title = form.querySelector('#title');
const validateTitle = (value) => value.length >= 30 && value.length <= 100;
pristine.addValidator (
  title,
  validateTitle,
  'От 30 до 100 символов', 2, true,
);

const price = form.querySelector('#price');
const validatePrice = (value) => value > 0 && value <= 100000;
pristine.addValidator (
  price,
  validatePrice,
  'Максимальная цена 100 000 ₽/ночь',
);

const rooms = form.querySelector('#room_number');
const guests = form.querySelector('#capacity');
const roomsOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const validateRoomsGuests = () => roomsOption[rooms.value].includes(guests.value);

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

pristine.addValidator(guests, validateRoomsGuests, getRoomsGuestsErrorMessage);

form.addEventListener('submit', (evt) => {

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
