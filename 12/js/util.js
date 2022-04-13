const getRandomNumber = (min, max) => {
  min = Math.abs(min);
  max = Math.abs(max);

  if (min > max) {
    throw new Error('Invalid range');
  }
  return (Math.random() * (max + 1 - min) + min);
};

const getRandomInteger = (min, max) => Math.floor(getRandomNumber(min,max));

const getRandomNumberFloating = (min, max, digits) => Number(getRandomNumber(min,max).toFixed(digits));

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomArray = (source) => {
  const randomLenght = getRandomInteger(1, source.length);
  const newArray = [];
  for (let i = 0; i < randomLenght; i++) {
    newArray.push(source[i]);
  }
  return newArray;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example
function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

export {getRandomInteger, getRandomNumberFloating, getRandomArrayElement, getRandomArray, isEscapeKey, debounce};
