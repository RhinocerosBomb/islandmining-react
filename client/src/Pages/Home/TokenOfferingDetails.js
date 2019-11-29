import React from 'react';
import Countdown from '../../components/Countdown';

function TokenOfferingDetails({tokenSaleRef}) {
  return (
    <section className="vc_row pt-50 pb-50" id="works" ref={tokenSaleRef}>
      <div className="container">
        <div className="row">
          <div className="lqd-column col-md-6 col-md-offset-3 mb-55">
            <header className="fancy-heading text-center">
              <h6 className="font-size-12 text-uppercase ltr-sp-2 mt-0 mb-3 opacity-05">
                MNT Token Offering
              </h6>
              <h2 className="font-size-40 my-0">Token Offering details</h2>
            </header>
          </div>
        </div>
        <div className="row d-flex flex-wrap align-items-center">
          <div className="lqd-column col-md-4 col-xs-12 mb-4 mb-md-0">
            <h2 className="font-size-36 mt-0">MNT private sale is now open.</h2>
            <p className="font-size-17 lh-175 pr-md-4 mb-30">
              Apply for the whitelist now. Our automated, SSL-encrypted KYC
              process takes less than 5 minutes to complete.
            </p>

            <a
              href="./auth/register"
              className="btn btn-solid circle btn-bordered border-thin btn-gradient px-3"
            >
              <span>
                <span className="btn-gradient-bg"></span>
                <span className="btn-txt">Start KYC now</span>
                <span className="btn-icon">
                  <i className="fa fa-long-arrow-right"></i>
                </span>
                <span className="btn-gradient-bg btn-gradient-bg-hover"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xml_space="preserve"
                  className="btn-gradient-border"
                  width="100%"
                  height="100%"
                >
                  <defs>
                    <linearGradient
                      id="svg-border-5c79175df082b"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%"></stop>
                      <stop offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <rect
                    x="0.5"
                    y="0.5"
                    rx="30"
                    ry="30"
                    width="100%"
                    height="100%"
                    stroke="url(#svg-border-5c79175df082b)"
                  ></rect>
                </svg>
              </span>
            </a>
          </div>
          <div className="lqd-column col-md-8 col-xs-12">
            <div className="lqd-column-inner border-athens-gray border-radius-5 pt-50 pb-25 px-2 px-md-5">
              <div className="row">
                <div className="lqd-column col-md-10 col-md-offset-1 mb-35">
                  <Countdown />
                </div>
                <div className="lqd-column col-md-4 col-xs-6">
                  <p>
                    <span className="font-size-16 text-arapawa">
                      Private Sale:
                    </span>
                    <br />
                    <span className="font-size-16 opacity-06">
                      $10,000,000 USD
                    </span>
                  </p>
                </div>
                <div className="lqd-column col-md-4 col-xs-6">
                  <p>
                    <span className="font-size-16 text-arapawa">Hard Cap:</span>
                    <br />
                    <span className="font-size-16 opacity-06">
                      $90,000,000 USD
                    </span>
                  </p>
                </div>
                <div className="lqd-column col-md-4 col-xs-6">
                  <p>
                    <span className="font-size-16 text-arapawa">Payment:</span>
                    <br />
                    <span className="font-size-16 opacity-06">
                      BTC, ETH, LTC, USD
                    </span>
                  </p>
                </div>
                <div className="lqd-column col-md-4 col-xs-6">
                  <p>
                    <span className="font-size-16 text-arapawa">
                      Private Sale Open:
                    </span>
                    <br />
                    <span className="font-size-16 opacity-06">
                      Oct 12, 2019 15:00 UTC
                    </span>
                  </p>
                </div>
                <div className="lqd-column col-md-4 col-xs-6">
                  <p>
                    <span className="font-size-16 text-arapawa">
                      Private Sale Close:
                    </span>
                    <br />
                    <span className="font-size-16 opacity-06">
                      Nov 30, 2019 14:59 UTC
                    </span>
                  </p>
                </div>
                <div className="lqd-column col-md-4 col-xs-6">
                  <p>
                    <span className="font-size-16 text-arapawa">
                      Public Sale Start:
                    </span>
                    <br />
                    <span className="font-size-16 opacity-06">
                      February 2020
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenOfferingDetails;
