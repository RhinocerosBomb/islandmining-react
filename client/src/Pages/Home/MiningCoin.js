import React, { useLayoutEffect } from 'react';
import FancyScrollAnimation from './FancyScrollAnimation';

import { Parallax, useController } from 'react-scroll-parallax';

import whitepaper_sct from '../../assets/media/whitepaper-sct.jpg';
import whitepaper_2nd from '../../assets/media/whitepaper-2nd.jpg';
import bg76 from '../../assets/demo/bg/bg-76.svg';

function MiningCoin({ miningcoinRef, whitepaperRef }) {
  const { parallaxController } = useController();
  useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener('load', handler);
    return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  return (
    <section
      className="vc_row bg-no-repeat pt-10 pb-150"
      id="miningcoin"
      style={{
        backgroundImage: `url(${bg76})`,
        backgroundPosition: '-90% 80%'
      }}
      ref={miningcoinRef}
    >
      <div className="container">
        <div className="row ca-initvalues-applied">
          <FancyScrollAnimation classNames="appearBottomText">
            <div className="lqd-column col-md-12 mb-60 will-change">
              <header className="fancy-title">
                <h6 className="text-uppercase">Introducing Mining Coin</h6>
                <h2>
                  <strong>the simple token</strong> with a real use
                </h2>
              </header>
            </div>
          </FancyScrollAnimation>

          <FancyScrollAnimation classNames="appearBottomText">
            <div className="lqd-column col-md-4 will-change onDiv">
              <div className="iconbox text-left iconbox-xl iconbox-icon-image iconbox-shadow border-radius-5 px-5 pt-40 pb-55 mr-md-4 iconbox-icon-animating">
                <div className="iconbox-icon-wrap">
                  <span className="iconbox-icon-container mb-35">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80.16"
                      viewBox="0 0 80 80.16"
                    >
                      <defs xmlns="http://www.w3.org/2000/svg">
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="grad946249"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#f42958" />
                          <stop offset="100%" stopColor="#f42958" />
                        </linearGradient>
                      </defs>
                      <defs xmlns="http://www.w3.org/2000/svg">
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="grad231243"
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
                          id="filter-seo-icon-1"
                          x="427.5"
                          y="1555"
                          width="80"
                          height="80.16"
                          filterUnits="userSpaceOnUse"
                        >
                          <feImage
                            preserveAspectRatio="none"
                            x="427.5"
                            y="1555"
                            width="80"
                            height="80.16"
                            result="image"
                            xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODAiIGhlaWdodD0iODAuMTYiIHZpZXdCb3g9IjAgMCA4MCA4MC4xNiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHkxPSI0MC4wOCIgeDI9IjgwIiB5Mj0iNDAuMDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmU1MDZjIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZjNmEyYSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iODAiIGhlaWdodD0iODAuMTYiLz4KPC9zdmc+Cg=="
                          ></feImage>
                          <feComposite
                            result="composite"
                            operator="in"
                            in2="SourceGraphic"
                          ></feComposite>
                          <feBlend result="blend" in2="SourceGraphic" />
                        </filter>
                      </defs>
                      <path
                        fill="#fd5c4c"
                        filter="url(#filter-seo-icon-1)"
                        d="M497.812,1583.44l9.688-.16v14.22l-14.063-.16v-11.09a20.127,20.127,0,0,0-6.562-2.27,37.855,37.855,0,0,0-6.875-.46,20.742,20.742,0,0,0-6.8,1.32,34.408,34.408,0,0,0-6.328,3.13,4.479,4.479,0,0,1,.234.55,5.359,5.359,0,0,1,.157.62,3.458,3.458,0,0,1,.078.63v0.7a7.3,7.3,0,0,1-.547,2.65,5.916,5.916,0,0,1-1.485,2.27,9.192,9.192,0,0,1-2.265,1.49,5.015,5.015,0,0,1-2.735.46,0.331,0.331,0,0,1-.39.08,0.752,0.752,0,0,0-.469,0,0.333,0.333,0,0,1-.391-0.08,0.2,0.2,0,0,0-.312,0,14.921,14.921,0,0,0-1.328,2.74c-0.366.99-.679,1.95-0.938,2.89a17.434,17.434,0,0,0-.547,3.05c-0.1,1.09-.156,2.1-0.156,3.04a27.029,27.029,0,0,0,.156,2.97,16.708,16.708,0,0,0,.625,2.97q0.469,1.56,1.016,2.97t1.328,3.12l10.938-.15v14.22l-14.063-.16v-9.84c-0.522-.84-1.042-1.77-1.562-2.82a26.385,26.385,0,0,1-1.485-3.75,42.767,42.767,0,0,1-1.172-4.45,25.175,25.175,0,0,1-.468-5.08c0-.73.024-1.56,0.078-2.5a20.267,20.267,0,0,1,.312-2.65c0.157-.84.364-1.72,0.625-2.66a19.488,19.488,0,0,1,.86-2.5l-12.188,11.87c0.208,0.42.337,0.71,0.391,0.86s0.129,0.4.234,0.71a2.763,2.763,0,0,1,.156.86v0.86a7.132,7.132,0,0,1-.546,2.73,6.911,6.911,0,0,1-1.485,2.27,8.55,8.55,0,0,1-2.187,1.56,8.417,8.417,0,0,1-5.547,0,8.119,8.119,0,0,1-2.266-1.56,6.861,6.861,0,0,1-1.484-2.27,7.078,7.078,0,0,1-.547-2.73,6.412,6.412,0,0,1,.547-2.74,9.959,9.959,0,0,1,1.484-2.26,5.307,5.307,0,0,1,2.266-1.57,12.14,12.14,0,0,1,2.734-.62,2.727,2.727,0,0,0,.781.16,2,2,0,0,1,.7.15,1.975,1.975,0,0,0,.781.16,0.967,0.967,0,0,1,.7.31l15.937-16.09a1.415,1.415,0,0,1-.156-0.39v-0.55a6.906,6.906,0,0,1,.547-2.81,8.069,8.069,0,0,1,1.484-2.27,5.481,5.481,0,0,1,2.266-1.48,12.158,12.158,0,0,1,2.734-.63,0.252,0.252,0,0,0,.313.08,0.343,0.343,0,0,1,.312,0,0.345,0.345,0,0,0,.313,0,0.251,0.251,0,0,1,.312.08L479.844,1565a1.159,1.159,0,0,1-.235-0.62c-0.053-.32-0.1-0.58-0.156-0.79s-0.1-.44-0.156-0.7a3.433,3.433,0,0,1-.078-0.7,6.89,6.89,0,0,1,.547-2.81,7.275,7.275,0,0,1,1.562-2.27,6.387,6.387,0,0,1,2.266-1.49,10.887,10.887,0,0,1,2.656-.62,11.11,11.11,0,0,1,2.812.62,6.431,6.431,0,0,1,2.266,1.49,7.4,7.4,0,0,1,1.563,2.27,6.956,6.956,0,0,1,.546,2.81,7.132,7.132,0,0,1-.546,2.73,5.6,5.6,0,0,1-1.563,2.19,11.231,11.231,0,0,1-2.266,1.48,4.967,4.967,0,0,1-2.812.47,1.236,1.236,0,0,1-.781.08c-0.313-.05-0.6-0.1-0.86-0.16a2.858,2.858,0,0,1-.7-0.23,6.217,6.217,0,0,0-.781-0.31l-12.031,12.03a24.19,24.19,0,0,0,2.5-.78,11.375,11.375,0,0,1,2.578-.63c0.884-.1,1.8-0.21,2.734-0.31a11.785,11.785,0,0,1,2.656,0,17.587,17.587,0,0,1,4.3.23c1.407,0.27,2.786.55,4.141,0.86a19.328,19.328,0,0,1,3.984,1.41c1.3,0.63,2.578,1.3,3.828,2.03h0v0.16Zm-11.562-23.75a7.718,7.718,0,0,1-.859.23,1.189,1.189,0,0,0-.7.55c-0.209.31-.39,0.57-0.546,0.78a1.554,1.554,0,0,0-.235.94,2.38,2.38,0,0,0,.235.86,1.92,1.92,0,0,0,.546.78c0.208,0.15.442,0.31,0.7,0.47a1.024,1.024,0,0,0,.859.08,1.363,1.363,0,0,0,1.016-.08c0.258-.16.493-0.32,0.7-0.47a1.95,1.95,0,0,0,.547-0.78,2.4,2.4,0,0,0,.234-0.86,1.561,1.561,0,0,0-.234-0.94q-0.236-.315-0.547-0.78a1.2,1.2,0,0,0-.7-0.55c-0.262-.05-0.6-0.13-1.016-0.23h0Zm-51.719,56.72c0.313-.11.625-0.21,0.938-0.32a1.62,1.62,0,0,0,.781-0.54,4.114,4.114,0,0,0,.469-0.71,2.675,2.675,0,0,0,.156-1.09,2.606,2.606,0,0,0-.156-0.78,1.382,1.382,0,0,0-.469-0.7c-0.21-.16-0.469-0.34-0.781-0.55a1.043,1.043,0,0,0-.938-0.16,0.868,0.868,0,0,0-.859.16,7.771,7.771,0,0,1-.781.55,1.213,1.213,0,0,0-.547.7,2.52,2.52,0,0,0-.157.78,2.619,2.619,0,0,0,.157,1.09,2.764,2.764,0,0,0,.547.71,2.268,2.268,0,0,0,.781.54c0.259,0.11.547,0.21,0.859,0.32h0Zm25.938,9.21v4.85l4.687-.16v-4.53l-4.687-.16h0Zm-0.157-32.81a6.411,6.411,0,0,1,.938-0.23,1.169,1.169,0,0,0,.781-0.55,7.424,7.424,0,0,0,.469-0.78,2.2,2.2,0,0,0,.156-0.94,3.433,3.433,0,0,0-.156-0.86,1.466,1.466,0,0,0-.469-0.78,6.263,6.263,0,0,0-.781-0.47,5.533,5.533,0,0,0-1.875,0,5.981,5.981,0,0,0-.781.47,1.442,1.442,0,0,0-.469.78,3.343,3.343,0,0,0-.156.86,2.172,2.172,0,0,0,.156.94,6.789,6.789,0,0,0,.469.78,1.16,1.16,0,0,0,.781.55,6.4,6.4,0,0,1,.937.23h0Zm42.5-.15v-4.54l-4.687-.15v4.84l4.687-.15h0Z"
                        transform="translate(-427.5 -1555)"
                      />
                    </svg>
                  </span>
                </div>
                <div className="contents">
                  <h3>Passive Mining</h3>
                  <p>
                    <span style={{ fontSize: '18px', lineHeight: '30px' }}>
                      Token holders share access to Island Mining’s hashing
                      power based on their MNT holdings.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="lqd-column col-md-4 will-change seDiv">
              <div className="iconbox text-left iconbox-xl iconbox-icon-image iconbox-shadow border-radius-5 px-5 pt-40 pb-55 mx-md-2 iconbox-icon-animating">
                <div className="iconbox-icon-wrap">
                  <span className="iconbox-icon-container mb-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="79.5"
                      height="70.625"
                      viewBox="0 0 79.5 70.625"
                    >
                      <defs xmlns="http://www.w3.org/2000/svg">
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="grad787375"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#f42958" />
                          <stop offset="100%" stopColor="#f42958" />
                        </linearGradient>
                      </defs>
                      <defs xmlns="http://www.w3.org/2000/svg">
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="grad797996"
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
                          id="filter-seo-icon-2"
                          x="-0.5"
                          y="0.688"
                          width="80"
                          height="70.625"
                          filterUnits="userSpaceOnUse"
                        >
                          <feImage
                            preserveAspectRatio="none"
                            x="-0.5"
                            y="0.6875"
                            width="80"
                            height="70.625"
                            result="image"
                            xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODAiIGhlaWdodD0iNzAuNjI1IiB2aWV3Qm94PSIwIDAgODAgNzAuNjI1Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI2xpbmVhci1ncmFkaWVudCk7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjM1LjMxMyIgeDI9IjgwIiB5Mj0iMzUuMzEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZlNTA2YyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYzZhMmEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjgwIiBoZWlnaHQ9IjcwLjYyNSIvPgo8L3N2Zz4K"
                          ></feImage>
                          <feComposite
                            result="composite"
                            operator="in"
                            in2="SourceGraphic"
                          ></feComposite>
                          <feBlend result="blend" in2="SourceGraphic" />
                        </filter>
                      </defs>
                      <path
                        fill="#fd5c4c"
                        filter="url(#filter-seo-icon-2)"
                        d="M-0.5.688h80V71.313h-80V0.688h0ZM74.813,5.375H4.188V19.594H74.813V5.375h0ZM4.188,66.625H74.813V24.281H4.188V66.625h0ZM32.469,14.75V10.063H27.781V14.75h4.688Zm-9.375,0V10.063H18.25V14.75h4.844Zm-9.531,0V10.063H8.875V14.75h4.688Z"
                        transform="translate(0 -0.688)"
                      />
                    </svg>
                  </span>
                </div>
                <div className="contents">
                  <h3>Hashing-power Backed</h3>
                  <p>
                    <span style={{ fontSize: '18px', lineHeight: '30px' }}>
                      MNT is backed by production from our cutting-edge SHA-256
                      ASIC miners at our mining facilities.{' '}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="lqd-column col-md-4 will-change thDiv">
              <div className="iconbox text-left iconbox-xl iconbox-icon-image iconbox-shadow border-radius-5 px-5 pt-40 pb-55 ml-md-4 iconbox-icon-animating">
                <div className="iconbox-icon-wrap">
                  <span className="iconbox-icon-container mb-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70.625"
                      height="70.781"
                      viewBox="0 0 70.625 70.781"
                    >
                      <defs xmlns="http://www.w3.org/2000/svg">
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="grad85364"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#f42958" />
                          <stop offset="100%" stopColor="#f42958" />
                        </linearGradient>
                      </defs>
                      <defs xmlns="http://www.w3.org/2000/svg">
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="grad51784"
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
                          id="filter-seo-icon-3"
                          x="0.688"
                          y="0.844"
                          width="70.625"
                          height="70.781"
                          filterUnits="userSpaceOnUse"
                        >
                          <feImage
                            preserveAspectRatio="none"
                            x="0.6875"
                            y="0.84375"
                            width="70.625"
                            height="70.781"
                            result="image"
                            xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzAuNjI1IiBoZWlnaHQ9IjcwLjc4MSIgdmlld0JveD0iMCAwIDcwLjYyNSA3MC43ODEiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB5MT0iMzUuMzkxIiB4Mj0iNzAuNjI1IiB5Mj0iMzUuMzkxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZlNTA2YyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYzZhMmEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjcwLjYyNSIgaGVpZ2h0PSI3MC43ODEiLz4KPC9zdmc+Cg=="
                          ></feImage>
                          <feComposite
                            result="composite"
                            operator="in"
                            in2="SourceGraphic"
                          ></feComposite>
                          <feBlend result="blend" in2="SourceGraphic" />
                        </filter>
                      </defs>
                      <path
                        fill="#fd5c4c"
                        filter="url(#filter-seo-icon-3)"
                        d="M66.625,1l4.688-.156V33.031a27.893,27.893,0,0,1-5.234,16.875A53.011,53.011,0,0,1,54.516,61.7a64.035,64.035,0,0,1-11.875,7.031,48.6,48.6,0,0,1-6.016,2.422l-0.781.469-0.781-.469a46.212,46.212,0,0,1-5.937-2.5,69.232,69.232,0,0,1-11.8-7.109A51.606,51.606,0,0,1,5.844,49.75,27.681,27.681,0,0,1,.688,33.188V0.844L5.375,1A13.835,13.835,0,0,0,6.469,6.313a13.055,13.055,0,0,0,3.047,4.531,16.093,16.093,0,0,0,4.531,3.047,11.706,11.706,0,0,0,5.547,1.016,11.314,11.314,0,0,0,5.391-1.016,16.128,16.128,0,0,0,4.531-3.047,13.122,13.122,0,0,0,3.047-4.531A13.881,13.881,0,0,0,33.656,1l4.688-.156a13.473,13.473,0,0,0,1.094,5.469,15.322,15.322,0,0,0,3.047,4.531,12.631,12.631,0,0,0,4.531,3.047,17.125,17.125,0,0,0,5.391,1.172,17.467,17.467,0,0,0,5.547-1.172,12.653,12.653,0,0,0,4.531-3.047,15.416,15.416,0,0,0,3.047-4.531A13.513,13.513,0,0,0,66.625.844V1ZM5.375,33.188A22.527,22.527,0,0,0,8.734,45.219a42.637,42.637,0,0,0,7.891,9.531,54.624,54.624,0,0,0,9.3,6.8,74.47,74.47,0,0,0,7.734,3.984V13.344a36.77,36.77,0,0,1-2.891,2.578,12.98,12.98,0,0,1-3.437,2.031,39.431,39.431,0,0,1-3.75,1.25,11.369,11.369,0,0,1-3.984.391,12,12,0,0,1-4.141-.391,38.983,38.983,0,0,1-3.75-1.25A12.77,12.77,0,0,1,8.344,16a35.726,35.726,0,0,1-2.969-2.656V33.188Zm61.25-.156V13.188A14.9,14.9,0,0,1,63.656,16,23.5,23.5,0,0,1,60.3,17.953a15.787,15.787,0,0,1-3.75,1.25,32.759,32.759,0,0,1-4.141.547,32.778,32.778,0,0,1-3.984-.547,13.916,13.916,0,0,1-3.75-1.328,36.985,36.985,0,0,1-3.437-2.031,12.647,12.647,0,0,1-2.891-2.656V65.531q2.966-1.406,7.812-3.984a46.007,46.007,0,0,0,9.375-6.719A43.374,43.374,0,0,0,63.344,45.3a23.412,23.412,0,0,0,3.281-12.422v0.156Z"
                        transform="translate(-0.688 -0.844)"
                      />
                    </svg>
                  </span>
                </div>
                <div className="contents">
                  <h3>Derisking Bitcoin</h3>
                  <p>
                    <span style={{ fontSize: '18px', lineHeight: '30px' }}>
                      Eliminating the need to invest in costly mining equipment
                      with no guarantee of return.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </FancyScrollAnimation>
        </div>
        <div
          className="lqd-space visible-lg visible-md"
          style={{ height: '200px' }}
        />
        <div
          className="row d-flex flex-wrap align-items-center"
          id="whitepaper"
          ref={whitepaperRef}
        >
          <div className="lqd-column col-md-6">
            <div
              className="liquid-img-group-container lqd-parallax-images-8 ca-initvalues-applied"
              data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview", "animationTarget":".liquid-img-group-single", "duration":"1600", "delay":"160", "easing":"easeOutQuint", "direction":"backward", "initValues":{"translateX":-85, "opacity":0}, "animations":{"translateX":0, "opacity":1}}'
            >
              <div className="liquid-img-group-inner">
                <div
                  className="liquid-img-group-single is-in-view"
                  data-shadow-style="4"
                  data-roundness="8"
                  data-inview="true"
                  data-animate-shadow="false"
                >
                  <FancyScrollAnimation classNames="appearLeft">
                    <div className="lqd-column will-change">
                      <div className="liquid-img-group-img-container ">
                        <div className="liquid-img-container-inner">
                          <figure>
                            <a href="https://docsend.com/view/y87qbwm">
                              <img
                                src={whitepaper_2nd}
                                alt="Working with Ave"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </FancyScrollAnimation>
                </div>
                <div
                  className="liquid-img-group-single is-in-view"
                  data-shadow-style="4"
                  data-roundness="8"
                  data-inview="true"
                  data-animate-shadow="true"
                >
                  <FancyScrollAnimation classNames="appearLeft">
                    <div className="lqd-column will-change">
                      <div className="liquid-img-group-img-container">
                        <div className="liquid-img-container-inner">
                          <figure>
                            <a href="https://docsend.com/view/y87qbwm">
                              <Parallax
                                className="custom-class"
                                y={[20, 0]}
                                x={[-2, 2]}
                              >
                                <img
                                  src={whitepaper_sct}
                                  alt="Working with Ave2"
                                />
                              </Parallax>
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </FancyScrollAnimation>
                </div>
              </div>
            </div>
          </div>
          <div
            data-custom-animations="true"
            data-ca-options='{"triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1600", "delay":"160", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":30, "opacity":0}, "animations":{"translateY":0, "opacity":1}}'
            className="lqd-column col-md-5 col-md-offset-1 ca-initvalues-applied"
          >
            <FancyScrollAnimation classNames="appearBottomCol">
              <div className="will-change">
                <header className="fancy-title mb-50">
                  <h6 className="text-uppercase">Whitepaper</h6>
                  <h2
                    className="lh-1 mb-0"
                    data-fittext="true"
                    data-fittext-options='{"compressor":0.65, "maxFontSize":"72", "minFontSize":"48"}'
                    style={{ fontSize: '70.4615px' }}
                  >
                    <strong>passive</strong> mining
                  </h2>
                  <h2
                    className="lh-1 mb-0"
                    data-fittext="true"
                    data-fittext-options='{"compressor":0.65, "maxFontSize":"72", "minFontSize":"48"}'
                    style={{ fontSize: '70.4615px' }}
                  >
                    <strong>real</strong> value
                  </h2>
                </header>
                <p className="font-size-30 lh-105">
                  <i>
                    Mining shouldn't be difficult. That's why we created Mining
                    Coin.
                  </i>
                </p>
                <p className="font-size-18 lh-15 mb-55">
                  We help make cryptocurrency mining less scary by providing a
                  simple token that unlocks access to our mining facilities.
                  When you earn crypto, seamlessly trade it for fiat on our
                  exchange or use it to purchase specially designed mining
                  machines for your own home.
                </p>
                <a
                  href="https://docsend.com/view/y87qbwm"
                  className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin btn-gradient font-weight-bold px-2"
                >
                  <span>
                    <span className="btn-gradient-bg" />
                    <span className="btn-txt">Whitepaper v2.07</span>
                    <span className="btn-gradient-bg btn-gradient-bg-hover" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xml_space="preserve"
                      className="btn-gradient-border"
                      width="100%"
                      height="100%"
                    >
                      <defs>
                        <linearGradient
                          id="svg-border-2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" />
                          <stop offset="100%" />
                        </linearGradient>
                      </defs>
                      <rect
                        x="0.5"
                        y="0.5"
                        rx="30"
                        ry="30"
                        width="100%"
                        height="100%"
                        stroke="url(#svg-border-2)"
                      ></rect>
                    </svg>
                  </span>
                </a>
              </div>
            </FancyScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiningCoin;
