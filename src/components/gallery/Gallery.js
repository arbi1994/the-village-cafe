import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
// components
import Hero from './Hero';
import Main from './Main';

export default function Gallery() {
  return (
    <SimpleReactLightbox>
      <section className="main gallery">
        <Hero />
        <Main />  
      </section>
    </SimpleReactLightbox>
  )
}
