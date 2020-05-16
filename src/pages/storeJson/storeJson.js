import React from 'react';
import ReactJson from 'react-json-view';

import productsJson from '../../data/products.json';
import donationsJson from '../../data/donations.json';

const ProductsJson = () => <ReactJson src={productsJson} />;
const DonationsJson = () => <ReactJson src={donationsJson} />;

export {
  ProductsJson,
  DonationsJson,
};
