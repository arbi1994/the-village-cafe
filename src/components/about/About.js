import React from 'react';
// Components
import Hero from '../Hero';
// Images
import image from '../../assets/Images/About/hero.jpg';

export default function About() {
  const aboutData = {
    header: "About",
    subHeader: "The Village Cafe",
    paragraph: "Discover more about this friendly cafe-styled environment which will make you feel at home.",
  }

  return (
    <section className="about">
      <Hero 
        header={aboutData.header} 
        subHeader={aboutData.subHeader} 
        paragraph={aboutData.paragraph} 
        firstImg={image} 
      />
      <section className="about__main">

        <div className="about__main--description">
          <p>
            At The Village Cafe, the team take pride in their unmatched customer service. 7 days per week, they will make you feel right at home, whether you’re popping for a takeaway coffee, or settling in for a tasty afternoon treat. The delicious coffee is made with San Pedro blend coffee, and they have an extensive range of Tea Drop teas to entice you.
            <br />There are meals for breakfast, brunch, and back to that tasty afternoon treat – the staff will let you know of the most delicious one out of a selection of quality cakes, sweets, muffins and biscuits.
          </p>
        </div>
  
      </section>
    </section>
  )
}
