import './HomeHeader.scss'
import React, { useState, useEffect } from 'react';
import cteLogoLetters from '../../styles/images/cte-logo-letters.png';
import hamburgerIcon from '../../styles/images/humburger-icon.svg';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
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
    <div className='home-header'>
      <img src={cteLogoLetters} alt="cte logo letters" className='home-header__logo-letters' />
      {windowWidth > 768 ? (
        <div className='home-header--navbar-links'>
          <Link className="home-header--navbar-links__link" to="/home">Home</Link>
          <Link className="home-header--navbar-links__link" to="/about">About Us</Link>
          <Link className="home-header--navbar-links__link" to="/products">Products</Link>
          <Link className="home-header--navbar-links__link" to="/team">Team</Link>
        </div>
      ) : (
        <div className='home-header--navbar-dropdown'>
          {buttonClicked ? (
              <img src={hamburgerIcon} alt="hamburger-icon" onClick={handleButtonClick} className='home-header--navbar-dropdown__image'/>
            ) : (
              <>
                <p onClick={handleButtonClick} className='home-header--navbar-dropdown__image'>X</p>
                <div className='home-header--navbar-dropdown__links'>
                  <Link className='home-header--navbar-dropdown__links__link' to="/home" onClick={handleButtonClick}>Home</Link>
                  <Link className='home-header--navbar-dropdown__links__link' to="/about" onClick={handleButtonClick}>About Us</Link>
                  <Link className='home-header--navbar-dropdown__links__link' to="/products" onClick={handleButtonClick}>Products</Link>
                  <Link className='home-header--navbar-dropdown__links__link' to="/team" onClick={handleButtonClick}>Team</Link>
                </div>
              </>
            )
          }
        </div>
      )}
    </div>
  )
}

export default HomeHeader
