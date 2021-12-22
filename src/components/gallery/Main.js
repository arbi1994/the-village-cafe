import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
// images 
import gallery from '../../utils/gallery';

const Main = () => {
  console.log(gallery)

  return (
    <SRLWrapper>
      <div className="gallery-main">
        <div className="container">
          {gallery.map((image, index) => (
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
