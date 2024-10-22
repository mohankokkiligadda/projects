<<<<<<< HEAD
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.scss'; 
import UpscalingLogo from '../Logo/UpscalingLogo';

export function Header() {
  const links = [
    {
      link: '/about',
      label: 'Features',
    },
    {
=======
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Dropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaCog, FaSignOutAlt,FaShoppingCart } from 'react-icons/fa';
import './Header.scss';
import UpscalingLogo from '../Logo/UpscalingLogo';

export function Header() {
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const [showMyCoursesDropdown, setShowMyCoursesDropdown] = useState(false);
  const [showAllCoursesDropdown, setShowAllCoursesDropdown] = useState(false);

  const history = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    history('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleFeaturesDropdownToggle = () => {
    setShowFeaturesDropdown(!showFeaturesDropdown);
  };

  const handleMyCoursesDropdownToggle = () => {
    setShowMyCoursesDropdown(!showMyCoursesDropdown);
  };

  const handleAllCoursesDropdownToggle = () => {
    setShowAllCoursesDropdown(!showAllCoursesDropdown);
  };

  const links = [
    {
>>>>>>> bfd2c72 (Adding Header Changes)
      link: '/pricing',
      label: 'Pricing',
    },
    {
      link: '/learn',
      label: 'Learn',
    },
    {
      link: '/community',
      label: 'Community',
    },
  ];

<<<<<<< HEAD
  const [active, setActive] = useState(links[0].link);

  const navItems = links.map((link) => (
    <Nav.Link
      key={link.label}
      href={link.link}
      className={active === link.link ? 'nav-link active' : 'nav-link'}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Nav.Link>
  ));

  return (
    <Navbar expand="lg" bg="light" variant="light" className="header mb-4">
      <Container>
        <Navbar.Brand href="/" className="brand-logo">
          {/* Upscaling */}
=======
  return (
    <Navbar expand="lg" variant="light" className="header mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-logo">
>>>>>>> bfd2c72 (Adding Header Changes)
          <UpscalingLogo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
<<<<<<< HEAD
          <Nav className="navbar-links me-auto mb-2 mb-lg-0">{navItems}</Nav>
        </Navbar.Collapse>
=======
          <Nav className="navbar-links me-auto mb-2 mb-lg-0">
            {/* <Dropdown
              show={showFeaturesDropdown}
              onToggle={handleFeaturesDropdownToggle}
            >
              <Dropdown.Toggle
                variant="link"
                id="features-dropdown-toggle"
                className="features-dropdown-toggle features-link"
              >
                Features
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <NavLink to="/education" className="feature-link dropdown-item">
                  Education
                </NavLink>
                <NavLink to="/videos" className="feature-link dropdown-item">
                  Videos
                </NavLink>
                <NavLink to="/books" className="feature-link dropdown-item">
                  Books
                </NavLink>
                <NavLink
                  to="/documentation"
                  className="feature-link dropdown-item"
                >
                  Documentation
                </NavLink>
              </Dropdown.Menu>
            </Dropdown> */}
            {isAuthenticated ? (
              <Dropdown
                show={showMyCoursesDropdown}
                onToggle={handleMyCoursesDropdownToggle}
              >
                <Dropdown.Toggle
                  variant="link"
                  id="my-courses-dropdown-toggle"
                  className="my-courses-dropdown-toggle my-courses-link"
                >
                  My Courses
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <NavLink to="/trainings" className="course-link dropdown-item">
                    Trainings
                  </NavLink>
                  <NavLink
                    to="/academic-projects"
                    className="course-link dropdown-item"
                  >
                    Academic Projects
                  </NavLink>
                </Dropdown.Menu>
              </Dropdown>
            ) : null}
            <Dropdown
              show={showAllCoursesDropdown}
              onToggle={handleAllCoursesDropdownToggle}
            >
              <Dropdown.Toggle
                variant="link"
                id="all-courses-dropdown-toggle"
                className="all-courses-dropdown-toggle all-courses-link features-link"
              >
                All Courses
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <NavLink
                  to="/trainings"
                  className="all-course-link dropdown-item"
                >
                   Trainings
                </NavLink>
                <NavLink
                  to="/academic-projects"
                  className="all-course-link dropdown-item"
                >
                   Academic Projects
                </NavLink>
              </Dropdown.Menu>
            </Dropdown>
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.link}
                exact
                activeClassName="active-link"
                className="nav-link"
              >
                {link.label}
              </NavLink>
            ))}
             {isAuthenticated ? (
            <NavLink to="/cart" className="cart-nav-link">
              <FaShoppingCart/>
            </NavLink>
            ) : null}
            {isAuthenticated ? (
              // <Button variant="primary" onClick={handleLogout}>
              //   Log out
              // </Button>
              <div className="user-profile">
                <div className="user-info">
                  <img src="data:image/jpeg;base64,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" alt="User Avatar" className="avatar" />
                </div>
                <div className="profile-actions">
                  {/* <p>Hello</p> */}
                  <NavLink to="/">
                    <FaInfoCircle /> My Profile {/* Add the icon before "Info" */}
                  </NavLink>
                  <NavLink to="/">
                    <FaCog /> Settings {/* Add the icon before "Settings" */}
                  </NavLink>
                  <div className='header-logout' onClick={handleLogout}>
                    <FaSignOutAlt /> Logout {/* Add the icon before "Logout" */}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink to="/login" className="login-button">
                <Button variant="primary">Log in</Button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>

>>>>>>> bfd2c72 (Adding Header Changes)
      </Container>
    </Navbar>
  );
}