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
    </section>
  )
}
