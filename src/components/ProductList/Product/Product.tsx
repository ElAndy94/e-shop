import React from 'react';

import './Product';

const Product = (props: any) => {
  return (
    <li className='productItem' key={props.key}>
      <div className='productItem__info'>
        <div className='productItem__info--name--desc'>
          <h1>{props.name}</h1>
          <p>{props.price}</p>
          <p>{props.category}</p>
          <p>{props.specs}</p>
        </div>
      </div>
    </li>
  );
};

export default Product;
