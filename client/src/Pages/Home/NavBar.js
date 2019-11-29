import React from 'react';

function NavBar({ showMenu, setShowMenu, scrollTo }) {
  return (
    <div
      className={
        showMenu
          ? 'navbar-collapse navbar-collapse-clone collapse in'
          : 'navbar-collapse navbar-collapse-clone collapse'
      }
      id="main-header-collapse-clone"
    >
      <button
        type="button"
        className={
          'navbar-toggle nav-trigger style-mobile ' +
          (showMenu ? '' : ' collapsed')
        }
        onClick={() => setShowMenu(!showMenu)}
        data-toggle="collapse"
        data-target="#main-header-collapse-clone"
        aria-expanded="false"
        data-changeclassnames='{ "html": "mobile-nav-activated overflow-hidden" }'
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="bars">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
      </button>
      <div className="navbar-collapse-inner">
        <ul
          id="primary-nav"
          className="main-nav nav align-items-lg-stretch justify-content-lg-start flex-no-wrap"
          data-submenu-options='{ "toggleType":"fade", "handler":"mouse-in-out" }'
        >
          {/*eslint-disable */}
          <li>
            <a
              onClick={() => scrollTo('miningcoinRef')}
              style={{ cursor: 'pointer' }}
            >
              <span className="txt">Mining Coin</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollTo('whitepaperRef')}
              style={{ cursor: 'pointer' }}
            >
              <span className="txt">Whitepaper</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollTo('islandMiningRef')}
              style={{ cursor: 'pointer' }}
            >
              <span className="txt">Island Mining</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollTo('tokenSaleRef')}
              style={{ cursor: 'pointer' }}
            >
              <span className="txt">Token Sale</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollTo('roadmapRef')}
              style={{ cursor: 'pointer' }}
            >
              <span className="txt">Roadmap</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollTo('teamRef')}
              style={{ cursor: 'pointer' }}
            >
              <span className="txt">Team</span>
            </a>
          </li>
          <li className="desktop-hidden">
            <a href="/auth/login" data-localscroll="true">
              <span className="txt">Log In</span>
            </a>
          </li>
          <li className="desktop-hidden">
            <a href="/auth/register" data-localscroll="true">
              <span className="txt">Sign Up</span>
            </a>
          </li>
          {/*eslint-disable */}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
