import React, { useState, useEffect } from 'react';
import ProductsList from '../components/ProductsList';
import { search } from '../api/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    search('/products', setProducts);
  }, []);

  return <ProductsList products={products} />;
}

export default Products;
