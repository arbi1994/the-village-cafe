import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Hero({ header, subHeader, paragraph, firstImg, secondImg }) {
  const { pathname } = useLocation();
  const [className, setClassName] = useState();
  const [backgroundImg, setBackgroundImg] = useState();

  /**
   * Set classnames according to the pathname
   */
  useEffect(() => {
    if(pathname === '/about' || pathname === '/contact') setClassName("hero__text-container second-hero")
    if(pathname === '/menus') setClassName('hero__text-container no-overlay')
    if(pathname === '/') setClassName('hero__text-container')
  }, [pathname])
  
  /**
   * Render the correct image according to the pathname
   */
  useEffect(() => {
    if(pathname === '/about' || pathname === '/contact' || pathname === '/menus') return

    setBackgroundImg(<img alt="hero-img-left" src={firstImg} />)
  }, [pathname, firstImg])

  return (
    <section className="hero">
      <div className={className}>

        <div className="wrapper">
          <h1>{header}</h1>
          <h1>{subHeader}</h1>
          <p>{paragraph}</p>
        </div>
        
        {backgroundImg}
        
      </div>
      <div className="hero__photo-container">
        <img alt="hero-img-right" src={secondImg || firstImg} />
      </div>
    </section>
  )
}
