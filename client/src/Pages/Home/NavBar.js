import React from 'react';

function NavBar({showMenu, setShowMenu}) {
  return (
    <div
      className={showMenu ? 'navbar-collapse navbar-collapse-clone collapse in' : 'navbar-collapse navbar-collapse-clone collapse'}
      id="main-header-collapse-clone"
    >
      <button
        type="button"
        className={"navbar-toggle nav-trigger style-mobile " + (showMenu ? '' : ' collapsed')}
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
          className="main-nav nav align-items-lg-stretch justify-content-lg-start"
          data-submenu-options='{ "toggleType":"fade", "handler":"mouse-in-out" }'
        >
          <li>
            <a href="#miningcoin" data-localscroll="true">
              <span className="txt">Mining Coin</span>
            </a>
          </li>
          <li>
            <a href="#whitepaper" data-localscroll="true">
              <span className="txt">Whitepaper</span>
            </a>
          </li>
          <li>
            <a href="#islandmining" data-localscroll="true">
              <span className="txt">Island Mining</span>
            </a>
          </li>
          <li>
            <a href="#works" data-localscroll="true">
              <span className="txt">Token Sale</span>
            </a>
          </li>
          <li>
            <a href="#roadmap" data-localscroll="true">
              <span className="txt">Roadmap</span>
            </a>
          </li>
          <li>
            <a href="#team" data-localscroll="true">
              <span className="txt">Team</span>
            </a>
          </li>
          <li className="desktop-hidden">
            <a href="/login" data-localscroll="true">
              <span className="txt">Log In</span>
            </a>
          </li>
          <li className="desktop-hidden">
            <a href="/register" data-localscroll="true">
              <span className="txt">Sign Up</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
