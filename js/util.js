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

// const showAlert = (message) => {
//   const alertContainer = document.createElement('div');
//   alertContainer.style.zIndex = 100;
//   alertContainer.style.position = 'absolute';
//   alertContainer.style.top = '52px';
//   alertContainer.style.right = '50%';
//   alertContainer.style.transform = 'translateX(50%)';
//   alertContainer.style.width = '800px';
//   alertContainer.style.padding = '12px';
//   alertContainer.style.textAlign = 'center';
//   alertContainer.style.fontSize = '16px';
//   alertContainer.style.color = '#ffffff';
//   alertContainer.style.textTransform = 'uppercase';
//   alertContainer.style.borderRadius = '10px';
//   alertContainer.style.backgroundColor = '#ff5635';

//   alertContainer.textContent = message;

//   document.body.append(alertContainer);

//   setTimeout(() => {
//     alertContainer.remove();
//   }, 4000);
// };


export {getRandomInteger, getRandomNumberFloating, getRandomArrayElement, getRandomArray};
