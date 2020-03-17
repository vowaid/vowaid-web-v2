import React from 'react';
import uuid from 'uuid/v4';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { H4, P } from '../../components';

import { gutter } from '../../styles/utils';

import storeItems from '../../data/storeItems';

const useStyles = makeStyles(theme => ({
  cardList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: gutter.M,
    gridRowGap: gutter.M,
    padding: `${gutter.XXL} ${gutter.M}`,

    '@media only screen and (max-width: 1300px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },

    '@media only screen and (max-width: 800px)': {
      gridTemplateColumns: '1fr 1fr',
    },

    '@media only screen and (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
  media: {
    height: '300px',
    backgroundSize: 'contain',
  },
  content: {
    '& h4': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      height: '2.75em',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const Store = (props) => {
  const classes = useStyles();

  return (
    <article>
      <section className={classes.cardList}>
        {storeItems.map((storeItem) => {
          if (storeItem.type === 'donation') {
            return null;
          }

          return (
            <Card key={uuid()}>
              <CardMedia
                className={classes.media}
                image={storeItem.images[0]}
                title={storeItem.name}
              />

              <CardContent className={classes.content}>
                <H4>{storeItem.name}</H4>
              </CardContent>

              <CardActions disableSpacing className={classes.actions}>
                <P>${storeItem.price}</P>
                <Button
                  variant='contained'
                  color='primary'
                  endIcon={<AddShoppingCartIcon />}
                  className='snipcart-add-item'
                  data-item-id={storeItem.id}
                  data-item-name={storeItem.name}
                  data-item-price={storeItem.price}
                  data-item-image={storeItem.images[0]}
                  data-item-url='/products.json'
                  data-item-description={storeItem.description}
                  data-item-categories={storeItem.type}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </section>
    </article>
  );
};

export default Store;
