import React, { useState } from 'react';
// components
import Hero from '../Hero';
import MenuContainer from './MenuContainer';
// Images
import image from '../../assets/Images/Menu/hero.jpg';

export default function Menus() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState(() => "EAT");

  const menuData = {
    header: "Menus",
    paragraph: "Enjoy our delicious meals, made everyday with fresh ingredients, or just stop by for a drink.",
  }

  const handleClick = (e) => {
    setBtnClicked(true)
    setSelectedBtn(e.target.innerText)
  }

  return (
    <div className="main menu">
      <Hero 
        header={menuData.header} 
        paragraph={menuData.paragraph} 
        firstImg={image} 
      />

      <div className="menu__main">
        <div className="menu__options">
          <button className="btn" onClick={handleClick}>EAT</button>
          <button className="btn" onClick={handleClick}>DRINK</button>
        </div>

        <MenuContainer selectedBtn={selectedBtn}/>
        
      </div>
    </div>
  )
}
