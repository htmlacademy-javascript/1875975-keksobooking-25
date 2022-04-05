// import {createAds} from './data.js';
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
// const cardList = [];
const TypesCard = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const createPopup = (source) => {

  const cardElement = cardTemplate.cloneNode(true);
  const {title, addres, price, type, rooms, guests, checkin, checkout, features, description, photos} = source.offer;

  cardElement.querySelector('.popup__title').textContent = title;
  cardElement.querySelector('.popup__text--address').textContent = addres;
  cardElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = TypesCard[type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  const featuresList = cardElement.querySelectorAll('.popup__feature');
  const createFeature = () => {
    featuresList.forEach((element) => {
      const isNecessary = features.some(
        (feature) => element.classList.contains(`popup__feature--${feature}`),
      );
      if(!isNecessary) {
        element.remove();
      }
    });
};

  cardElement.querySelector('.popup__description').textContent = description;

  const photoList = cardElement.querySelector('.popup__photos');
  const photoTemplate = photoList.querySelector('.popup__photo');
  photos.forEach((photo) => {
    const newPhoto = photoTemplate.cloneNode(true);
    newPhoto.src = photo;
    photoList.append(newPhoto);
  });
  photoTemplate.remove();

  cardElement.querySelector('.popup__avatar').src = source.author.avatar;

  const checkContent= (key, element) => {
    if (typeof key === 'undefined') {
      element.hidden = true;
    }
  };

  checkContent(description, cardElement.querySelector('.popup__description'));
  checkContent(features, featuresList);
  checkContent(photos, photoList);

  if (typeof features === 'undefined') {
    featuresList.hidden = true;
  } else {
    createFeature();
  }

  return cardElement;
};

// const similarCards = createAds();
// similarCards.forEach((ad) => {
//   const newPopup = createPopup(ad);
//   cardList.push(newPopup);
// });
export {createPopup};
