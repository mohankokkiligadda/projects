import React from 'react';
import './PaymentForm.scss';

export default function PaymentForm() {
  return (
    <div className="payment-form">
      <h6>Payment method</h6>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="cardName"
          name="cardName"
          placeholder="Name on card"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="cardNumber"
          name="cardNumber"
          placeholder="Card number"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="expDate"
          name="expDate"
          placeholder="Expiry date"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="cvv"
          name="cvv"
          placeholder="CVV"
          required
        />
        <small>Last three digits on signature strip</small>
      </div>
      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="saveCard"
          name="saveCard"
          value="yes"
        />
        <label className="form-check-label" htmlFor="saveCard">
          Remember credit card details for next time
        </label>
      </div>
    </div>
  );
}
