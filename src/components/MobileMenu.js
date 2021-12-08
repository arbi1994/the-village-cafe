import React from 'react';
import { useLocation } from 'react-router-dom';
// components
import Navbar from './Navbar';

export default function MobileMenu({ menuClicked, setMenuClicked }) {
  const { pathname } = useLocation()
  console.log(pathname)

  if(pathname) setMenuClicked(false)

  return (
    <div className="mobile-menu">
      <Navbar menuClicked={menuClicked} />

      <div className="mobile-menu__contacts">
        <h5>Phone</h5>
        <a href="tel:0398570734">(03) 9857 0734</a>
      </div>
    </div>
  )
}
