import React from 'react';

import Hero from './Hero';
import MiningCoin from './MiningCoin';
import IslandMining from './IslandMining';
import TokenOfferingDetails from './TokenOfferingDetails';
import Roadmap from './Roadmap';
import Team from './Team';

import bg39 from '../../assets/demo/bg/bg-39.jpg';

function Body() {
  return (
    <main id="content" className="content">
      <Hero />
      <MiningCoin />
      <section
        className="vc_row pt-100 pb-100 bg-cover"
        style={{ backgroundImage: `url(${bg39})` }}
      >
        <div className="container">
          <div className="row">
            <div className="lqd-column col-md-8 col-md-offset-2 text-center">
              <h2 className="mt-0 mb-3 font-size-45 text-white">
                The MNT private sale whitelist is now open
              </h2>
              <p className="font-size-20 text-fade-white-07 mb-45">
                Our automated, SSL-encrypted KYC process takes less than 5
                minutes to complete
              </p>

              <a
                href="https://www.islandmining.io/register"
                className="btn btn-solid circle border-none px-2 font-size-15 font-weight-bold btn-white text-hover-white"
              >
                <span>
                  <span className="btn-txt">Start the KYC process</span>
                  <span className="btn-gradient-bg bg-white" />
                  <span className="btn-gradient-bg btn-gradient-bg-hover" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <IslandMining />
      <TokenOfferingDetails />
      <Roadmap />
      <Team />

    </main>
  );
}

export default Body;
