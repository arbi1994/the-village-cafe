import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// utils
import navigation from '../utils/navigation';
// hooks
import useViewport from '../hooks/useViewport';

const Navbar = ({ headerHeight, menuClicked, handleClick }) => {
  const ref = useRef()
  const [width, height] = useViewport()
  const [navHeight, setNavHeight] = useState(undefined)

  useEffect(() => {
    setNavHeight(ref.current.getBoundingClientRect().height) 
  }, [width, height])

  useEffect(() => {
    const isSticky = () => {
      const scrollTop = window.scrollY
  
      scrollTop >= headerHeight - navHeight
      ? ref.current.classList.add('is-sticky') 
      : ref.current.classList.remove('is-sticky')
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
            <li onClick={handleClick}>
              <Link 
                className="nav-link underlined underlined--offset" 
                key={nav.id} 
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