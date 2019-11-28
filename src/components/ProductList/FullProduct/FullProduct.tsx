import React from 'react';

import './FullProduct.scss';
import Image from '../../../assets/images/iphone-img.png';

interface Props {
  clicked?: () => void;
  key: string;
  name: string;
  price: number;
  category: string;
  specs: string[];
}

const FullProduct = (props: Props) => {
  return (
    <div
      className='productItem'
      key={props.key}
      //   onClick={() => {
      // props.clicked();
      // alert('add to basket');
      //   }}
    >
      <div className='productItem__info'>
        <h1>{props.name}</h1>
        <img src={Image} alt='iphone' />
        <p>£{props.price}</p>
        <div>
          <p>{props.category}</p>
        </div>
        <p>{props.specs}</p>
      </div>
    </div>
  );
};

export default FullProduct;
