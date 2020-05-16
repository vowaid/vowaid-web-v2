import storeItems from '../data/products.json';

let storeItemTypes = new Set();

storeItems.forEach((storeItem) => {
  storeItemTypes.add(storeItem.type);
});

storeItemTypes = [...storeItemTypes];

export default storeItems;

export {
  storeItemTypes,
};
