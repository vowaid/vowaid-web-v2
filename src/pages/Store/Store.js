import React from 'react';
import { v4 as uuid } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { BuyButton, H4, P } from '../../components';

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
    <main>
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
                <BuyButton item={storeItem}>
                  Add&nbsp;<span className='sr-only'>{storeItem.name}&nbsp;</span>to&nbsp;Cart
                </BuyButton>
              </CardActions>
            </Card>
          );
        })}
      </section>
    </main>
  );
};

export default Store;
