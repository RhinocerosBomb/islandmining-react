import React from 'react';
import {Link} from 'react-router-dom'
import im_logo_mail_sm from '../../assets/media/im_logo_mail_sm.png';

function Header({showMenu, setShowMenu}) {
  return (
    <header className="main-header main-header-overlay">
      <div className="mainbar-wrap">
        <div className="megamenu-hover-bg"></div>
        <div className="container-fluid mainbar-container">
          <div className="mainbar">
            <div className="row mainbar-row align-items-lg-stretch px-4" style={{flexWrap: "wrap"}}>
              <div className="col-auto">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/" rel="home">
              <span className="navbar-brand-inner">
                <img style={{width: "300px"}} className="logo-dark" src={im_logo_mail_sm}
                     alt="Island Mining"/>
                <img style={{width: "300px"}} className="logo-sticky" src={im_logo_mail_sm}
                     alt="Island Mining"/>
                <img style={{width: "300px"}} className="mobile-logo-default" src={im_logo_mail_sm}
                     alt="Island Mining"/>
                <img style={{width: "300px"}} className="logo-default" src={im_logo_mail_sm}
                     alt="Island Mining"/>
              </span>
                  </a>
                  <button type="button"
                          className={"navbar-toggle nav-trigger style-mobile mobile-nav-trigger-cloned" + (showMenu ? '' : ' collapsed')}
                          data-toggle="collapse" data-target="#main-header-collapse-clone" aria-expanded="false"
                          data-changeclassnames="{ &quot;html&quot;: &quot;mobile-nav-activated overflow-hidden&quot; }">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="bars" onClick={() => setShowMenu(!showMenu)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </span>
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="collapse navbar-collapse" id="main-header-collapse">
                  <button type="button" className="navbar-toggle collapsed nav-trigger style-mobile"
                          data-toggle="collapse" data-target="#main-header-collapse" aria-expanded="false"
                          data-changeclassnames="{ &quot;html&quot;: &quot;mobile-nav-activated overflow-hidden&quot; }">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="bars">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </span>
                  </button>
                  <ul id="primary-nav" className="main-nav nav align-items-lg-stretch justify-content-lg-start"
                      data-submenu-options="{ &quot;toggleType&quot;:&quot;fade&quot;, &quot;handler&quot;:&quot;mouse-in-out&quot; }">
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
                  </ul>
                </div>
              </div>
              <div className="col text-right">
                <div className="header-module">
                  <Link to="/login" className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin px-2">
                    <span>
                      <span className="btn-txt">Log In</span>
                    </span>
                  </Link>
                </div>
                <div className="header-module">
                  <Link to="/register" className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin px-2">
                    <span>
                      <span className="btn-txt">Sign Up</span>
                    </span>
                  </Link>
                </div>
              </div>
              {/*<div className="col text-right">*/}
                {/*<div className="header-module">*/}

                  {/*<a href="/dashboard"*/}
                     {/*className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin px-2">*/}
                {/*<span>*/}
                  {/*<span className="btn-txt">Logged in as aaa@gmail.com</span>*/}
                {/*</span>*/}
                  {/*</a>*/}
                {/*</div>*/}
                {/*<div className="header-module">*/}
                {/*</div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
