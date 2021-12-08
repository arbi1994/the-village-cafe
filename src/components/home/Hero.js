import React from 'react';
import imgLeft from '../../assets/Images/Home/hero-left.jpg';
import imgRight from '../../assets/Images/Home/hero-right.jpg';

export default function Hero() {
  return (
    <section className="home__hero">
      <div className="home__hero--description">

        <div className="wrapper">
          <h1>The Village Cafe</h1>
          <p>
            Situated in the heart of <span>Doncaster Road</span>, discover a friendly and vibrant atmosphere while enjoying your favourite drink and meal.
          </p>
        </div>
        
        <img alt="hero-img-left" src={imgLeft} />
      </div>
      <div className="home__hero--photo">
        <img alt="hero-img-right" src={imgRight} />
      </div>
    </section>
  )
}
