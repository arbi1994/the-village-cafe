import React from 'react';
// Components
import Hero from '../Hero';
import Main from './Main';
// images
import firstImage from '../../assets/Images/Home/hero-left.jpg';
import secondImage from '../../assets/Images/Home/hero-right.jpg';

export default function Home() {
  const homeData = {
    header: "The Village",
    subHeader: "Cafe",
    paragraph: "Situated in the heart of Doncaster Road, discover a friendly and vibrant atmosphere while enjoying your favourite drink and meal.",
  }

  return (
    <section className="main home">
      <Hero 
        header={homeData.header} 
        subHeader={homeData.subHeader} 
        paragraph={homeData.paragraph} 
        firstImg={firstImage} 
        secondImg={secondImage} 
      />
      <Main />
    </section>
  )
}
