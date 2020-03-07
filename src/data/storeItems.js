const storeItems = [
  // Donations
  {
    id: '0025D',
    images: [],
    type: 'donation',
    name: "Donate $25",
    price: "25.00",
    description: "$25 Donation to VOWAID Foundation",
  },
  {
    id: '0050D',
    images: [],
    type: 'donation',
    name: "Donate $50",
    price: "50.00",
    description: "$50 Donation to VOWAID Foundation",
  },
  {
    id: '0100D',
    images: [],
    type: 'donation',
    name: "Donate $100",
    price: "100.00",
    description: "$100 Donation to VOWAID Foundation",
  },
  {
    id: '0150D',
    images: [],
    type: 'donation',
    name: "Donate $150",
    price: "150.00",
    description: "$150 Donation to VOWAID Foundation",
  },
  {
    id: '0250D',
    images: [],
    type: 'donation',
    name: "Donate $250",
    price: "250.00",
    description: "$250 Donation to VOWAID Foundation",
  },

  // Coins
  {
    id: '2600C',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_1000/v1535165336/VOWAID/26XX-coin-squirrel.png',
      'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_1000/v1535165336/VOWAID/26XX-coin-skull.png',
    ],
    type: 'coin',
    name: "26XX SIGINT/EW Challenge Coin",
    price: "25.00",
    description: "Full color, 26XX Skull and Secret Squirrel",
  },

  // Pins
  {
    id: '2621P',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_fill,f_auto,h_1000/v1539732628/VOWAID/2621-pin.jpg',
    ],
    type: 'pin',
    name: "2621 Pin",
    price: "10.00",
    description: "2621 Pin",
  },
  {
    id: '2641P',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_1000/v1539732628/VOWAID/2641-pin.jpg',
    ],
    type: 'pin',
    name: "2641 Pin",
    price: "10.00",
    description: "2641 Pin",
  },
  {
    id: '2651P',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_fill,f_auto,h_1000/v1539732628/VOWAID/2651-pin.jpg',
    ],
    type: 'pin',
    name: "2651 Pin",
    price: "10.00",
    description: "2651 Pin",
  },
  {
    id: '0001P',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_1000/v1535440178/VOWAID/vowaid-pin.png',
    ],
    type: 'pin',
    name: "VOWAID Pin",
    price: "20.00",
    description: "White VOWAID Pin",
  },

  // Decal
  {
    id: '26XXD',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_1000/v1539732629/VOWAID/26XX-decal.jpg',
    ],
    type: 'decal',
    name: "26XX Decal",
    price: "10.00",
    description: "26XX Decal",
  },
  {
    id: '2651D',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_1000/v1539732628/VOWAID/2651-decal.jpg',
    ],
    type: 'decal',
    name: "2651 Decal",
    price: "10.00",
    description: "2651 Decal",
  },
  {
    id: '2602D',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_1000/v1548123160/VOWAID/2602-decal.jpg',
    ],
    type: 'decal',
    name: "2602 Decal",
    price: "10.00",
    description: "2602 Decal",
  },

  {
    id: '2629D',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_1000/v1548123160/VOWAID/2629-decal.jpg',
    ],
    type: 'decal',
    name: "2629 Decal",
    price: "10.00",
    description: "2629 Decal",
  },
  {
    id: '267XD',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_1000/v1548123159/VOWAID/267X-decal.jpg',
    ],
    type: 'decal',
    name: "267X Decal",
    price: "10.00",
    description: "267X Decal",
  },
  {
    id: '2691D',
    images: [
      'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_1000/v1548123159/VOWAID/2691-decal.jpg',
    ],
    type: 'decal',
    name: "2691 Decal",
    price: "10.00",
    description: "2691 Decal",
  },
];

let storeItemTypes = new Set();

storeItems.forEach((storeItem) => {
  storeItemTypes.add(storeItem.type);
});

storeItemTypes = [...storeItemTypes];

export default storeItems;

export {
  storeItemTypes,
};
