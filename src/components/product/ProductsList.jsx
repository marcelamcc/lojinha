import React from 'react';
import PropTypes from 'prop-types';

import ImageIcon from '@material-ui/icons/Image';

import { ListBody, ProductItem } from './ProductsListStyle';

function ProductsList({ products }) {
  return (
    <ListBody>
      {products.map((product, id) => (
        <ProductItem key={id}>
          <ImageIcon />
          <span>{product.name}</span>
          <span>${product.cost}</span>
        </ProductItem>
      ))}
    </ListBody>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array
}

export default ProductsList;
