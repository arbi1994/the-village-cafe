import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// images
import image from '../assets/Images/Home/parallax-1.jpg';

export default function FooterTop() {
  return (
    <div className="parallax-wrapper">
      <LazyLoadImage 
        alt="" 
        src={image} 
        className="parallax"
      />
      <h2>For orders and bookings call</h2>
      <a href="tel:0398570734" rel="nofollow">(03) 9857 0734</a>
    </div>
  )
}
