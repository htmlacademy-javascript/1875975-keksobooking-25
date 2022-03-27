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

export {getRandomInteger, getRandomNumberFloating, getRandomArrayElement, getRandomArray};
