import React from 'react';

import FancyScrollAnimation from './FancyScrollAnimation';

import bg40 from '../../assets/demo/bg/bg-40.jpg';

function Roadmap() {
  return (
    <section
      id="roadmap"
      className="roadmap vc_row pt-50 pb-50 mt-50 mb-50 bg-cover"
      data-parallax={true}
      data-parallax-options='{"parallaxBG":false}'
      style={{ backgroundImage: `url(${bg40})` }}
    >
      ;
      <div className="container">
        <div className="row">
          <div className="lqd-column col-md-6 col-md-offset-3 px-md-5 mb-20">
            <header className="fancy-heading text-center">
              <h2 className="mt-0 font-size-44 text-white">Roadmap</h2>
            </header>
          </div>
          <div className="lqd-column col-md-8 col-md-offset-2">
            <div
              className="one-roadmap"
              data-custom-animations="false"
              data-ca-options='{"triggerHandler": "inview", "animationTarget": ".one-roadmap-item", "duration": 1200, "delay": 150, "easing": "easeOutQuint", "initValues": { "translateY": 50, "translateZ": -150, "rotateX": -95, "opacity": 0 }, "animations": { "translateY": 0, "translateZ": 0, "rotateX": 0, "opacity": 1 }}'
            >
              <div className="one-roadmap-inner">
                <FancyScrollAnimation classNames="flipCard">
                  <div className="one-roadmap-item text-white">
                    <span className="one-roadmap-bar"></span>
                    <div className="one-roadmap-info">
                      <h6>
                        <strong>Q1 2019</strong>
                      </h6>
                      <p>
                        -&nbsp;&nbsp;Island Mining core team formed
                        <br />
                        -&nbsp;&nbsp;Whitepaper v1.0 completed
                      </p>
                    </div>
                    <span className="one-roadmap-mark">
                      <i className="fa fa-check font-size-16"></i>
                    </span>
                  </div>
                  <div className="one-roadmap-item text-white">
                    <span className="one-roadmap-bar"></span>
                    <div className="one-roadmap-info">
                      <h6>
                        <strong>Q2 2019</strong>
                      </h6>
                      <p>
                        Partnership agreements with:
                        <br />
                        -&nbsp;&nbsp;Cayman Islands bank
                        <br />
                        -&nbsp;&nbsp;Japan-based semiconductor consultants
                        <br />
                        -&nbsp;&nbsp;Canadian liquid immersion-cooling engineers
                      </p>
                    </div>
                    <span className="one-roadmap-mark">
                      <i className="fa fa-check font-size-16"></i>
                    </span>
                  </div>
                  <div className="one-roadmap-item text-white">
                    <span className="one-roadmap-bar"></span>
                    <div className="one-roadmap-info">
                      <h6>
                        <strong>August 2019</strong>
                      </h6>
                      <p>
                        -&nbsp;&nbsp;Began development of liquid-cooled ASIC
                        miners
                        <br />
                        -&nbsp;&nbsp;Whitepaper v2.0 completed
                      </p>
                    </div>
                    <span className="one-roadmap-mark">
                      <i className="fa fa-check font-size-16"></i>
                    </span>
                  </div>
                  <div className="one-roadmap-item text-white">
                    <span className="one-roadmap-bar"></span>
                    <div className="one-roadmap-info">
                      <h6>September 2019</h6>
                      <p>
                        <strong>
                          -&nbsp;&nbsp;Initiate token sale Seed Round
                        </strong>
                        <br />
                        -&nbsp;&nbsp;Begin expansion of Mongolia mining facility
                        (Mine A)
                      </p>
                    </div>
                    <span className="one-roadmap-mark"></span>
                  </div>
                  <div className="one-roadmap-item text-white">
                    <span className="one-roadmap-bar"></span>
                    <div className="one-roadmap-info">
                      <h6>November 2019</h6>
                      <p>
                        <strong>
                          -&nbsp;&nbsp;Initiate token sale Private Round (Japan)
                        </strong>
                        <br />
                        -&nbsp;&nbsp;Launch cloud mining platform
                      </p>
                    </div>
                    <span className="one-roadmap-mark"></span>
                  </div>
                  <div className="one-roadmap-item text-white">
                    <span className="one-roadmap-bar"></span>
                    <div className="one-roadmap-info">
                      <h6>December 2019</h6>
                      <p>
                        -&nbsp;&nbsp;IslandEX wallet and exchange development
                        begins
                      </p>
                    </div>
                    <span className="one-roadmap-mark"></span>
                  </div>
                  <div className="one-roadmap-item text-white">
                    <span className="one-roadmap-bar"></span>
                    <div className="one-roadmap-info">
                      <h6>Q1 2020</h6>
                      <p>
                        <strong>
                          -&nbsp;&nbsp;Initiate token sale Pre-Sale Round +
                          Public Sale 1 + 2
                        </strong>
                        <br />
                        -&nbsp;&nbsp;Begin construction of Canada facility (Mine
                        B)
                        <br />
                        -&nbsp;&nbsp;Falcon Series liquid-cooled ASIC miner
                        launch
                        <br />
                        -&nbsp;&nbsp;Launch IslandEX wallet and exchange
                      </p>
                    </div>
                    <span className="one-roadmap-mark"></span>
                  </div>
                  <div className="one-roadmap-item text-white">
                    <span className="one-roadmap-bar"></span>
                    <div className="one-roadmap-info">
                      <h6>Q2 2020</h6>
                      <p>
                        <strong>
                          -&nbsp;&nbsp;Token sale completed and Mining Coin
                          tokens unlocked
                        </strong>
                        <br />
                        -&nbsp;&nbsp;Begin construction of US Mine (Mine C)
                        <br />
                        -&nbsp;&nbsp;Shipping starts for Liquid-cooled Falcon
                        Industrial Series
                        <br />
                        -&nbsp;&nbsp;Launch global fiat/crypto banking services
                      </p>
                    </div>
                    <span className="one-roadmap-mark"></span>
                  </div>
                  <div className="one-roadmap-item text-white">
                    <span className="one-roadmap-bar"></span>
                    <div className="one-roadmap-info">
                      <h6>Q3 2020</h6>
                      <p>
                        -&nbsp;&nbsp;Large-scale expansion of mines
                        <br />
                        -&nbsp;&nbsp;Field testing Liquid-cooled Falcon Home
                        Miners
                      </p>
                    </div>
                    <span className="one-roadmap-mark"></span>
                  </div>
                </FancyScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="roadmap_gradient"></div>
    </section>
  );
}

export default Roadmap;
