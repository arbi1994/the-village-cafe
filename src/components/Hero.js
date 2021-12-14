import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Hero({ header, subHeader, paragraph, firstImg, secondImg }) {
  const { pathname } = useLocation();

  /**
   * Set classnames according to the pathname
   * @returns String
   */
  const className = () => {
    if(pathname === '/about' || pathname === '/contact') return "hero__text-container second-hero"
    if(pathname === '/menus') return 'hero__text-container no-overlay'
    return 'hero__text-container'
  }
  
  /**
   * Render the correct image according to the pathname
   * @returns Node element
   */
  const renderImage = () => {
    if(pathname === '/about' || pathname === '/contact' || pathname === '/menus') return

    return <img alt="hero-img-left" src={firstImg} />
  }

  return (
    <section className="hero">
      <div className={className()}>

        <div className="wrapper">
          <h1>{header}</h1>
          <h1>{subHeader}</h1>
          <p>{paragraph}</p>
        </div>
        
        {renderImage()}
        
      </div>
      <div className="hero__photo-container">
        <img alt="hero-img-right" src={secondImg || firstImg} />
      </div>
    </section>
  )
}
