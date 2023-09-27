import React, { useState, useEffect } from 'react';
import './Header.scss';
import cteLogoLetters from '../../styles/images/cte-logo-letters-black.png';
import hamburgerIcon from '../../styles/images/humburger-icon-black.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleButtonClick()

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='header'>
      <Link to={'/home'}><img src={cteLogoLetters} alt="cte logo letters" className='header__logo-letters' /></Link>
      {windowWidth > 768 ? (
        <div className='header--navbar-links'>
          <Link className="header--navbar-links__link" to="/home">Home</Link>
          <Link className="header--navbar-links__link" to="/about">About Us</Link>
          <Link className="header--navbar-links__link" to="/products">Products</Link>
          <Link className="header--navbar-links__link" to="/businessmodel">Business Model</Link>
          <Link className="header--navbar-links__link" to="/team">Team</Link>
        </div>
      ) : (
        <div className='header--navbar-dropdown'>
          {buttonClicked ? (
              <img src={hamburgerIcon} alt="hamburger-icon" onClick={handleButtonClick} className='header--navbar-dropdown__image'/>
            ) : (
              <>
                <p onClick={handleButtonClick} className='header--navbar-dropdown__image'>X</p>
                <div className='header--navbar-dropdown__links'>
                  <Link className='header--navbar-dropdown__links__link' to="/home" onClick={handleButtonClick}>Home</Link>
                  <Link className='header--navbar-dropdown__links__link' to="/about" onClick={handleButtonClick}>About Us</Link>
                  <Link className='header--navbar-dropdown__links__link' to="/products" onClick={handleButtonClick}>Products</Link>
                  <Link className='header--navbar-dropdown__links__link' to="/businessmodel" onClick={handleButtonClick}>Business Model</Link>
                  <Link className='header--navbar-dropdown__links__link' to="/team" onClick={handleButtonClick}>Team</Link>
                </div>
              </>
            )
          }
        </div>
      )}
    </div>
  );
};

export default Header;
