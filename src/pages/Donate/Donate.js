import React from 'react';
import uuid from 'uuid/v4';

import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, TextField } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button, H1, H2, H3, P, Seo, Wrapper } from '../../components';

import { gutter, pxToEm } from '../../styles/utils';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: gutter.XXL,
    paddingTop: gutter.XXL,
  },
  header: {
    marginBottom: gutter.L,
  },
  buttonGroup: {
    margin: `${gutter.L} 0`,
  },
  custom: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    margin: `${gutter.L} 0`,

    '& p': {
      marginRight: gutter.S,
    },

    '& span': {
      marginRight: pxToEm(5),
    },
  }
}));

/**
 * Description.
 */
const DonatePage = () => {
  const [donationValue, setDonationValue] = React.useState('0');
  const donationAmounts = [25, 50, 100, 150, 250];
  const classes = useStyles();

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
  };

  const handleChange = (event) => {
    setDonationValue(event.target.value);
  };

  const donationDisabled = donationValue.toString() === '' || donationValue.toString() === '0';

  return (
    <main className={classes.root}>
      <Seo title='Donate' />

      <Wrapper>
        <header className={classes.header}>
          <H1 paragraph>Donate</H1>
          <H2 paragraph>Change lives with your gift!</H2>

          <P>Your donation supports our mission to help Veterans in need.</P>
        </header>

        <section>
          <div className={classes.buttonGroup}>
            <H3 paragraph>Choose your donation</H3>
            <ButtonGroup variant='contained' color='default' aria-label='contained primary button group'>
              {donationAmounts.map((donationAmount) => (
                <Button
                  variant='outlined'
                  color='default'
                  onClick={(event) => {
                    event.preventDefault();
                    setDonationValue(donationAmount)
                  }}
                  key={uuid()}
                >${donationAmount}</Button>
              ))}
            </ButtonGroup>
          </div>

          <div className={classes.custom}>
            <P>Or enter your donation:</P>

            <span>$</span>
            <TextField
              onChange={handleChange}
              type='number'
              value={donationValue}
              onBlur={(event) => {
                if (event.target.value === '') {
                  setDonationValue('0');
                }
              }}
            />
          </div>

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
            disabled={donationDisabled}
          >Donate ${donationValue || '0'}</Button>
        </section>
      </Wrapper>
    </main>
  );
};

export default DonatePage;
