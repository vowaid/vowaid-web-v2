const fs = require('fs');

// Generate an id that has 4 digits
const generateDonationId = (amount) => {
  let id = amount.toString();

  if (id.length === 3) {
    id = `0${id}`;
  } else if (id.length === 2) {
    id = `00${id}`;
  } else if (id.length === 1) {
    id = `000${id}`;
  }

  id += 'D';

  return id;
};

const generateDonations = () => {
  const donationItems = [];

  for (let price = 1; price <= 9999; price++) {
    let id = generateDonationId(price);

    donationItems.push({
      id,
      categories: 'donation',
      name: `Donate $${price}`,
      price: price,
      description: `$${price} Donation to VOWAID Foundation`,
      url: '/donations.json',
    });
  }

  return donationItems;
};

const donationItems = generateDonations();
const products = JSON.stringify(donationItems, null, 2);

fs.writeFileSync('./public/donations.json', products);
