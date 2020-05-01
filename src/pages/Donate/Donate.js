import React from 'react';
import uuid from 'uuid/v4';

import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, TextField } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button, DonateHero, H3, P, Seo, Content, Wrapper } from '../../components';

import { gutter, pxToEm } from '../../styles/utils';

import { generateDonationId } from '../../utils/snipcartUtils';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: gutter.XXL,
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
  const donationAmounts = [25, 50, 100, 150, 250];
  const [donationValue, setDonationValue] = React.useState(donationAmounts[0]);
  const classes = useStyles();

  const handleChange = (event) => {
    setDonationValue(event.target.value);
  };

  const donationDisabled = donationValue.toString() === '' || donationValue.toString() === '0';

  return (
    <main className={classes.root}>
      <Seo title='Donate' />

      <Content>
        <DonateHero />

        <Wrapper>
          <div className={classes.buttonGroup}>
            <H3 paragraph>Choose your donation</H3>
            <ButtonGroup variant='contained' color='default' aria-label='contained primary button group'>
              {donationAmounts.map((donationAmount) => (
                <Button
                  variant={(donationValue === donationAmount) ? 'contained' : 'outlined'}
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
            data-item-id={generateDonationId(donationValue)}
            data-item-name={`Donate $${donationValue}`}
            data-item-price={`${donationValue}.00`}
            data-item-url='/products.json'
            data-item-description={`Donate $${donationValue}`}
            data-item-categories={'donation'}
            disabled={donationDisabled}
          >Donate ${donationValue || '0'}</Button>
        </Wrapper>
      </Content>
    </main>
  );
};

export default DonatePage;
