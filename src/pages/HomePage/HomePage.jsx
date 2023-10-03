import './HomePage.scss'
import Intro from '../../containers/Intro/Intro'
import Trial from "../../containers/Trial/Trial"
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import React, { useRef } from 'react';

const HomePage = () => {
  const parentDivRef = useRef(null);

  const scrollDown = () => {
    const parentDiv = parentDivRef.current;
    parentDiv.scrollTo({
      top: parentDiv.scrollTop + 1000,
      behavior: 'smooth'
    })
  };

  return (
    <div className='home-page' ref={parentDivRef}>
      <Intro
        scroll={scrollDown}
      />
      <HomeHeader />
      <Trial />
    </div>
  )
}

export default HomePage
