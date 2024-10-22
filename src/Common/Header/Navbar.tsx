import React from 'react';
import './Navbar.scss';
import UpscalingLogo from '../Logo/UpscalingLogo';

import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo" >
        <Link  to="/" className="brand-logo">
          <UpscalingLogo />
        </Link>
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Title</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
