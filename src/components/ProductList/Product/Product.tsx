import React from 'react';

import './Product.scss';
import Image from '../../../assets/images/iphone-img.png';

const Product = (props: any) => {
  return (
    <li
      className='productItem'
      key={props.id}
      onClick={() => {
        props.clicked();
      }}
    >
      <div className='productItem__info'>
        <h1>{props.name}</h1>
        <img src={Image} alt='iphone' />
        <p>£{props.price}</p>
        {/* <div>
          <p>{props.category}</p>
        </div> */}
        {/* <p>{props.specs}</p> */}
      </div>
    </li>
  );
};

export default Product;
