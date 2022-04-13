const DEFAULT_TYPE = 'any';

const PriceRange = {
  LOW_PRICE: 10000,
  MIDDLE_PRICE: 50000,
  // HIGH_PRICE: 100000,
};

const PriceTypes = {
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
};

const typeControl = document.querySelector('#housing-type');
const priceControl = document.querySelector('#housing-price');
const roomsControl = document.querySelector('#housing-rooms');
const guestsControl = document.querySelector('#housing-guests');
const featuresControl = document.querySelector('#housing-features');

const filterType = (ad) => typeControl.value === ad.offer.type || typeControl.value === DEFAULT_TYPE;

const filterRooms = (ad) => +roomsControl.value === ad.offer.rooms || roomsControl.value === DEFAULT_TYPE;

const filterGuests = (ad) => +guestsControl.value === ad.offer.rooms || guestsControl.value === DEFAULT_TYPE;

const filterPrice = (ad) => {
  switch (priceControl.value) {
    case PriceTypes.LOW:
      return ad.offer.price < PriceRange.LOW_PRICE;
    case PriceTypes.MIDDLE:
      return ad.offer.price >= PriceRange.LOW_PRICE && ad.offer.price <= PriceRange.MIDDLE_PRICE;
    case PriceTypes.HIGH:
      return ad.offer.price > PriceRange.MIDDLE_PRICE;

    default : return true;
  }
};

const filterFeatures = (ad) => {
  const currentFeatures = Array. from(featuresControl.querySelectorAll('.map__checkbox:checked'))
    .map((element) => element.value);
  // const featuresChekedInput = featuresControl.querySelectorAll('.map__checkbox:checked');
  // featuresChekedInput.forEach((element) => currentFeatures.push(element.value));

  if (ad.offer.features) {
    return currentFeatures.every((feature) => ad.offer.features.includes(feature));
  }
  return currentFeatures.length === 0;
};

const filterData = (data) => data.filter((ad) => filterType(ad)
  && filterRooms(ad)
  && filterGuests(ad)
  && filterPrice(ad)
  && filterFeatures(ad)
);

export {filterData};
