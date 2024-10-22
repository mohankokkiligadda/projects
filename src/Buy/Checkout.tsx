// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Checkout.scss'; // Import your SCSS file
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import UpscalingLogo from '../Common/Logo/UpscalingLogo';
import { Link } from 'react-router-dom';

function Checkout() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = ['Shipping address', 'Payment details', 'Review your order'];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <div className="checkout">
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
          <Link  to="/" className="brand-logo">
          <UpscalingLogo />
        </Link>
          </a>
        </div>
      </header>
      <main className="container">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center">Checkout</h1>
            <div className="step-container">
              <ul className="nav nav-pills">
                {steps.map((label, index) => (
                  <li className={`nav-item ${activeStep === index ? 'active' : ''}`} key={label}>
                    <a className="nav-link">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            {activeStep === steps.length ? (
              <div className="thank-you">
                <h2>Thank you for your order.</h2>
                <p>Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.</p>
              </div>
            ) : (
              <div className="step-content">
                {getStepContent(activeStep)}
                <div className="buttons">
                  {activeStep !== 0 && (
                    <button className="btn btn-secondary" onClick={handleBack}>
                      Back
                    </button>
                  )}
                  <button className="btn btn-primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* <footer className="text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Website
        </p>
      </footer> */}
    </div>
  );
}

export default Checkout;
