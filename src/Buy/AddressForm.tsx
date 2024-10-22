import React from 'react';
import './AddressForm.scss';

export default function AddressForm() {
  return (
    <div className="address-form">
      <h6>Shipping address</h6>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          placeholder="First name"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          placeholder="Last name"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="address1"
          name="address1"
          placeholder="Address line 1"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="address2"
          name="address2"
          placeholder="Address line 2"
        />
      </div>
      <div className="row g-3">
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="City"
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            placeholder="State/Province/Region"
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            id="zip"
            name="zip"
            placeholder="Zip / Postal code"
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            placeholder="Country"
            required
          />
        </div>
      </div>
      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="saveAddress"
          name="saveAddress"
          value="yes"
        />
        <label className="form-check-label" htmlFor="saveAddress">
          Use this address for payment details
        </label>
      </div>
    </div>
  );
}
