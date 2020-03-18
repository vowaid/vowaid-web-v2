const generateDonationId = (amount) => {
  let id = amount;

  if (amount.length === 3) {
    id = `0${amount}`;
  } else if (amount.length === 2) {
    id = `00${amount}`;
  } else if (amount.length === 1) {
    id = `000${amount}`;
  }

  id += 'D';

  return id;
};

export {
  generateDonationId,
};
