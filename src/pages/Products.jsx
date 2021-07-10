import React, { useState, useEffect } from 'react';
import ProductsList from '../components/product/ProductsList';
import { search } from '../api/api';

import { MainBody, LineBreak, WelcomeHeader } from '../assets/GlobalStyles';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    search('/products', setProducts);
  }, []);

  return (
    <MainBody>
      <WelcomeHeader>Bem-vindo à Lojinha!</WelcomeHeader>
      <LineBreak />
      <ProductsList products={products} />
    </MainBody>
  );
}

export default Products;
