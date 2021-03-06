import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import im_logo_mail_sm from '../../assets/media/im_logo_mail_sm.png';

function Header({ showMenu, setShowMenu, scrollTo }) {
  const {
    auth: { user }
  } = useSelector(state => state.rootReducer);

  return (
    <header className="main-header main-header-overlay">
      <div className="mainbar-wrap">
        <div className="megamenu-hover-bg"></div>
        <div className="container-fluid mainbar-container">
          <div className="mainbar">
            <div
              className="row mainbar-row align-items-lg-stretch px-4"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="col-auto">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/" rel="home">
                    <span className="navbar-brand-inner">
                      <img
                        style={{ width: '300px' }}
                        className="logo-dark"
                        src={im_logo_mail_sm}
                        alt="Island Mining"
                      />
                      <img
                        style={{ width: '300px' }}
                        className="logo-sticky"
                        src={im_logo_mail_sm}
                        alt="Island Mining"
                      />
                      <img
                        style={{ width: '300px' }}
                        className="mobile-logo-default"
                        src={im_logo_mail_sm}
                        alt="Island Mining"
                      />
                      <img
                        style={{ width: '300px' }}
                        className="logo-default"
                        src={im_logo_mail_sm}
                        alt="Island Mining"
                      />
                    </span>
                  </a>
                  <button
                    type="button"
                    className={
                      'navbar-toggle nav-trigger style-mobile mobile-nav-trigger-cloned' +
                      (showMenu ? '' : ' collapsed')
                    }
                    data-toggle="collapse"
                    data-target="#main-header-collapse-clone"
                    aria-expanded="false"
                    data-changeclassnames='{ "html": "mobile-nav-activated overflow-hidden" }'
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span
                      className="bars"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col">
                <div
                  className="collapse navbar-collapse"
                  id="main-header-collapse"
                >
                  <button
                    type="button"
                    className="navbar-toggle collapsed nav-trigger style-mobile"
                    data-toggle="collapse"
                    data-target="#main-header-collapse"
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
                  <ul
                    id="primary-nav"
                    style={{ flexWrap: 'nowrap', color: '#000' }}
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
                    {/*eslint-enable */}
                  </ul>
                </div>
              </div>
              {!user && (
                <div className="col text-right">
                  <div className="header-module">
                    <Link
                      to="/auth/login"
                      className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin px-2"
                    >
                      <span>
                        <span className="btn-txt">Log In</span>
                      </span>
                    </Link>
                  </div>
                  <div className="header-module">
                    <Link
                      to="/auth/register"
                      className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin px-2"
                    >
                      <span>
                        <span className="btn-txt">Sign Up</span>
                      </span>
                    </Link>
                  </div>
                </div>
              )}
              {user && (
                <div className="col text-right">
                  <div className="header-module">
                    <a
                      href="/dashboard"
                      className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin px-2"
                    >
                      <span>
                        <span className="btn-txt">
                          Logged in as {user.username}
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="header-module"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
