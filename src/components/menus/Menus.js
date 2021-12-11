import React from 'react';
// components
import Hero from '../Hero';
// Images
import image from '../../assets/Images/Menu/hero.jpg';

export default function Menus() {
  const menuData = {
    header: "Menus",
    paragraph: "Enjoy our delicious meals, made everyday with fresh ingredients, or just stop by for a drink.",
  }

  return (
    <div className="menu">
      <Hero 
        header={menuData.header} 
        paragraph={menuData.paragraph} 
        firstImg={image} 
      />
    </div>
  )
}
