import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
// mui icon
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
// utils
import breakpoints from '../utils/breakpoints';
// hooks
import useViewport from '../hooks/useViewport';

const ScrollToTopBtn = () => {
  const [showButton, setShowButton] = useState(false)
  const [width] = useViewport()
  const tabletWidth = breakpoints.tablet
  const phoneWidth = breakpoints.phoneL

  useEffect(() => {
    function handleScrollToTop() {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false) 
    }

    window.addEventListener('scroll', handleScrollToTop)

    return () => window.removeEventListener('scroll', handleScrollToTop)

  }, [])

  const handleScrollToTop = () => {
    try{
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }catch(error){
      window.scrollTo(0, 0)
    }
  }

  const arrowUpSize = () => {
    if(width <= phoneWidth) return '3rem'
    if(width <= tabletWidth) return '4rem'
    
    return '5rem'
  }

  const transition = useTransition(showButton, {
    config: { duration: 150 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })


  return (
    <>
      {transition((style, item) => 
        item  
          ? 
            <animated.button
              style={style}
              onClick={handleScrollToTop} 
              className={`scroll-to-top ${showButton ? 'active' : null}`}
            >
              <KeyboardArrowUpRoundedIcon sx={{fontSize: `${arrowUpSize()}`}}/>
            </animated.button>
          : null
        )
      }
    </>
  )
}

export default ScrollToTopBtn
