import React from 'react';

import Product from './Product/Product';

const theProducts = ['iphone', 'samsung', 'nokia'];

const ProductList: React.FC = () => {
  const products = theProducts.map(p => {
    return <Product itemName={p} />;
  });

  return <>{products}</>;
};

export default ProductList;
