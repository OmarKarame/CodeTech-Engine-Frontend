import './About.scss'
import Card from '../../components/Card/Card'
import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [cardIsVisible, setCardIsVisible] = useState();
  const myRef = useRef()
  console.log('card is visible: ', cardIsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCardIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, [])

  return (
    <div className='about'>
      <h2 className='about--title'>About</h2>
      <div
        className={cardIsVisible ? 'about--section__visible' : 'about--section__hidden'}
        ref={myRef}
      >
        <Card
          cardClassName="card--section__cte"
          isCTE={true}
        />
        <Card
          cardClassName="card--section__git"
          isCTE={false}
        />
      </div>
    </div>
  )
}

export default About
