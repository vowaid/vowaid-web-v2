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

export {
  generateDonationId,
};
