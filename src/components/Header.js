import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// images
import logoDesktop from '../assets/Images/Logo/logo-desktop.svg';
import logoTablet from '../assets/Images/Logo/logo-tablet.svg';
import logoPhone from '../assets/Images/Logo/logo-mobile.svg';
import headerImg from '../assets/Images/Header/header-top-center.svg';
// components
import Navbar from './Navbar';

export default function Header() {
  const ref = useRef()
  const [headerHeight, setHeaderHeight] = useState(0)

  // set Hero element height
  useEffect(() => { 
    setHeaderHeight(ref.current.getBoundingClientRect().height) 
  }, [])

  return (
    <header ref={ref}>
      <div className="background-img">
        <img alt="" src={headerImg} />
      </div>
      
      <div className="wrapper">
        <div className="left">
          <Link className="logo" to="/" style={{height: '100%'}}>
            <img  
              alt="" 
              src={logoPhone}
              srcSet={`${logoPhone} 425w, ${logoTablet} 768w, ${logoDesktop} 1280w`} 
            />
          </Link>
        </div>

        <div className="right">
          <h6>Phone</h6>
          <a href="tel:0398570734" rel="nofollow">(03) 9857 0734</a>
        </div>
      </div>

      <Navbar headerHeight={headerHeight} />
    </header>
  )
}
