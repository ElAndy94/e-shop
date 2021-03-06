import React from 'react';

import './Product.scss';
import Image from '../../../assets/images/iphone-img.png';

interface Props {
  clicked: () => void;
  key: string;
  name: string;
  price: number;
  category?: string;
  specs?: string[];
}

const Product = (props: Props) => {
  return (
    <li
      className='productItem'
      key={props.key}
      onClick={() => {
        props.clicked();
      }}
    >
      <div className='productItem__info'>
        <h1>{props.name}</h1>
        <img src={Image} alt='iphone' />
        <p>£{props.price}</p>
      </div>
    </li>
  );
};

export default Product;
