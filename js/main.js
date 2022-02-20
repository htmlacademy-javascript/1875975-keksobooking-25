function getRandomNumber(min, max) {
  min = Math.abs(min);
  max = Math.abs(max);

  if (min > max) {
    throw new Error('Invalid range');
  }
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getRandomNumberFloating(min, max, digits) {
  min = Math.abs(min);
  max = Math.abs(max);

  if (min > max) {
    throw new Error('Invalid range');
  }
  return Number((Math.random() * (max + 1 - min) + min).toFixed(digits));
}

getRandomNumber(23, 156);
getRandomNumberFloating(3, 56.2, 5);
