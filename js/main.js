
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_AD_COUNT = 10;

const getRandomNumber = (min, max) => {
  min = Math.abs(min);
  max = Math.abs(max);

  if (min > max) {
    throw new Error('Invalid range');
  }
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomNumberFloating = (min, max, digits) => {
  min = Math.abs(min);
  max = Math.abs(max);

  if (min > max) {
    throw new Error('Invalid range');
  }
  return Number((Math.random() * (max + 1 - min) + min).toFixed(digits));
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getRandomArray = (source) => {
  const randomLenght = getRandomNumber(1, source.length);
  const newArray = [];
  for (let i = 0; i < randomLenght; i++) {
    newArray.push(source[i]);
  }
  return newArray;
};

const createAuthor = (userId) => ({
  avatar: `img/avatars/user${userId}.png`,
});

const createLocation = () => ({
  lat: getRandomNumberFloating(35.65000, 35.70000, 5),
  lng: getRandomNumberFloating(139.70000, 139.80000, 5),
});

const createOffer = () => ({
  title: 'Уютная студия со стиральной машинкой',
  addres: '',
  price: getRandomNumber(1, 150000),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomNumber(1, 10),
  guests: getRandomNumber(1, 20),
  checkin: getRandomArrayElement(TIME),
  checkout: getRandomArrayElement(TIME),
  features: getRandomArray(FEATURES),
  description: 'Недавно построенные апартаменты, расположены в Синдзюку. Квартира маленькая, но с большими окнами и высоким потолком',
  photos: getRandomArray(PHOTOS),
});

const createAd = (userId) => {
  const result = {
    author: createAuthor(userId),
    offer: createOffer(),
    location: createLocation(),
  };
  result.offer.addres = `${result.location.lat}, ${result.location.lng}`;
  return result;
};

const createAds = () => {
  const ads = [];
  for (let i = 1; i <= SIMILAR_AD_COUNT; i++) {
    const userId = (i < 10) ? `0${i}` : `${i}`;
    ads.push(createAd(userId));
  }
  return ads;
};

createAds();
