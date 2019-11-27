import React from 'react';
import FancyScrollAnimation from './FancyScrollAnimation';
import falcon_4000 from '../../assets/media/falcon-4000.png';
import bg77 from '../../assets/demo/bg/bg-77.svg';

import { Parallax } from 'react-scroll-parallax';


function IslandMining() {
  return (

    <section
      className="vc_row pt-90 pb-20 bg-no-repeat"
      id="islandmining"
      style={{
        backgroundImage: `url(${bg77})`,
        backgroundPosition: '500% 0%'
      }}
    >

      <div className="container">
        <div className="row d-flex flex-wrap align-items-center">
          <div
            className="lqd-column col-md-5 mb-30"
            data-custom-animations={false}
            data-ca-options='{"triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1600", "delay":"160", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":30, "opacity":0}, "animations":{"translateY":0, "opacity":1}}'
          >
            <header className="fancy-title pr-md-4">
              <h6 className="text-uppercase">Cloud Mining</h6>
              <h2>
                <strong>start mining passively</strong> with Island Mining
              </h2>
            </header>

            <p className="font-size-18 lh-15 mb-55">
              Mining Coin (MNT) token holders share access to Island Mining’s
              hashing power. MNT holders receive a percentage of hashing power
              produced by our facility, based on how many MNT tokens they
              currently hold.
              <br />
              <br />
              Through IslandEX Exchange, trade cryptocurrency for fiat. Hold
              cash at IslandEX or one of our affiliate banks and use a prepaid
              debit card to easily spend earnings.
            </p>
          </div>
          <div className="lqd-column col-md-3 col-md-offset-1">

            <div
              className="lqd-column-inner"
            >
                <Parallax className="custom-class" y={[-10, 10]}>
                  <div className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating">
                    <div className="iconbox-icon-wrap">
                      <span className="iconbox-icon-container mb-35">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="42.375"
                          height="45.188"
                          viewBox="0 0 42.375 45.188"
                        >
                          <defs xmlns="http://www.w3.org/2000/svg">
                            <linearGradient
                              gradientUnits="userSpaceOnUse"
                              id="grad909202"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#f42958" />
                              <stop offset="100%" stopColor="#f42958" />
                            </linearGradient>
                          </defs>
                          <defs>
                            <filter
                              id="filter-seo-icon-4"
                              x="0.813"
                              y="0"
                              width="42.375"
                              height="45.188"
                              filterUnits="userSpaceOnUse"
                            >
                              <feImage
                                preserveAspectRatio="none"
                                x="0.8125"
                                y="0"
                                width="42.375"
                                height="45.188"
                                result="image"
                                xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDIuMzc1IiBoZWlnaHQ9IjQ1LjE4OCIgdmlld0JveD0iMCAwIDQyLjM3NSA0NS4xODgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB5MT0iMjIuNTk0IiB4Mj0iNDIuMzc1IiB5Mj0iMjIuNTk0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZlNTA2YyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYzZhMmEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjQyLjM3NSIgaGVpZ2h0PSI0NS4xODgiLz4KPC9zdmc+Cg=="
                              />
                              <feComposite
                                result="composite"
                                operator="in"
                                in2="SourceGraphic"
                              />
                              <feBlend result="blend" in2="SourceGraphic" />
                            </filter>
                          </defs>
                          <path
                            fill="#fd5c4c"
                            filter="url(#filter-seo-icon-4)"
                            d="M26.313,28.406l-8.531-5.719L9.25,28.406V0H26.313V28.406h0Zm-14.25-5.25,5.719-3.937L23.5,23.156V2.813H12.063V23.156h0ZM43.188,2.813H29.031V5.625H40.375v36.75H3.625V5.625H6.438V2.813H0.813V45.188H43.188V2.813h0Z"
                            transform="translate(-0.813)"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="contents">
                      <h3>Cutting Edge Equipment</h3>
                      <p className="font-size-16 lh-165">
                        Island Mining is constantly developing new ASIC machines,
                        with efficiency as our top priority. Users will never be
                        reliant on outdated miners.
                      </p>
                    </div>
                  </div>
                  <div className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating">
                    <div className="iconbox-icon-wrap">
                      <span className="iconbox-icon-container mb-35">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="42.375"
                          viewBox="0 0 48 42.375"
                        >
                          <defs xmlns="http://www.w3.org/2000/svg">
                            <linearGradient
                              gradientUnits="userSpaceOnUse"
                              id="grad179776"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#f42958" />
                              <stop offset="100%" stopColor="#f42958" />
                            </linearGradient>
                          </defs>
                          <defs>
                            <filter
                              id="filter-seo-icon-6"
                              x="0"
                              y="0.813"
                              width="48"
                              height="42.375"
                              filterUnits="userSpaceOnUse"
                            >
                              <feImage
                                preserveAspectRatio="none"
                                x="0"
                                y="0.8125"
                                width="48"
                                height="42.375"
                                result="image"
                                xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDIuMzc1IiB2aWV3Qm94PSIwIDAgNDggNDIuMzc1Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI2xpbmVhci1ncmFkaWVudCk7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjIxLjE4OCIgeDI9IjQ4IiB5Mj0iMjEuMTg4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZlNTA2YyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYzZhMmEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQyLjM3NSIvPgo8L3N2Zz4K"
                              />
                              <feComposite
                                result="composite"
                                operator="in"
                                in2="SourceGraphic"
                              />
                              <feBlend result="blend" in2="SourceGraphic" />
                            </filter>
                          </defs>
                          <path
                            fill="#fd5c4c"
                            filter="url(#filter-seo-icon-6)"
                            d="M0,0.813H48V43.188H0V0.813H0ZM45.188,9.25V3.625H37.781L44.438,9.25h0.75ZM24.656,17.781h8.25l6.656-5.625h-8.25l-6.656,5.625h0ZM19.219,9.25h8.25L20.813,3.625h-8.25L19.219,9.25h0ZM27,12.156H18.75l-6.656,5.625h8.25L27,12.156h0ZM31.781,9.25h8.25L33.375,3.625h-8.25L31.781,9.25h0ZM2.813,3.625V9.25h12L8.156,3.625H2.813Zm0,8.531v5.625H7.688l6.656-5.625H2.813ZM45.188,40.375V20.594H2.813V40.375H45.188Zm0-22.594V12.156H43.969l-6.656,5.625h7.875Z"
                            transform="translate(0 -0.813)"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="contents">
                      <h3>Secure Facilities</h3>
                      <p className="font-size-16 lh-165">
                        We employ the highest standards of security in our
                        facilities, with our security team formerly developing
                        software for the US Department of Defense.
                      </p>
                    </div>
                  </div>
                </Parallax>
            </div>
          </div>
          <div className="lqd-column col-md-3">
            <div
              className="lqd-column-inner"
            >
                <Parallax className="custom-class" y={[10, -10]}>
                  <div className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating">
                    <div className="iconbox-icon-wrap">
                      <span className="iconbox-icon-container mb-35">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31.219"
                          height="48"
                          viewBox="0 0 31.219 48"
                        >
                          <defs xmlns="http://www.w3.org/2000/svg">
                            <linearGradient
                              gradientUnits="userSpaceOnUse"
                              id="grad249375"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#f42958" />
                              <stop offset="100%" stopColor="#f42958" />
                            </linearGradient>
                          </defs>
                          <defs>
                            <filter
                              id="filter-seo-icon-5"
                              x="0.344"
                              y="0"
                              width="31.219"
                              height="48"
                              filterUnits="userSpaceOnUse"
                            >
                              <feImage
                                preserveAspectRatio="none"
                                x="0.34375"
                                y="0"
                                width="31.219"
                                height="48"
                                result="image"
                                xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzEuMjE5IiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMzEuMjE5IDQ4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI2xpbmVhci1ncmFkaWVudCk7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjI0IiB4Mj0iMzEuMjE5IiB5Mj0iMjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmU1MDZjIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZjNmEyYSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzEuMjE5IiBoZWlnaHQ9IjQ4Ii8+Cjwvc3ZnPgo="
                              />
                              <feComposite
                                result="composite"
                                operator="in"
                                in2="SourceGraphic"
                              />
                              <feBlend result="blend" in2="SourceGraphic" />
                            </filter>
                          </defs>
                          <path
                            fill="#fd5c4c"
                            filter="url(#filter-seo-icon-5)"
                            d="M27.25,0a4.281,4.281,0,0,1,1.641.328,4.134,4.134,0,0,1,1.359.891,4.8,4.8,0,0,1,.938,1.359,3.026,3.026,0,0,1,.281,1.641l0.094,39.562a7.368,7.368,0,0,1-.375,1.641,3.156,3.156,0,0,1-.937,1.359,6.025,6.025,0,0,1-1.359.891A4.1,4.1,0,0,1,27.156,48H4.75a4.1,4.1,0,0,1-1.734-.328,5.993,5.993,0,0,1-1.359-.891,3.143,3.143,0,0,1-.937-1.359,7.287,7.287,0,0,1-.375-1.641L0.438,4.219A3,3,0,0,1,.719,2.578a4.77,4.77,0,0,1,.938-1.359A4.119,4.119,0,0,1,3.016.328,4.276,4.276,0,0,1,4.656,0H27.25ZM4.656,2.813a1.8,1.8,0,0,0-.562.094,0.754,0.754,0,0,0-.422.328,4.2,4.2,0,0,1-.328.469,0.514,0.514,0,0,0-.094.516L3.156,8.438H28.75L28.656,4.219A0.521,0.521,0,0,0,28.563,3.7a4,4,0,0,1-.328-0.469,0.754,0.754,0,0,0-.422-0.328,1.8,1.8,0,0,0-.562-0.094H4.656ZM28.75,11.25H3.156L3.25,33.844H28.656L28.75,11.25h0ZM27.156,45.188a1.632,1.632,0,0,0,.656-0.094,1.744,1.744,0,0,0,.422-0.328,1.436,1.436,0,0,0,.328-0.469c0.061-.155.125-0.328,0.188-0.516L28.656,36.75H3.25L3.156,43.781c0.062,0.188.125,0.36,0.188,0.516a1.392,1.392,0,0,0,.328.469,1.688,1.688,0,0,0,.422.328,1.622,1.622,0,0,0,.656.094H27.156Zm-9.75-4.219a3.6,3.6,0,0,1-.141-0.563,0.752,0.752,0,0,0-.281-0.469,1.923,1.923,0,0,0-.469-0.281,1.691,1.691,0,0,0-.609-0.094,2.045,2.045,0,0,0-.516.094,0.86,0.86,0,0,0-.469.281,3.142,3.142,0,0,0-.281.469,0.709,0.709,0,0,0-.047.563,0.592,0.592,0,0,0,.047.516,4.792,4.792,0,0,0,.281.422,1.112,1.112,0,0,0,.469.328,1.417,1.417,0,0,0,.516.141,1.177,1.177,0,0,0,.609-0.141,4.28,4.28,0,0,0,.469-0.328,0.733,0.733,0,0,0,.281-0.422,4.218,4.218,0,0,1,.141-0.516h0Z"
                            transform="translate(-0.344)"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="contents">
                      <h3>Integrated Crypto Exchange</h3>
                      <p className="font-size-16 lh-165">
                        Island Mining currently has a Non-Banking Financial
                        Institution (NBFI) in Mongolia and a banking partner in
                        Cayman Islands, which allow us to provide these services out
                        of the gate.
                      </p>
                    </div>
                  </div>
                  <div className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating">
                    <div className="iconbox-icon-wrap">
                      <span className="iconbox-icon-container mb-35">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="36.75"
                          viewBox="0 0 48 36.75"
                        >
                          <defs xmlns="http://www.w3.org/2000/svg">
                            <linearGradient
                              gradientUnits="userSpaceOnUse"
                              id="grad877332"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#f42958" />
                              <stop offset="100%" stopColor="#f42958" />
                            </linearGradient>
                          </defs>
                          <defs>
                            <filter
                              id="filter-seo-icon-7"
                              x="0"
                              y="0.625"
                              width="48"
                              height="36.75"
                              filterUnits="userSpaceOnUse"
                            >
                              <feImage
                                preserveAspectRatio="none"
                                x="0"
                                y="0.625"
                                width="48"
                                height="36.75"
                                result="image"
                                xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzYuNzUiIHZpZXdCb3g9IjAgMCA0OCAzNi43NSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHkxPSIxOC4zNzUiIHgyPSI0OCIgeTI9IjE4LjM3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZTUwNmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmM2YTJhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSI0OCIgaGVpZ2h0PSIzNi43NSIvPgo8L3N2Zz4K"
                              />
                              <feComposite
                                result="composite"
                                operator="in"
                                in2="SourceGraphic"
                              />
                              <feBlend result="blend" in2="SourceGraphic" />
                            </filter>
                          </defs>
                          <path
                            fill="#fd5c4c"
                            filter="url(#filter-seo-icon-7)"
                            d="M16.781,3.438H48V37.375H0V3.438H8.625V0.625h8.156V3.438h0ZM45.188,34.563V14.781H40.781a6.936,6.936,0,0,1,.656,1.266,12.542,12.542,0,0,1,.469,1.406q0.187,0.7.328,1.453a8.139,8.139,0,0,1,.141,1.5,11,11,0,0,1-.891,4.406,11.446,11.446,0,0,1-6.047,6.047,10.984,10.984,0,0,1-4.406.891,10.645,10.645,0,0,1-4.359-.891,11.635,11.635,0,0,1-3.562-2.437,11.482,11.482,0,0,1-2.437-3.609,10.972,10.972,0,0,1-.891-4.406,12,12,0,0,1,.094-1.5,10.585,10.585,0,0,1,.281-1.453,8.381,8.381,0,0,1,.516-1.406,9.473,9.473,0,0,1,.7-1.266H2.813V34.563H45.188ZM39.563,20.406a7.951,7.951,0,0,0-.7-3.328,9.009,9.009,0,0,0-1.828-2.672,8.347,8.347,0,0,0-2.672-1.781,8.454,8.454,0,0,0-3.328-.656,8.216,8.216,0,0,0-3.234.656,8.916,8.916,0,0,0-2.719,1.781,7.95,7.95,0,0,0-1.828,2.672,8.768,8.768,0,0,0,0,6.656,7.949,7.949,0,0,0,1.828,2.672A8.889,8.889,0,0,0,27.8,28.188a8.189,8.189,0,0,0,3.234.656,8.427,8.427,0,0,0,3.328-.656,8.323,8.323,0,0,0,2.672-1.781,9.009,9.009,0,0,0,1.828-2.672,7.947,7.947,0,0,0,.7-3.328h0Zm-1.125-8.437h6.75V6.25H2.813v5.719H23.625A10.4,10.4,0,0,1,25.266,10.8a15.889,15.889,0,0,1,1.781-.891,9.251,9.251,0,0,1,1.922-.562,11.54,11.54,0,0,1,2.062-.187,11.312,11.312,0,0,1,2.109.188,10.571,10.571,0,0,1,1.922.563,12.033,12.033,0,0,1,1.781.891,11.792,11.792,0,0,1,1.594,1.172h0Z"
                            transform="translate(0 -0.625)"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="contents">
                      <h3>Frictionless User Experience</h3>
                      <p className="font-size-16 lh-165">
                        Our partner institutions in Asia and Cayman work with
                        IslandEX to provide banking services and prepaid debit cards
                        to seamlessly convert and spend funds.
                      </p>
                    </div>
                  </div>
                </Parallax>
            </div>
          </div>

        </div>

        <div
          className="lqd-space visible-lg visible-md"
          style={{ height: '200px' }}
        />

        <div className="row d-flex flex-wrap align-items-center">
          <a href="" className="col-md-5 col-sm-12">
            <img src={falcon_4000} alt="" />
          </a>
          <div
            data-custom-animations={false}
            data-ca-options='{"triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1600", "delay":"160", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":30, "opacity":0}, "animations":{"translateY":0, "opacity":1}}'
            className="lqd-column col-md-5 col-sm-12 col-md-offset-1"
          >
            <header className="fancy-title mb-50">
              <FancyScrollAnimation className="appearHeader" childrenClassNames="animateHeaders">
                <h6 className="text-uppercase">Mining Innovation</h6>
                <h2>
                we're creating the
                <strong> next generation mining machine</strong>
                </h2>
              </FancyScrollAnimation>
            </header>

            <FancyScrollAnimation className="appearText" childrenClassNames="animateHeaders">
              <p className="font-size-30 lh-105">
              <i>Our mandate is to bring crypto mining into every home.</i>
              </p>

              <p className="font-size-18 lh-15 mb-55">
              Our liquid-immersion cooled mining machines are easy to use,
              silent, and more energy efficient than existing machines on the
              market.
              </p>
            </FancyScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IslandMining;
