import React, { useState, useEffect } from 'react';
import './Header.scss';
import cteLogoLetters from '../../styles/images/cte-logo-letters.png';
import hamburgerIcon from '../../styles/images/humburger-icon.svg'

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
      <img src={cteLogoLetters} alt="cte logo letters" className='header__logo-letters' />
      {windowWidth > 768 ? (
        <div className='header--navbar-links'>
          <a href="#home"><p>Home</p></a>
          <a href="#about"><p>About</p></a>
          <a href="#trial"><p>Trial</p></a>
          <a href="https://github.com/OmarKarame/commit-to-excellence-command-line-interface"><p>Docs</p></a>
          <a href="#team"><p>Team</p></a>
        </div>
      ) : (
        <div className='header--navbar-dropdown'>
          {buttonClicked ? (
              <img src={hamburgerIcon} alt="hamburger-icon" onClick={handleButtonClick} className='header--navbar-dropdown__image'/>
            ) : (
              <>
                <p onClick={handleButtonClick} className='header--navbar-dropdown__image'>X</p>
                <div className='header--navbar-dropdown__links'>
                  <a href="#home" onClick={handleButtonClick}><p>Home</p></a>
                  <a href="#about" onClick={handleButtonClick}><p>About</p></a>
                  <a href="#trial" onClick={handleButtonClick}><p>Trial</p></a>
                  <a href="https://github.com/OmarKarame/commit-to-excellence-command-line-interface" onClick={handleButtonClick}><p>Docs</p></a>
                  <a href="#team" onClick={handleButtonClick}><p>Team</p></a>
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
