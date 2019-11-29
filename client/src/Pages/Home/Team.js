import React from 'react';

import arakawa_sq from '../../assets/media/Arakawa-SQ.jpg';
import case_sq from '../../assets/media/Case-SQ.jpg';
import chrismarsh_sq from '../../assets/media/ChrisMarsh-SQ.jpg';
import christopher_sq from '../../assets/media/Christopher-SQ.jpg';
// import logo_sq from '../../assets/media/logo_sq.png';
import naoki_singer_sq from '../../assets/media/NaokoSinger-SQ.jpg';
import neil_sl from '../../assets/media/Neil-SQ.jpg';
import samir_sq from '../../assets/media/Samir-SQ.jpg';
// import self_hosted_video_demo from '../../assets/media/self-hosted-video-demo.jpg';
import sergelen_sq from '../../assets/media/Sergelen-SQ.jpg';

function Team({teamRef}) {
    return (
      <section id="team" className="vc_row pt-20 pb-80" ref={teamRef}>
        <div className="container">
          <div className="row">
            <div className="lqd-column col-md-6 col-md-offset-3 mb-70">
              <header className="fancy-heading text-center">
                <h2 className="font-size-40 my-0">Our Team</h2>
              </header>
            </div>
          </div>
          <div className="row">

            <div className="lqd-column col-md-3 col-sm-6">

              <div className="ld-tm d-flex flex-column text-center px-md-3">
                <div className="ld-tm-img mb-3 text-center">
                  <figure>
                    <img className="square" src={christopher_sq} alt="Christopher Filiatrault"/>
                  </figure>
                </div>
                <div className="ld-tm-info">
                  <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Christopher Filiatrault
                  </h3>
                  <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">Founder &amp; CEO
                  </h6>
                  <p className="opacity-06">Bitcoin pioneer and entrepreneur in Japan for 35 years.
                    Responsible for the first Bitcoin ATMs in Japan and previously raised over $30
                    million for crypto projects.</p>
                  <ul className="ld-tm-social social-icon branded-text mt-3">
                    <li><a href="https://www.linkedin.com/in/christopher-filiatrault/"><i
                      className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lqd-column col-md-3 col-sm-6">
              <div className="ld-tm d-flex flex-column text-center px-md-3">
                <div className="ld-tm-img mb-3 text-center">
                  <figure>
                    <img className="square" src={arakawa_sq} alt="Muneya Arakawa"/>
                  </figure>
                </div>
                <div className="ld-tm-info">
                  <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Muneya Arakawa</h3>
                  <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">CTO</h6>
                  <p className="opacity-06">Japanese engineer with 25 years in the semiconductor business.
                    Founded Silicon International (Japan) 25 years ago. His deep knowledge of
                    semiconductors and his international connections are now focused on Island
                    Mining.</p>
                  <ul className="ld-tm-social social-icon branded-text mt-3">
                  </ul>
                </div>
              </div>
            </div>
            <div className="lqd-column col-md-3 col-sm-6">

              <div className="ld-tm d-flex flex-column text-center px-md-3">
                <div className="ld-tm-img mb-3 text-center">
                  <figure>
                    <img className="square" src={chrismarsh_sq} alt="Chris Marsh"/>
                  </figure>
                </div>
                <div className="ld-tm-info">
                  <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Chris Marsh</h3>
                  <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">CFO</h6>
                  <p className="opacity-06">Experienced fund manager, registered CMA with Masters Degree
                    from London Business School. CEO of Blockchain Foundry, the team behind Syscoin
                    (SYS)</p>
                  <ul className="ld-tm-social social-icon branded-text mt-3">
                    <li><a href="https://www.linkedin.com/in/chris-marsh-ba8395137"><i
                      className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lqd-column col-md-3 col-sm-6">
              <div className="ld-tm d-flex flex-column text-center px-md-3">
                <div className="ld-tm-img mb-3 text-center">
                  <figure>
                    <img className="square" src={case_sq} alt="Case Lewis"/>
                  </figure>
                </div>
                <div className="ld-tm-info">
                  <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Case Lewis</h3>
                  <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">COO</h6>
                  <p className="opacity-06">Blockchain and cryptocurrency expert, and previously director,
                    project manager, and technical advisor to numerous publicly-listed companies.
                  </p>
                  <ul className="ld-tm-social social-icon branded-text mt-3">
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="lqd-column col-md-3 col-sm-6">
              <div className="ld-tm d-flex flex-column text-center px-md-3">
                <div className="ld-tm-img mb-3 text-center">
                  <figure>
                    <img className="square" src={naoki_singer_sq} alt="Naoko Singer"/>
                  </figure>
                </div>
                <div className="ld-tm-info">
                  <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Naoko Singer</h3>
                  <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">Japan Liaison
                  </h6>
                  <p className="opacity-06">Bilingual and skilled in international trade and business,
                    leads Island Mining's Japanese business alliances.</p>
                  <ul className="ld-tm-social social-icon branded-text mt-3">
                    <li><a href="https://www.linkedin.com/in/naokosinger1126"><i className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lqd-column col-md-3 col-sm-6">

              <div className="ld-tm d-flex flex-column text-center px-md-3">
                <div className="ld-tm-img mb-3 text-center">
                  <figure>
                    <img className="square" src={samir_sq} alt="Samir Bandali"/>
                  </figure>
                </div>
                <div className="ld-tm-info">
                  <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Samir Bandali</h3>
                  <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">Chief Strategy
                    Officer</h6>
                  <p className="opacity-06">Mr. Bandali will lead the design and development of strategies
                    which activate and strengthen a connection between our products and investors to
                    drive profitable company growth in a dynamic and competitive environment. With a
                    wealth of experience in international relations.</p>
                  <ul className="ld-tm-social social-icon branded-text mt-3">
                    <li><a href="https://www.linkedin.com/in/samir-bandali-033041123"><i
                      className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lqd-column col-md-3 col-sm-6">
              <div className="ld-tm d-flex flex-column text-center px-md-3">
                <div className="ld-tm-img mb-3 text-center">
                  <figure>
                    <img className="square" src={sergelen_sq} alt="Sergelen Tsogtbayar"/>
                  </figure>
                </div>
                <div className="ld-tm-info">
                  <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Sergelen Tsogtbayar</h3>
                  <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">Mongolia
                    Engineering Lead</h6>
                  <p className="opacity-06">Civil engineer and Deputy CEO of Erchim Tusul LLC, the largest
                    engineering firm in Mongolia. Worked on Mongolia’s largest bitcoin mining
                    facility.</p>
                  <ul className="ld-tm-social social-icon branded-text mt-3">
                  </ul>
                </div>
              </div>
            </div>
            <div className="lqd-column col-md-3 col-sm-6">
              <div className="ld-tm d-flex flex-column text-center px-md-3">
                <div className="ld-tm-img mb-3 text-center">
                  <figure>
                    <img className="square" src={neil_sl} alt="Neil Wright"/>
                  </figure>
                </div>
                <div className="ld-tm-info">
                  <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Neil Wright</h3>
                  <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">Security Lead
                  </h6>
                  <p className="opacity-06">Neil Wright is the Co-Founder and CTO of a cybersecurity
                    software company that developed products for the US Department of Defense and
                    the US Intelligence Community. Neil holds an MSc in Information Systems and a
                    BSc from West Point Military Academy.</p>
                  <ul className="ld-tm-social social-icon branded-text mt-3">
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
}

export default Team;
