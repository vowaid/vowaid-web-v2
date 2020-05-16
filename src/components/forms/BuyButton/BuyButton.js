import React from 'react';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from '../../../components';

const BuyButton = React.memo(({ children, item, ...rest }) => {
  const buildDataProps = () => {
    const dataProps = {};

    Object.keys(item).forEach((key) => {
      dataProps[`data-item-${key}`] = item[key];
    });

    return dataProps;
  };

  return (
    <Button
      className='snipcart-add-item'
      color='primary'
      endIcon={<AddShoppingCartIcon />}
      variant='contained'
      {...buildDataProps()}
      {... rest}
    >
      {children}
    </Button>
  );
});

export default BuyButton;
