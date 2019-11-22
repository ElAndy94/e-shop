import React from 'react';

const Product = (props: any) => {
  return (
    <li className='menuItem'>
      <div className='menuItem__info'>
        <div className='menuItem__info--name--desc'>
          <h1>{props.itemName}</h1>
        </div>
      </div>
    </li>
  );
};

export default Product;
