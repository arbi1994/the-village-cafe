import React from 'react';
import { Link } from 'react-router-dom';
// utils
import navLinks from '../utils/navigation';
// images
import developerLogo from '../assets/Images/Logo/RB.svg';

export default function Footer() {
  const menu = navLinks.map((link, index) => {
    return <li><Link key={index} to={link.path} href={link.id}>{link.label}</Link></li>
  })

  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top--menu">
          <div className="header">
            <strong>Main menu</strong>
          </div>
          <ul className="main-container">{menu}</ul>
        </div>
        <div className="footer__top--socials">
          <div className="header">
            <strong>Social media</strong>
          </div>
          <ul className="main-container">
            <li>
              <a 
                className="link" 
                href="https://www.facebook.com/The-Village-Cafe-348418458561128" 
                target="_blank" 
                rel="noopener noreferrer"
              >Facebook</a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/thevillagecafebalwyn/" 
                target="_blank" 
                rel="noopener noreferrer"
              >Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer__top--address">
          <div className="header">
            <strong>Address</strong>
          </div>
          <div className="main-container">
            2/74 Doncaster Rd<br />Balwyn North<br />VIC<br />3104<br />
          </div>
        </div>
        <div className="footer__top--contact">
          <div className="header">
            <strong>Phone</strong>
          </div>
          <div className="main-container">
            <a href="tel:0398570734" rel="nofollow">(03) 9857 0734</a>
          </div>
          <div className="header">
            <strong>Email</strong>
          </div>
          <div className="main-container">
            <a href="mailto:samirfreijah@hotmail.com" rel="nofollow">samirfreijah@hotmail.com</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom--left">
          Copyright &copy; &nbsp; &#8226; &nbsp; 2021 The Village Cafe &nbsp; &#8226; &nbsp; All Rights Reserved
        </div>
        <div className="footer__bottom--right">
          <span>Made by</span>
          <a href="https://rb.com" target="_blank" rel="noopener noreferrer"><img alt="" src={developerLogo} /></a>
        </div>
      </div>
    </div>
  )
}
