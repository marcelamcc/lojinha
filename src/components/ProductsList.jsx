import React from 'react';

function ProductsList({ products }) {
  return (
    <ul>
      {products.map((product, id) => (
        <li key={id}>{product.name}</li>
      ))}
    </ul>
  );
}

export default ProductsList;
