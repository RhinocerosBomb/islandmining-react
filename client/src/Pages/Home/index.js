import React, { useState, useEffect, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import NavBar from './NavBar';

import '../../assets/vendors/liquid-icon/liquid-icon.min.css';
import '../../assets/vendors/font-awesome/css/font-awesome.min.css';
import '../../assets/theme-vendors.min.css';
import '../../assets/vendors/theme.min.css';
import '../../assets/vendors/themes/seo.css';
import './animations.css';

export default function() {
  const [showMenu, setShowMenu] = useState(false);
  const HTMLElem = useRef(document.documentElement);
  const refs = {
    miningcoinRef: useRef(null),
    whitepaperRef: useRef(null),
    islandMiningRef: useRef(null),
    tokenSaleRef: useRef(null),
    roadmapRef: useRef(null),
    teamRef: useRef(null)
  };

  const scrollTo = target => {
    refs[target].current.scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (showMenu) {
      HTMLElem.current.classList.add('mobile-nav-activated', 'overflow-hidden');
    } else {
      HTMLElem.current.classList.remove(
        'mobile-nav-activated',
        'overflow-hidden'
      );
    }
  }, [showMenu]);

  return (
    <ParallaxProvider>
      <div
        data-mobile-nav-trigger-alignment="right"
        data-mobile-nav-align="left"
        data-mobile-nav-style="modern"
        data-mobile-nav-shceme="gray"
        data-mobile-header-scheme="gray"
        data-mobile-nav-breakpoint="1199"
      >
        <div id="wrap" className={showMenu ? 'showMenu' : null}>
          <Header
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            scrollTo={scrollTo}
          />
          <Body refs={refs}/>
          <Footer scrollTo={scrollTo} />
        </div>
        <NavBar showMenu={showMenu} setShowMenu={setShowMenu} scrollTo={scrollTo}/>
      </div>
    </ParallaxProvider>
  );
}
