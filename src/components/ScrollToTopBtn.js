import React, { useState, useEffect } from 'react';

const ScrollToTopBtn = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    function handleScrollToTop() {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false) 
    }

    window.addEventListener('scroll', handleScrollToTop)

    return () => window.removeEventListener('scroll', handleScrollToTop)

  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={handleScrollToTop} 
      className={`scroll-to-top ${showButton ? 'active' : null}`}
    >
      Top
    </button>
  )
}

export default ScrollToTopBtn
