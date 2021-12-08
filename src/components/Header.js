import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// images
import logoDesktop from '../assets/Images/Logo/logo-desktop.svg';
import logoTablet from '../assets/Images/Logo/logo-tablet.svg';
import logoPhone from '../assets/Images/Logo/logo-mobile.svg';
import headerImg from '../assets/Images/Header/Header-top-center.svg';
// components
import Navbar from './Navbar';
// hooks
import useViewport from '../hooks/useViewport';

export default function Header() {
  const ref = useRef()
  const [width, height] = useViewport()
  const [headerHeight, setHeaderHeight] = useState(undefined)
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked(!menuClicked);
  }

   // set Hero element height
   useEffect(() => { 
    setHeaderHeight(ref.current.getBoundingClientRect().height) 
  }, [width, height])

  console.log(headerHeight)

  return (
    <header ref={ref}>
      <div className="background-img">
        <img alt="background" src={headerImg} />
      </div>
      
      <div className="wrapper">
        <div className="left">
          <Link className="logo" to="/">
            <img  
              alt="home" 
              src={logoPhone}
              srcSet={`${logoPhone} 425w, ${logoTablet} 768w, ${logoDesktop} 1280w`} 
            />
          </Link>
        </div>

        <div className="right">
          <h5>Phone</h5>
          <a href="tel:0398570734">(03) 9857 0734</a>
        </div>
      </div>

      <Navbar
        headerHeight={headerHeight} 
        menuClicked={menuClicked} 
        handleClick={handleClick}
      />
    </header>
  )
}
