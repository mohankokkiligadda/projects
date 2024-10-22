import React from 'react';
import './Review.scss';

export default function Review() {
  return (
    <div className="review">
      <h6>Order summary</h6>
      <ul className="list-group mb-3">
        {products.map((product, index) => (
          <li className="list-group-item" key={index}>
            <div className="d-flex justify-content-between">
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
            <p>{product.desc}</p>
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total</span>
          <span className="fw-bold">$34.06</span>
        </li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <h6>Shipping</h6>
          <p>John Smith</p>
          <p>{addresses.join(', ')}</p>
        </div>
        <div className="col-sm-6">
          <h6>Payment details</h6>
          {payments.map((payment, index) => (
            <div className="d-flex justify-content-between" key={index}>
              <span>{payment.name}</span>
              <span>{payment.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];
