import React from 'react';
// Components
import Hero from '../Hero';
// Images
import image from '../../assets/Images/Contact/hero.jpg';

export default function Contact() {
  const contactData = {
    header: "Connect with",
    subHeader: "us",
    paragraph: "Let us know your feedback about our service and food. We are really happy to hear from you, so that we can offer the best of The Village Cafe. ",
  }

  return (
    <section className="contact">
      <Hero 
        header={contactData.header} 
        subHeader={contactData.subHeader} 
        paragraph={contactData.paragraph} 
        firstImg={image} 
      />
    </section>
  )
}
