import React from 'react';

import { Button, ButtonGroup } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { H1, H2, H3, P, Seo } from '../components';

/**
 * Description.
 */
const DonatePage = () => {
  const [donationValue, setDonationValue] = React.useState(0);
  const donationAmounts = [25, 50, 100, 150, 250];

  // {
  //   id: '0025D',
  //   images: [],
  //   type: 'donation',
  //   name: "Donate $25",
  //   price: "25.00",
  //   description: "$25 Donation to VOWAID Foundation",
  // }

  const generateId = (donationAmount) => {
    let id = donationAmount;

    if (donationAmount.length === 3) {
      id = `0${donationAmount}`;
    } else if (donationAmount.length === 2) {
      id = `00${donationAmount}`;
    } else if (donationAmount.length === 1) {
      id = `000${donationAmount}`;
    }

    id += 'D';

    return id;
  }

  return (
    <main>
      <Seo title='Donate' />

      <header>
        <H1>Donate</H1>
        <H2>Change lives with your gift!</H2>

        <P>Your donation supports our mission to help Veterans in need.</P>
      </header>

      <section>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          {donationAmounts.map((donationAmount) => (
            <Button
              variant='contained'
              color='primary'
              onClick={(event) => {
                event.preventDefault();
                setDonationValue(donationAmount)
              }}
            >${donationAmount}</Button>
          ))}
        </ButtonGroup>

        <H3>Your Donation: ${donationValue}</H3>

        <Button
          variant='contained'
          color='primary'
          className='snipcart-add-item'
          endIcon={<AddShoppingCartIcon />}
          data-item-id={generateId(donationValue)}
          data-item-name={`Donate $${donationValue}`}
          data-item-price={`${donationValue}.00`}
          data-item-url='/products.json'
          data-item-description={`Donate $${donationValue}`}
          data-item-categories={'donation'}
          disabled={donationValue === 0}
        >Donate ${donationValue}</Button>
      </section>
    </main>
  );
};

export default DonatePage;
