import React from 'react';

import './Product.scss';
import Image from '../../../assets/images/iphone-img.jpg';

const Product = (props: any) => {
  return (
    <li className='productItem' key={props.key}>
      <div className='productItem__info'>
        <h1>{props.name}</h1>
        <img src={Image} alt='iphone' />
        <div>
          <p>{props.category}</p>
          <p>£{props.price}</p>
        </div>
        {/* <p>{props.specs}</p> */}
      </div>
    </li>
  );
};

export default Product;
