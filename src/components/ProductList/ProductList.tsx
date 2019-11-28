import React, { useState } from 'react';

import Product from './Product/Product';
import FullProduct from './FullProduct/FullProduct';
import './ProductList.scss';

const theProducts = [
  {
    _id: 'esfsef',
    category: 'Apple',
    name: 'Iphone 11',
    specs: ['4Gb Ram', '4.6GZ', '3500 Battery'],
    price: 725
  },
  {
    _id: 'sfsdf',
    category: 'Android',
    name: 'Samsung S7',
    specs: ['6Gb Ram', '3.6GZ', '4000 Battery'],
    price: 475
  },
  {
    _id: 'jhfhgh',
    category: 'Blackberry',
    name: 'HTC 10',
    specs: ['2Gb Ram', '1.6GZ', '3000 Battery'],
    price: 284.99
  }
];

const ProductList: React.FC = () => {
  const [itemClicked, setItemClicked] = useState();

  const clicked = (id: string) => {
    setItemClicked(id);
  };

  const products = theProducts.map(product => {
    return (
      <Product
        key={product._id}
        name={product.name}
        price={product.price}
        // category={product.category}
        // specs={product.specs}
        clicked={() => {
          clicked(product._id);
        }}
      />
    );
  });

  const selectedProduct = theProducts
    .filter(product => product._id === itemClicked)
    .map(product => {
      return (
        <FullProduct
          key={product._id}
          name={product.name}
          price={product.price}
          category={product.category}
          specs={product.specs}
        />
      );
    });

  return (
    <>
      {!itemClicked ? (
        <ul className='products_container'>{products}</ul>
      ) : (
        <>{selectedProduct}</>
      )}
    </>
  );
};

export default ProductList;
