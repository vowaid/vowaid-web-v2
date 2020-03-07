import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { H4, P } from '../components';

import { gutter } from '../styles/utils';

import storeItems from '../data/storeItems';

const useStyles = makeStyles(theme => ({
  cardList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: gutter.M,
    gridRowGap: gutter.M,
    padding: `${gutter.XXL} ${gutter.M}`,

    '@media only screen and (max-width: 1200px)': {
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
    height: 300,
    transition: 'opacity 0.3s ease',
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
            <Card>
              <CardMedia
                alt={storeItem.name}
                className={classes.media}
                height={400}
                image={storeItem.images[0]}
                title={storeItem.name}
                onMouseEnter={(event) => {
                  if (storeItem.images.length > 1) {
                    event.target.style.opacity = 0;
                    setTimeout((target) => {
                      target.style.backgroundImage = `url("${storeItem.images[1]}")`;
                      target.style.opacity = 1;
                    }, 150, event.target);
                  }
                }}
                onMouseLeave={(event) => {
                  if (event.target.style.backgroundImage !== `url("${storeItem.images[0]}")`) {
                    event.target.style.opacity = 0;
                    setTimeout((target) => {
                      target.style.backgroundImage = `url("${storeItem.images[0]}")`;
                      target.style.opacity = 1;
                    }, 180, event.target);
                  }
                }}
              />

              <CardContent className={classes.content}>
                <H4>{storeItem.name}</H4>
              </CardContent>

              <CardActions disableSpacing className={classes.actions}>
                <P>${storeItem.price}</P>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<AddShoppingCartIcon />}
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
