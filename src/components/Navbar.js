import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// utils
import navigation from '../utils/navigation';
import breakpoints from '../utils/breakpoints';
// hooks
import useOnClickOutside from '../hooks/useOnClickOutside';
import useViewport from '../hooks/useViewport';

const Navbar = ({ headerHeight }) => {
  const ref = useRef()
  const [navHeight, setNavHeight] = useState()
  const [menuClicked, setMenuClicked] = useState(false);
  const [width] = useViewport()
  useOnClickOutside(ref, () => setMenuClicked(false))

  const handleClick = () => {
    setMenuClicked(!menuClicked);
  }

  const handleLinkClick = () => {
    setMenuClicked(false);
  }

  useEffect(() => {
    setNavHeight(ref.current.getBoundingClientRect().height) 
  }, [])

  useEffect(() => {
    const isSticky = () => {
      const scrollTop = window.scrollY

      if(scrollTop >= headerHeight - navHeight && width > breakpoints.tablet){
        ref.current.classList.add('is-sticky')
        document.querySelector(".main").style.paddingTop = "10em"
      }else {
        ref.current.classList.remove('is-sticky')
        document.querySelector(".main").style.paddingTop = "0"
      }
    }

    window.addEventListener('scroll', isSticky)
    
    return () => window.removeEventListener('scroll', isSticky)
  })

  return (
    <nav ref={ref}>
      <div 
        className="burger-menu-button"
        onClick={handleClick}
      >
        {!menuClicked 
          ? <MenuRoundedIcon sx={{ fontSize: 25 }}/> 
          : <CloseRoundedIcon fontSize="large"/>
        }
      </div>
      <div className={!menuClicked ? "inner-wrapper" : "inner-wrapper active"}>
        <ul className={!menuClicked ? "navbar" : "navbar active"}>
          {navigation.map(nav => 
            <li key={nav.id}  onClick={handleLinkClick}>
              <Link 
                className="nav-link underlined underlined--offset" 
                to={nav.path}
              >{nav.label}</Link>
            </li>
          )}

          <div className="contacts">
            <h5>Phone</h5>
            <a href="tel:0398570734">(03) 9857 0734</a>
          </div>
        </ul>
      </div>
  
    </nav>
  )
}

export default Navbar;