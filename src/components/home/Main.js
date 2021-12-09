import React from 'react';
import { Link } from 'react-router-dom';
import imgLeft from '../../assets/Images/Home/home-img-1.jpg';
import imgRight from '../../assets/Images/Home/home-img-2.jpg';
import imgBottom from '../../assets/Images/Home/home-img-3.jpg';

export default function Main() {
  return (
    <main>
    
      <section className="container">
        <div className="container__wrapper">
          <section className="img-wrapper">
            <div className="img first">
              <img alt="" src={imgLeft} />
            </div>
            <div className="img second">
              <img alt="" src={imgRight} />
            </div>
            <div className="description">
              <div className="description__wrapper">
                <p>Explore our delicious homemade food with a selection of meals that will please all your senses</p>
                <Link to="/menus" className="button">Check our menus</Link>
              </div>
            </div>
            <div className="img third">
              <img alt="" src={imgBottom} />
            </div> 
          </section>
        </div>
      </section>
    </main>
  )
}
