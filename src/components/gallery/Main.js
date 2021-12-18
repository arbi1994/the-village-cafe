import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
// images 
import firstImg from '../../assets/Images/Gallery/gallery-1.jpg';
import secondImg from '../../assets/Images/Gallery/gallery-2.jpg';

const Main = () => {
  const images = [
    {
      url: firstImg, 
      alt: ""
    },
    {
      url: secondImg, 
      alt: ""
    },
    {
      url: firstImg, 
      alt: ""
    },
    {
      url: secondImg, 
      alt: ""
    },
    {
      url: firstImg, 
      alt: ""
    },
    {
      url: secondImg, 
      alt: ""
    },
    {
      url: firstImg, 
      alt: ""
    },
    {
      url: secondImg, 
      alt: ""
    },
    {
      url: firstImg, 
      alt: ""
    },
    {
      url: secondImg, 
      alt: ""
    },
    {
      url: firstImg, 
      alt: ""
    },
    {
      url: secondImg, 
      alt: ""
    },
    {
      url: firstImg, 
      alt: ""
    },
    {
      url: secondImg, 
      alt: ""
    },
  ]

  return (
    <SRLWrapper>
      <div className="gallery-main">
        <div className="container">
          {images.map((image, index) => (
            <div key={index} className="container__card">
              <a href={image.url}>
                <img alt={image.alt} src={image.url} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </SRLWrapper>
  )
}

export default Main
