import React from 'react';
import { Parallax } from 'react-parallax';
// images
import image from '../assets/Images/Home/parallax.jpg';

export default function FooterTop() {
  return (
    <>
      <Parallax
        className="parallax"
        bgImage={image}
        bgImageAlt=""
        strength={50}
        renderLayer={() => (
          <div>
            <div
              style={{
                content: "",
                position: 'absolute',
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "rgb(62, 28, 0, 0.9)",
                zIndex: "0",
              }}
            />
          </div>
        )}
      >
      </Parallax>
    </>
  )
}
