import React from 'react';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Hero({ header, subHeader, paragraph, firstImg, secondImg }) {
  const { pathname } = useLocation();

  /**
   * Set classnames according to the pathname
   * @returns String
   */
  const className = () => {
    if(pathname === '/about' || pathname === '/contact') return "home__hero--description second-hero"
    if(pathname === '/menus') return 'home__hero--description no-overlay'
    return 'home__hero--description'
  }
  
  return (
    <section className="home__hero">
      <div className={className()}>

        <div className="wrapper">
          <h1>{header}</h1>
          <h1>{subHeader}</h1>
          <p>{paragraph}</p>
        </div>
        
        {
          pathname === '/about' || pathname === '/contact' || pathname === '/menus'
            ? null
            : <LazyLoadImage alt="hero-img-left" src={firstImg} threshold="500" />
        }
        
      </div>
      <div className="home__hero--photo">
        <LazyLoadImage alt="hero-img-right" src={secondImg || firstImg} threshold="500" />
      </div>
    </section>
  )
}
