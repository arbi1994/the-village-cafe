import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useInView } from 'react-intersection-observer';
// images
import imgLeft from '../../assets/Images/Home/home-img-1.jpg';
import imgRight from '../../assets/Images/Home/home-img-2.jpg';
import imgBottom from '../../assets/Images/Home/img-3.jpg';

export default function Main() {
  const [firstImgRef, firstInView, firstEntry] = useInView();
  const [secondImgRef, secondInView, secondEntry] = useInView();
  const [thirdImgRef, thirdInView, thirdEntry] = useInView();
  const [descriptionRef, descriptionInView, descriptionEntry] = useInView();

  useEffect(() => {
    if(firstInView) firstEntry.target.classList.add('fadeIn')

    if(secondInView) secondEntry.target.classList.add('fadeIn')

    if(thirdInView) thirdEntry.target.classList.add('fadeIn')

    if(descriptionInView) descriptionEntry.target.classList.add('fadeIn')
  }, 
  [
    firstInView, 
    secondInView, 
    descriptionInView, 
    firstEntry, 
    secondEntry, 
    descriptionEntry,
    thirdInView,
    thirdEntry,
  ]);

  return (
    <main>
      <section className="container">
        <div className="container__wrapper">
          <section className="img-wrapper">
            <div ref={firstImgRef} className="img first">
              <LazyLoadImage alt="" src={imgLeft} />
            </div>
            <div ref={secondImgRef} className="img second">
              <LazyLoadImage alt="" src={imgRight} />
            </div>
            <div className="description">
              <div ref={descriptionRef} className="description__wrapper">
                <p>Explore our delicious homemade food with a selection of meals that will please all your senses</p>
                <Link to="/menus" className="button">Check our menus</Link>
              </div>
            </div>
            <div ref={thirdImgRef} className="img third">
              <LazyLoadImage alt="" src={imgBottom} />
            </div> 
          </section>
        </div>
      </section>
    </main>
  )
}
