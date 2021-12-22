import React, { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax } from 'react-parallax';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import ParallaxCache from '../hooks/useParallaxCache';
// images
import image from '../assets/Images/Home/parallax-1.jpg';

export default function FooterTop() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [offset])

  const overalay = {
    content: "",
    position: 'absolute',
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgb(62, 28, 0, 0.9)",
    zIndex: "0",
  }

  return (
    <div className="parallax-wrapper">
      <img 
        alt="" 
        src={image} 
        className="parallax"
        style={{
          transform: `translateY(${offset * 0}px)`
        }}
      />
    </div>
  )
}
