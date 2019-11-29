import React from 'react';
import Particles from 'react-particles-js';

import FancyScrollAnimation from './FancyScrollAnimation';

import bg_75 from '../../assets/demo/bg/bg-75.svg';
import BitcoinPNG from '../../assets/img/misc/bitcoin.png';

var defaults = {
  particles: {
    number: {
      value: 10
    },
    color: {
      value: ['#fdc14c']
    },
    shape: {
      type: 'image',
      image: {
        src: BitcoinPNG,
        width: 500,
        height: 500
      }
    },
    opacity: {
      value: 0.36076771369474264,
      random: true,
      anim: {
        enable: true,
        speed: 0.3,
        opacity_min: 0.06496617698410762,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: true,
        size_min: 52
      }
    },
    move: {
      enable: true,
      direction: 'none',
      speed: 1,
      random: true,
      out_mode: 'out'
    }
  },
  interactivity: {}
};

function Hero() {
  return (
    <section
      className="vc_row bg-no-repeat fullheight d-flex align-items-center py-5"
      style={{
        backgroundImage: `url(${bg_75})`,
        backgroundPosition: '170% 110%'
      }}
    >
      <div className="lqd-particles-bg-wrap">
        <div className="ld-particles-container">
          <Particles params={defaults} className="ld-particles-inner" />
        </div>
      </div>
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center">
          <div className="lqd-column col-lg-5 col-md-6">
            <div className="ld-fancy-heading mask-text text-uppercase">
                        {/*eslint-disable */}
              <h6
                className="font-size-20 ltr-sp-01 ca-initvalues-applied split-text-applied"
                data-split-text="true"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview", "animationTarget":".split-inner", "duration":"1600", "delay":100, "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":60}, "animations":{"translateY":0}}'
                data-split-options='{"type":"lines"}'
              />
                        {/*eslint-enable */}

            </div>

            <FancyScrollAnimation classNames="appearBottomCol">
              <div className="ld-fancy-heading mask-text">
                <h2
                  style={{ fontSize: '60px' }}
                  className="ca-initvalues-applied lqd-animations-done split-text-applied"
                >
                  <span className="ld-fh-txt">
                      <div
                        className="lqd-lines split-unit lqd-unit-animation-done"

                      >
                        <span data-text=" Bringing" className="split-inner">
                          <span className="split-txt"> Bringing</span>
                        </span>
                      </div>
                      <div
                        className="lqd-lines split-unit lqd-unit-animation-done"

                      >
                        <span data-text="Mining into the" className="split-inner">
                          <span className="split-txt">Mining into the</span>
                        </span>
                      </div>
                      <div
                        className="lqd-lines split-unit lqd-unit-animation-done"

                      >
                        <span data-text="Mainstream" className="split-inner">
                          <span className="split-txt">Mainstream</span>
                        </span>
                      </div>
                  </span>
                </h2>
              </div>
            </FancyScrollAnimation>
            <FancyScrollAnimation classNames="appearBottomCol">
              <div className="ld-fancy-heading mask-text mb-4">
                <span
                  className="font-size-18 lh-165 ca-initvalues-applied lqd-animations-done split-text-applied"
                  data-split-text="true"
                  data-custom-animations="true"
                  data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":"1600","startDelay":"650","delay":"160","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":60},"animations":{"translateY":0}}'
                  data-split-options='{"type":"lines"}'
                >
                  <span className="ld-fh-txt">
                      <div
                        className="lqd-lines split-unit lqd-unit-animation-done"

                      >
                        <span
                          data-text="Island Mining is driving the next	generation of "
                          className="split-inner"
                        >
                          <span className="split-txt">
                            <strong>Island Mining</strong> is driving the next
                            generation of{' '}
                          </span>
                        </span>
                      </div>
                      <div
                        className="lqd-lines split-unit lqd-unit-animation-done"

                      >
                        <span
                          data-text="cryptocurrency mining by making it accessible to "
                          className="split-inner"
                        >
                          <span className="split-txt">
                            cryptocurrency mining by making it accessible to{' '}
                          </span>
                        </span>
                      </div>
                      <div
                        className="lqd-lines split-unit lqd-unit-animation-done"

                      >
                        <span data-text="everyone." className="split-inner">
                          <span className="split-txt">everyone.</span>
                        </span>
                      </div>
                  </span>
                </span>
              </div>
            </FancyScrollAnimation>


      <FancyScrollAnimation classNames="appearBottom">
            <div className="row">
              <div
                className="lqd-column col-md-12 ca-initvalues-applied lqd-animations-done"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1600", "startDelay":"1300", "delay":"160", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":40, "opacity":0}, "animations":{"translateY":0, "opacity":1}}'
              >

                  <a
                    href="./auth/register"
                    className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin btn-gradient px-2"
                  >
                    <span>
                      <span className="btn-gradient-bg" />
                      <span className="btn-txt">Join the Token Sale</span>
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
                            id="svg-border-1"
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
                          stroke="url(#svg-border-1)"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://docsend.com/view/y87qbwm"
                    className="btn btn-naked text-uppercase"
                  >
                    <span>
                      <span className="btn-txt">Read the Whitepaper</span>
                    </span>
                  </a>

              </div>
            </div>
      </FancyScrollAnimation>



          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
