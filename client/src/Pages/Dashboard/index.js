import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Countdown from '../../components/Countdown';
import '../../assets/css/dashboard.css';

import '../../assets/css/tailwind.css';

import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions as userActions } from '../../store/ducks/auth.duck';
import { actions as dashboardActions } from '../../store/ducks/dashboard.duck';
import {
  submitPending,
  submitUserInformation,
  verifyEthWallet
} from '../../crud/dashboard.crud';

import logo_dashboard from '../../assets/img/logo/logo_dashboard.png';
import btc_icon from '../../assets/img/icon/BTC_icon.png';
import eth_icon from '../../assets/img/icon/ETH_icon.png';
import whitepaper from '../../assets/img/icon/document.png';
import miningcoin_symbol_1 from '../../assets/img/icon/miningcoin-symbol-1.png';

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let period;
  if (hours > 12) {
    period = 'PM';
  } else {
    period = 'AM';
  }

  const toString = () => `${hours}:${minutes} ${period}`;

  return { hours, minutes, period, toString };
};

function Dashboard() {
  const {
    auth: { user },
    dashboard
  } = useSelector(state => state.rootReducer);
  const [timer, setTimer] = useState(getCurrentTime());
  const [userInformation, setUserInformation] = useState(
    user.userInformation || {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      province: '',
      DOB: '',
      phone: '',
      citizenship: '',
      citizenship_2: '',
      residency: ''
    }
  );
  const [ethWalletAddress, setEthWalletAddress] = useState('');
  const [ethAddressAlert, setEthAddressAlert] = useState();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userActions.logout());
  };

  const handleUserInformationChange = e => {
    setUserInformation({ ...userInformation, [e.target.name]: e.target.value });
  };

  const startKYC = () => {
    submitPending().then(response => {
      const { data } = response;
      dispatch(dashboardActions.afterStartKYC(data.user, data.accessToken));
    });
  };

  const getFirstTierRewards = () => {
    let firstTierRewards;

    const {
      affiliateProgram: { referrals }
    } = user;
    if (referrals < 10000) {
      firstTierRewards = (referrals * 0.05).toFixed(1);
    } else if (referrals >= 10000 && referrals <= 50000) {
      firstTierRewards = (referrals * 0.065).toFixed(1);
    } else if (referrals > 50000) {
      firstTierRewards = (referrals * 0.08).toFixed(1);
    }
    return firstTierRewards;
  };

  const getSecondTierRewards = () => {
    let secondTierRewards;
    const {
      affiliateProgram: { referrals, referrals_2 }
    } = user;
    if (referrals_2 < 10000) {
      secondTierRewards = (referrals_2 * 0.01).toFixed(1);
    } else if (referrals >= 10000 && referrals <= 50000) {
      secondTierRewards = (referrals_2 * 0.015).toFixed(1);
    } else if (referrals > 50000) {
      secondTierRewards = (referrals_2 * 0.02).toFixed(1);
    }

    return secondTierRewards;
  };

  const handleCopyText = (target, e) => {
    console.log(target);
    if (target === 'ethereumAddress' || target === 'bitcoinAddress') {
      const dummy = document.createElement('textarea');
      document.body.appendChild(dummy);
      dummy.value = user.cryptocurrencyAddresses[target];
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
    } else if (target === 'referralAddress') {
      const input = document.createElement('input');
      input.id = 'temp_element';

      input.style.height = 0;

      document.body.appendChild(input);

      input.value = document.getElementById('referralAddress').innerText;

      const selector = document.querySelector('#temp_element');

      selector.select();
      selector.setSelectionRange(0, 99999);
      document.execCommand('copy');
      // Remove the textarea
      document.body.removeChild(input);
    }
  };

  const handleSubmitUserInformation = () => {
    const {
      firstName,
      lastName,
      address,
      city,
      province,
      DOB,
      phone,
      citizenship,
      citizenship_2,
      residency
    } = userInformation;
    submitUserInformation(
      firstName,
      lastName,
      address,
      city,
      province,
      DOB,
      phone,
      citizenship,
      citizenship_2,
      residency
    ).then(response => {
      const { data } = response;
      dispatch(
        dashboardActions.submitUserInformation(data.user, data.accessToken)
      );
    });
  };

  const handleVerifyEthWalletAddress = e => {
    e.preventDefault();
    verifyEthWallet(ethWalletAddress)
      .then(response => {
        const { data } = response;
        setEthAddressAlert('valid');
        dispatch(dashboardActions.verifyEthWallet(data.user, data.accessToken));
      })
      .catch(err => {
        setEthAddressAlert('invalid');
      });
  };

  useEffect(() => {
    const clock = setInterval(() => {
      const nowDate = getCurrentTime();
      if (nowDate.minutes > timer.minutes) {
        setTimer(nowDate);
      }
    }, 1000);

    dispatch(dashboardActions.dashboard());

    return () => clearInterval(clock);
  }, [dispatch]);

  return (
    <div id="dashboard">
      <div className="navbarContainer">
        <div className="navbar absolute text-white flex flex-wrap pt-8">
          <Link to="/">
            <img src={logo_dashboard} alt="" />
          </Link>
          <div className="logged-in-name">
            <div>
              Logged in as <span id="username">{user.username}</span> |
              <form style={{ display: 'inline' }} onSubmit={logout}>
                <input
                  style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
                  type="submit"
                  value="Log out"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="dashboardContainer">
        <div
          className="mb-16 py-8 px-16 bg-gray-100 flex flex-wrap"
          style={{ borderRadius: '5px' }}
        >
          <h3 className="heading-tertiary" style={{ fontWeight: '500px' }}>
            Dashboard
          </h3>
          <h3 className="pl-4">
            Current Conversion Rates
            <em>{dashboard.cryptoPrice.dateTime}</em>
          </h3>
          <div className="pl-4 flex flex-wrap">
            <div style={{ color: '#2185D0' }}>
              <img className="crypto_icon" src={btc_icon} alt="" />
              <strong>BTC</strong> $
              <span className="" id="BTC-price">
                {dashboard.cryptoPrice.BTCUSDT}
              </span>
            </div>
            <div className="pl-8" style={{ color: '#2185D0' }}>
              <img className="crypto_icon" src={eth_icon} alt="" />
              <strong>ETH</strong> $
              <span className="" id="ETH-price">
                {dashboard.cryptoPrice.ETHUSDT}
              </span>
            </div>
          </div>

          <div
            className="ml-auto px-8 flex flex-wrap"
            style={{ backgroundColor: '#E1E3EC' }}
          >
            <h3 className="heading-tertiary" style={{ color: '#716ACA' }}>
              Official Time:&nbsp;
            </h3>
            <span id="official-time" style={{ color: '#716ACA' }}>
              {timer.toString()}
            </span>
          </div>
        </div>
        <h1 className="heading-primary mb-8 text-center">
          Time Remaining Until Round Closes
        </h1>
        <div className="container mx-auto flex flex-wrap justify-center px-16 md:flex-no-wrap mb-16">
          <Countdown classNames="dashboard-countdown" />
        </div>
        <header className="container mx-auto flex flex-wrap px-16 md:flex-no-wrap mb-16">
          <img
            src={miningcoin_symbol_1}
            style={{
              width: '20%',
              height: '100%',
              display: 'block',
              marginBottom: '2rem'
            }}
            alt=""
          />
          <div className="md:pl-16 w-full">
            <h1 className="heading-primary">
              Mining Coin (MNT) - Private Sale Round 1 (1 MNT = $0.06USD)
            </h1>
            <h3 className="heading-tertiary pb-4">
              Mining Coin - A Distributed Cloud Mining Platform
            </h3>
            <hr />
            <div className="py-4">
              <div className="w-full flex flex-wrap">
                <div className="w-full pb-4 md:w-1/2">
                  <p>Price</p>
                  <div className="heading-tertiary">
                    1 MNT = $0.06 USD ={' '}
                    {(0.06 / dashboard.cryptoPrice.BTCUSDT).toFixed(8)} BTC ={' '}
                    {(0.06 / dashboard.cryptoPrice.ETHUSDT).toFixed(8)} ETH
                  </div>
                </div>
                <div className="w-full pb-4 md:w-1/4">
                  <p>Round 1 Supply</p>
                  <div className="heading-tertiary">50,000,000 MNT</div>
                </div>
                <div className="w-full pb-4 md:w-1/4">
                  <p>Total Supply</p>
                  <div className="heading-tertiary">700,000,000 MNT</div>
                </div>
              </div>
            </div>

            <hr />
            <div className="w-full flex flex-wrap py-4">
              <div className="w-full pb-4 lg:w-1/3 flex">
                <img className="pr-4" src={whitepaper} alt="" />
                <a
                  className="underline"
                  href="https://docsend.com/view/hz858ia"
                >
                  Whitepaper
                </a>
              </div>
              <div className="w-full pb-4 lg:w-1/3 flex">
                <img className="pr-4" src={whitepaper} alt="" />
                <a
                  className="underline"
                  href="https://docsend.com/view/dkwdnxb"
                >
                  Project Brochure
                </a>
              </div>
              <div className="w-full pb-4 lg:w-1/3 flex">
                <a
                  className="underline"
                  href="https://etherscan.io/token/0x49073cccc5309a814da07b47ca604fcd06590702"
                >
                  View Contract on Etherscan
                </a>
              </div>
            </div>
            <p>
              BTC, ETH conversion rates updated every 12 hours at 00:00 and
              12:00 UTC
            </p>
          </div>
        </header>

        <section className="container mx-auto px-16 py-12 mb-16">
          <h1 className="heading-primary pb-8">Mining Coin (MNT) Overview</h1>
          <h3 className="heading-tertiary">Project Introduction</h3>
          <p>
            MNT token holders are entitled to a percentage of hashing power
            produced by Island Mining facilities, proportional to the balance of
            MNT tokens in their account. Crypto mined with hashing power
            received for holding MNT is held in users IslandEX Wallet. Users
            have the option to trade the Bitcoin (or other crypto) held in their
            wallet for fiat currency through IslandEX Exchange. Users can hold
            fiat at IslandEX and use a prepaid debit card issued through
            IslandEX or one of its banking affiliates, to easily spend their
            funds.
          </p>
        </section>
        {(user.kycStatus.verified === 'false' ||
          user.kycStatus.verified === 'failed' ||
          user.kycStatus.verified === 'pending') && (
          <section
            id="application"
            className="container mx-auto px-16 py-12 mb-16"
          >
            <h1 className="heading-primary mb-8">KYC Registration</h1>
            <div className="w-2/3 flex flex-wrap mx-auto mb-8">
              <h3 className="heading-tertiary">KYC Status</h3>
              <div className="md:w-2/3 mx-auto">
                {user.kycStatus.verified === 'pending' && (
                  <div className="alert alert-warning font-bold text-center">
                    Resume KYC application. If completed, please check back in 5
                    minutes
                  </div>
                )}

                {user.kycStatus.verified === 'false' && (
                  <div className="alert alert-warning font-bold text-center">
                    Please complete KYC application below
                  </div>
                )}

                {user.kycStatus.verified === 'failed' && (
                  <div className="alert alert-danger font-bold text-center">
                    Rejected
                  </div>
                )}
              </div>
            </div>
            <div className="text-center mb-16">
              <h2 className="heading-secondary">
                In order to purchase Mining Coin, you’ll need to complete a
                quick KYC (Know Your Customer) process. To complete your
                registration for the token sale, please click the link below.
              </h2>
              <p style={{ color: '#5D78FF' }}>
                We take your data security seriously. That’s why we use the same
                automated, SSL-encrypted KYC provider used by major financial
                instutions and cryptocurrency exchanges.
              </p>
            </div>

            <div className="w-full md:w-2/3 mx-auto">
              <h3 className="heading-tertiary">
                Instructions before you start:
              </h3>
              <ul>
                <li>
                  <span className="font-bold">Have your Photo ID ready</span>{' '}
                  (drivers license, passport, etc)
                </li>
                <li>
                  <span className="font-bold">Find a well-lit space.</span> The
                  facial recognition check will require your camera.
                </li>
              </ul>

              <div className="flex flex-wrap px-8 md:px-24 mb-16">
                <div className="w-1/2">
                  <h3 className="heading-tertiary">PC or Mac:</h3>
                  <p>Make sure your webcam is enabled</p>
                </div>
                <div className="w-1/2">
                  <h3 className="heading-tertiary">Mobile:</h3>
                  <p>You can use your device’s camera</p>
                </div>
              </div>

              <div className="mb-16 px-8 py-6 border-solid border-2 rounded-lg border-gray-500 shadow-lg flex flex-wrap content-center">
                {/* <style>
                    .signup_icomply>a>h2 {
                        transition: all .2s;
                    }

                    .signup_icomply>a>h2:hover {
                        color: #14227A;
                    }
                </style> */}
                <a
                  id="registration-btn"
                  onClick={startKYC}
                  target="_blank"
                  className="signup_icomply text-center py-8 mx-auto"
                >
                  {user.kycStatus.verified === 'pending' && (
                    <h2 className="heading-secondary">
                      Resume KYC Registration
                    </h2>
                  )}
                  {user.kycStatus.verified === 'false' && (
                    <h2 className="heading-secondary">
                      Begin KYC Registration
                    </h2>
                  )}
                </a>
              </div>

              <p>
                Processing may take up to 5-10 minutes. Please refresh your page
                to check on your registration progress.
              </p>
            </div>
          </section>
        )}
        {user.kycStatus.verified === 'true' && !user.userInformation && (
          <section className="container mx-auto px-16 py-12 mb-16">
            <h1 className="heading-primary mb-8">KYC Registration</h1>
            <div className="w-2/3 flex flex-wrap mx-auto mb-8">
              <h3 className="heading-tertiary">KYC Status</h3>
              <div className="md:w-2/3 mx-auto">
                <div className="alert alert-success font-bold text-center">
                  Approved! Fill in information then you're good to go.
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmitUserInformation}>
              <div className="w-1/2 px-16">
                <div className="py-2 w-full flex flex-wrap">
                  <h3 className="heading-tertiary">First Name</h3>
                  <input
                    className="rounded-lg pl-4 ml-auto w-2/3 border-gray-500 border-solid border-2"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={userInformation.firstName}
                    onChange={handleUserInformationChange}
                    required
                  />
                </div>
                <div className="py-2 w-full flex flex-wrap">
                  <h3 className="heading-tertiary">Last Name</h3>
                  <input
                    className="rounded-lg pl-4 ml-auto w-2/3 border-gray-500 border-solid border-2"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={userInformation.lastName}
                    onChange={handleUserInformationChange}
                    required
                  />
                </div>
                <div className="py-2 w-full flex flex-wrap">
                  <h3 className="heading-tertiary">Address</h3>
                  <input
                    name="address"
                    className="rounded-lg pl-4 ml-auto w-2/3 border-gray-500 border-solid border-2"
                    type="text"
                    placeholder="Address"
                    value={userInformation.address}
                    onChange={handleUserInformationChange}
                    required
                  />
                </div>
                <div className="py-2 w-full flex flex-wrap">
                  <h3 className="heading-tertiary">City</h3>
                  <input
                    name="city"
                    className="rounded-lg pl-4 ml-auto w-2/3 border-gray-500 border-solid border-2"
                    type="text"
                    placeholder="City"
                    value={userInformation.city}
                    onChange={handleUserInformationChange}
                    required
                  />
                </div>
                <div className="py-2 w-full flex flex-wrap">
                  <h3 className="heading-tertiary">Province</h3>
                  <input
                    name="province"
                    className="rounded-lg pl-4 ml-auto w-2/3 border-gray-500 border-solid border-2"
                    type="text"
                    placeholder="Province"
                    value={userInformation.province}
                    onChange={handleUserInformationChange}
                    required
                  />
                </div>
              </div>
              <div className="w-1/2 px-16">
                <div className="py-2 w-full flex flex-wrap">
                  <h3 className="heading-tertiary">Date of birth</h3>
                  <input
                    id="date-input"
                    name="DOB"
                    className="rounded-lg pl-4 ml-auto w-2/3 border-gray-500 border-solid border-2"
                    type="date"
                    placeholder="Date of birth"
                    value={userInformation.DOB}
                    onChange={handleUserInformationChange}
                    required
                  />
                </div>
                <div className="py-2 w-full flex flex-wrap">
                  <h3 className="heading-tertiary">Phone</h3>
                  <input
                    id="phone-input"
                    name="phone"
                    className="rounded-lg pl-4 ml-auto w-2/3 border-gray-500 border-solid border-2"
                    type="text"
                    placeholder="Phone"
                    pattern="[0-9]{10}"
                    maxlength="10"
                    value={userInformation.phone}
                    onChange={handleUserInformationChange}
                    required
                  />
                </div>
                <div className="py-2 w-full flex flex-wrap">
                  <h3 className="heading-tertiary">Citizenship</h3>
                  <input
                    name="citizenship"
                    className="rounded-lg pl-4 ml-auto w-2/3 border-gray-500 border-solid border-2"
                    type="text"
                    placeholder="Citizenship"
                    value={userInformation.citizenship}
                    onChange={handleUserInformationChange}
                    required
                  />
                </div>
                <div className="py-2 w-full flex flex-wrap">
                  <h3 className="heading-tertiary">2nd Citizenship</h3>
                  <input
                    name="citizenship_2"
                    className="rounded-lg pl-4 ml-auto w-2/3 border-gray-500 border-solid border-2"
                    type="text"
                    placeholder="Secondary Citizenship (optional)"
                    value={userInformation.citizenship_2}
                    onChange={handleUserInformationChange}
                  />
                </div>
                <div className="py-2 w-full flex flex-wrap">
                  <h3 className="heading-tertiary">Country of Residency</h3>
                  <input
                    name="residency"
                    className="rounded-lg pl-4 ml-auto w-2/3 border-gray-500 border-solid border-2"
                    type="text"
                    placeholder="Country of Residency"
                    value={userInformation.residency}
                    onChange={handleUserInformationChange}
                    required
                  />
                </div>
              </div>

              <div className="w-full text-center mt-16">
                <button className="w-1/3 button" type="submit" value="Submit" />
              </div>
            </form>
          </section>
        )}

        {user.kycStatus.verified === 'true' &&
          user.userInformation &&
          userInformation.firstName && (
            <section
              id="application"
              className="container mx-auto px-16 py-12 mb-16"
            >
              <h1 className="heading-primary mb-8">KYC Registration</h1>
              <div className="w-2/3 flex flex-wrap mx-auto mb-8">
                <h3 className="heading-tertiary">KYC Status</h3>
                <div className="md:w-2/3 mx-auto">
                  <div className="alert alert-success font-bold text-center">
                    Approved!
                  </div>
                </div>
              </div>
              <div className="text-center mb-16">
                <h2 className="heading-secondary" style={{ color: 'black' }}>
                  Your KYC registration is approved! <br />
                  Scroll down to complete your purchase
                </h2>
              </div>
            </section>
          )}

        {user.userInformation && userInformation.firstName && (
          <section className="container mx-auto px-16 py-12 mb-16">
            <h1 className="heading-primary mb-8">Payment</h1>
            <div className="md:w-2/3 mx-auto">
              {user.kycStatus.verified === 'true' && (
                <>
                  <div className="alert alert-success font-bold text-center">
                    You are approved for the token sale!
                  </div>
                  <p
                    className="heading-secondary text-center mb-16"
                    style={{ color: 'black' }}
                  >
                    Follow the steps below to purchase MNT. Your tokens will be
                    sent to your wallet shortly after purchase.
                  </p>
                </>
              )}

              {user.kycStatus.verified === 'pending' && (
                <div className="alert alert-warning font-bold text-center">
                  KYC pending. Please check back shortly.
                </div>
              )}

              {user.kycStatus.verified === 'false' && (
                <div className="alert alert-warning font-bold text-center">
                  Please complete KYC application above
                </div>
              )}

              {user.kycStatus.verified === 'failed' && (
                <div className="alert alert-danger font-bold text-center">
                  Something went wrong. Please try the application again.
                </div>
              )}
            </div>
            {user.kycStatus.verified === 'true' && (
              <>
                <div className="flex flex-wrap mb-16">
                  <div className="text-center mx-auto">
                    <h3 className="heading-tertiary">Step 1:</h3>
                    <p>
                      Enter the Ethereum wallet address where your Mining Coin
                      will be sent, then click <strong>Validate Address</strong>
                    </p>
                  </div>
                  <div className="flex pb-8 w-2/3 mx-auto pt-8">
                    <i className="fas fa-exclamation-circle yellow"></i>
                    <p className="pl-8">
                      <strong>Important!</strong> Do not use an exchange wallet
                      address or your funds may be lost. Create an Ethereum
                      wallet with
                      <strong>MyEtherWallet</strong> or{' '}
                      <strong>Metamask</strong> if you don’t have one.
                    </p>
                  </div>

                  <form
                    className="flex flex-wrap md:w-1/2 mx-auto"
                    onSubmit={handleVerifyEthWalletAddress}
                  >
                    <h3 className="heading-tertiary w-full text-center md:text-left md:w-1/3">
                      Wallet address
                    </h3>
                    <div className="text-center w-full md:w-2/3 pb-8">
                      <input
                        required
                        id="etherAddress"
                        value={ethWalletAddress}
                        onChange={e => setEthWalletAddress(e.target.value)}
                        name="address"
                        className="border-solid border-2 border-gray-500 rounded-lg w-full pl-4"
                        placeholder="Enter wallet address"
                      />
                    </div>
                    {!user.cryptocurrencyAddresses.ethereumAddress && (
                      <button className="button mx-auto">
                        Validate Address
                      </button>
                    )}
                    {/* <style>
                    .button-dead {
                        background-color: #EEEEEE !important;
                        color: #AAAAB6 !important;
                        cursor: pointer;
                    }
                </style> */}
                    {user.cryptocurrencyAddresses.ethereumAddress && (
                      <div className="button button-dead mx-auto">
                        Validate Address
                      </div>
                    )}
                  </form>
                  <small className="container mx-auto text-center w-2/3 pt-8">
                    By validating your Ethereum address, you agree to the
                    <a className="underline" href="">
                      Mining Coin Token Sale terms
                    </a>
                    and
                    <a className="underline" href="">
                      privacy policy.
                    </a>
                  </small>
                </div>
                {ethAddressAlert === 'valid' && (
                  <div className="w-2/3 mx-auto alert alert-success font-bold text-center">
                    Wallet address validated!
                  </div>
                )}

                {user.cryptocurrencyAddresses.ethereumAddress === 'invalid' && (
                  <div className="w-2/3 mx-auto alert alert-danger font-bold text-center">
                    Invalid wallet address.
                  </div>
                )}
                {user.cryptocurrencyAddresses.ethereumAddress && (
                  <>
                    <div className="flex flex-wrap mb-16">
                      <div className="text-center mx-auto">
                        <h3 className="heading-tertiary">Step 2:</h3>
                        <p>
                          Use our handy widget to calculate how much MNT you
                          plan to buy
                        </p>
                      </div>
                      <div className="flex w-2/3 mx-auto pt-8">
                        <i className="fas fa-exclamation-circle green"></i>
                        <p className="pl-8">
                          <strong>Optional!</strong> This step is only for your
                          reference and won’t affect your purchase. We will
                          automatically calculate your MNT based on the amount
                          of BTC or ETH you send.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-16 mx-auto w-full md:w-2/3">
                      <div className="w-1/3 text-center px-2 flex flex-wrap">
                        <div className="font-bold" style={{ color: '#000' }}>
                          Market Value:
                        </div>
                        <div className="w-full py-4 border-solid border-2 border-gray-500 rounded-lg shadow-lg px-8">
                          <img
                            className="mx-auto"
                            src="assets/img/icon/MNT_icon.png"
                            alt="MNT"
                          />
                          <input
                            className="w-2/3 pl-4 mr-4 border-solid border-2 border-gray-500 rounded-lg"
                            id="MNT-conversion-input"
                            type="number"
                            value="1"
                          />
                          MNT
                        </div>
                      </div>

                      <div className="flex flex-wrap w-2/3 pl-24 relative">
                        <div
                          className="absolute"
                          style={{
                            left: '2.5rem',
                            top: '7rem',
                            fonSize: '2rem'
                          }}
                        >
                          &#61;
                        </div>
                        <div className="w-1/2 text-center px-2">
                          <div style={{ color: '#000' }}>
                            <img
                              className="crypto_icon"
                              src={btc_icon}
                              alt=""
                            />
                            <strong>BTC</strong> $
                            <span className="" id="BTC-price">
                              {dashboard.cryptoPrice.BTCUSDT}
                            </span>
                          </div>
                          <div className="py-4 border-solid border-2 border-gray-500 rounded-lg shadow-lg">
                            <img className="mx-auto" src={btc_icon} alt="BTC" />
                            <span id="MNT-to-BTC">
                              {(0.06 / dashboard.cryptoPrice.BTCUSDT).toFixed(
                                8
                              )}
                            </span>{' '}
                            BTC
                          </div>
                        </div>
                        <div className="w-1/2 text-center px-2">
                          <div style={{ color: '#000' }}>
                            <img
                              className="crypto_icon"
                              src={eth_icon}
                              alt=""
                            />
                            <strong>ETH</strong> $
                            <span className="" id="ETH-price">
                              {dashboard.cryptoPrice.ETHUSDT}
                            </span>
                          </div>

                          <div className="py-4 border-solid border-2 border-gray-500 rounded-lg shadow-lg">
                            <img className="mx-auto" src={eth_icon} alt="ETH" />
                            <span id="MNT-to-ETH">
                              {(0.06 / dashboard.cryptoPrice.ETHUSDT).toFixed(
                                8
                              )}
                            </span>{' '}
                            ETH
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mb-16">
                      <h3 className="heading-tertiary">Step 3:</h3>
                      <p>
                        Send funds to either of the following addresses to
                        complete your purchase of MNT
                      </p>
                    </div>
                    <div className="w-2/3 mx-auto mb-16">
                      <div className="mb-8 flex flex-wrap">
                        <div className="w-1/4 flex flex-wrap align-items">
                          <img
                            className="object-contain"
                            src={eth_icon}
                            alt="Ethereum"
                          />
                          <h3
                            style={{ color: '#5F5F5F' }}
                            className="font-bold py-8 pl-4"
                          >
                            Ethereum
                          </h3>
                        </div>
                        <div className="w-3/4 text-center">
                          <p id="ethereumAddress" className="heading-tertiary">
                            0xBa1CBB940d036d6A7Cd9abd2efec6Cae7Fb2E5d5
                          </p>
                          <button
                            className="copyText"
                            onClick={e => handleCopyText('ethereumAddress', e)}
                          >
                            Click here to copy to clipboard
                          </button>
                        </div>
                      </div>
                      <div className="mb-8 flex flex-wrap">
                        <div className="w-1/4 flex flex-wrap">
                          <img
                            className="object-contain"
                            src={btc_icon}
                            alt="Bitcoin"
                          />
                          <h3
                            style={{ color: '#5F5F5F' }}
                            className="font-bold py-8 pl-4"
                          >
                            Bitcoin
                          </h3>
                        </div>
                        <div className="w-3/4 text-center">
                          {/* <% if(!cryptocurrencyAddresses.bitcoinAddress) { %>
                    <p className="heading-tertiary">
                        Error fetching bitcoin address, please contact support
                    </p>
                    <% } else { %>
                    <p className="heading-tertiary" id="bitcoinAddress">
                        <%= cryptocurrencyAddresses.bitcoinAddress %>
                    </p>
                    <% } %> */}
                          <button
                            className="copyText"
                            onClick={e => handleCopyText('bitcoinAddress', e)}
                          >
                            Click here to copy to clipboard
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-center mx-auto">
                      If for any reason you have not received your tokens in 7
                      days, please contact{' '}
                      <a
                        style={{ color: 'blue' }}
                        href="mailto: support@islandmining.io"
                      >
                        support@islandmining.io
                      </a>
                    </p>
                  </>
                )}
              </>
            )}
          </section>
        )}

        {user.affiliateProgram.affiliatePermissions === true && (
          <section className="container mx-auto px-16 py-12 mb-16">
            <h1 className="heading-primary mb-8">Affiliate Program</h1>
            <p className="text-center mb-16">
              Use your referral link to share the Mining Coin Token Sale with
              your friends and colleagues. You will receive a reward in MNT for
              first and second tier referrals. (i.e. if your friend signs up
              with your link, you will also receive a reward for MNT purchases
              referred by your friend)
            </p>

            <div className="flex flex-wrap md:w-1/2 mx-auto mb-16">
              <h3 className="heading-tertiary w-full text-center md:text-left md:w-1/3">
                Your referral code
              </h3>
              <div className="text-center w-full md:w-2/3">
                <input
                  type="hidden"
                  name="referralAddress"
                  value="<%- affiliateProgram.referralAddress %>"
                />
                <div
                  id="referralAddress"
                  className="border-solid border-2 border-gray-500 rounded-lg"
                >
                  {user.affiliateProgram.referralAddress}
                </div>
                <button
                  className="copyText"
                  onClick={e => handleCopyText('referralAddress', e)}
                >
                  Click here to copy to clipboard
                </button>
              </div>
            </div>

            <div className="flex flex-wrap md:w-1/2 mx-auto">
              <h3 className="heading-tertiary w-1/3 mb-16">Share link</h3>
              <div className="flex flex-wrap w-2/3">
                <i className="fab fa-facebook-messenger"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-weixin"></i>
                <i className="fab fa-line"></i>
                <i
                  className="fas fa-comment"
                  style={{ lineHeight: 1, fontSize: '2.2rem' }}
                ></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>

            <h3 className="heading-tertiary">Reward table(MNT)</h3>
            <table className="mx-auto mb-16">
              <tr>
                <th></th>
                <th>up to $10,000</th>
                <th>$10,000 - $50,000</th>
                <th>> $50,000</th>
              </tr>
              <tr>
                <td>1st tier referral:</td>
                <td>
                  <div
                    style={{ color: '#5F5F5F' }}
                    className="font-bold border-solid border-2 border-gray-600 shadow-md rounded-lg"
                  >
                    <span id="11">
                      {user.affiliateProgram.rewardTablePercentages[11]}
                    </span>
                  </div>
                </td>
                <td>
                  <div
                    style={{ color: '#5F5F5F' }}
                    className="font-bold border-solid border-2 border-gray-600 shadow-md rounded-lg"
                  >
                    <span id="12">
                      {user.affiliateProgram.rewardTablePercentages[12]}
                    </span>
                  </div>
                </td>
                <td>
                  <div
                    style={{ color: '#5F5F5F' }}
                    className="font-bold border-solid border-2 border-gray-600 shadow-md rounded-lg"
                  >
                    <span id="13">
                      {user.affiliateProgram.rewardTablePercentages[13]}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2nd tier referral:</td>
                <td>
                  <div
                    style={{ color: '#5F5F5F' }}
                    className="font-bold border-solid border-2 border-gray-600 shadow-md rounded-lg"
                  >
                    <span id="21">
                      {user.affiliateProgram.rewardTablePercentages[21]}
                    </span>
                  </div>
                </td>
                <td>
                  <div
                    style={{ color: '#5F5F5F' }}
                    className="font-bold border-solid border-2 border-gray-600 shadow-md rounded-lg"
                  >
                    <span id="22">
                      {user.affiliateProgram.rewardTablePercentages[22]}
                    </span>
                  </div>
                </td>
                <td>
                  <div
                    style={{ color: '#5F5F5F' }}
                    className="font-bold border-solid border-2 border-gray-600 shadow-md rounded-lg"
                  >
                    <span id="23">
                      {user.affiliateProgram.rewardTablePercentages[23]}
                    </span>
                  </div>
                </td>
              </tr>
            </table>

            <h3 className="heading-tertiary">Your referrals</h3>
            <table className="mx-auto mb-16">
              <tr>
                <th></th>
                <th># referred</th>
                <th>total MNT purchased</th>
                <th>your current reward</th>
              </tr>
              <tr>
                <td>1st tier referral:</td>
                <td>
                  <div
                    style={{ color: '#5F5F5F' }}
                    className="font-bold border-solid border-2 border-gray-600 shadow-md rounded-lg"
                  >
                    {user.affiliateProgram.referrals}
                  </div>
                </td>
                <td>
                  <div
                    style={{ color: '#5F5F5F' }}
                    className="font-bold border-solid border-2 border-gray-600 shadow-md rounded-lg"
                  >
                    <span id="total-purchased--tier-1">
                      {((user.totalFirstTierRewards || 0) / 0.06).toFixed(1)}
                    </span>
                    MNT
                  </div>
                </td>
                <td>
                  <div
                    style={{ color: '#009231' }}
                    className="font-bold border-solid border-2 border-green-500 shadow-md rounded-lg"
                  >
                    <span id="current-awards--tier-1">
                      {getFirstTierRewards()}
                    </span>{' '}
                    MNT
                  </div>
                </td>
              </tr>
              <tr>
                <td>2nd tier referral:</td>
                <td>
                  <div
                    style={{ color: '#5F5F5F' }}
                    className="font-bold border-solid border-2 border-gray-600 shadow-md rounded-lg"
                  >
                    {user.affiliateProgram.referrals_2}
                  </div>
                </td>
                <td>
                  <div
                    style={{ color: '#5F5F5F' }}
                    className="font-bold border-solid border-2 border-gray-600 shadow-md rounded-lg"
                  >
                    <span id="total-purchased--tier-2">
                      {((user.totalSecondTierRewards || 0) / 0.06).toFixed(1)}
                    </span>
                    MNT
                  </div>
                </td>
                <td>
                  <div
                    style={{ color: '#009231' }}
                    className="font-bold border-solid border-2 border-green-500 shadow-md rounded-lg"
                  >
                    <span id="current-awards--tier-2">
                      {getSecondTierRewards()}
                    </span>{' '}
                    MNT
                  </div>
                </td>
              </tr>
            </table>
            <div className="text-center font-bold">
              Total Affiliate Rewards{' '}
              <span
                className="border-solid border-2 border-green-500 shadow-md rounded-lg px-4 py-4 ml-4"
                style={{ color: '#009231' }}
              >
                <span id="totalAffiliateRewards">49,027</span> MNT
              </span>
            </div>
          </section>
        )}

        {user.userInformation && userInformation.firstName && (
          <section className="container mx-auto px-16 py-12 mb-16">
            <h1 className="heading-primary mb-8">Your Registration Info</h1>
            <div className="flex flex-wrap w-full md:w-2/3 mx-auto mb-16">
              <div className="w-1/2">First Name</div>
              <div className="w-1/2">{user.userInformation.firstName}</div>
              <div className="w-1/2">Last Name</div>
              <div className="w-1/2">{user.userInformation.lastName}</div>
              <div className="w-1/2">Date of Birth</div>
              <div className="w-1/2"> {user.userInformation.DOB}</div>
              <div className="w-1/2">Email Address</div>
              <div className="w-1/2"> {user.username}</div>
              <div className="w-1/2">Street Address</div>
              <div className="w-1/2">{user.userInformation.address}</div>
              <div className="w-1/2">City</div>
              <div className="w-1/2">{user.userInformation.city}</div>
              <div className="w-1/2">Province/State/Prefecture</div>
              <div className="w-1/2">{user.userInformation.province}</div>
              <div className="w-1/2">Country</div>
              <div className="w-1/2">{user.userInformation.residency}</div>
              <div className="w-1/2">KYC Document Type</div>
              <div className="w-1/2">Verified ID</div>
              <div className="w-1/2">Ethereum Wallet Address</div>
              <div className="w-1/2">
                {user.cryptocurrencyAddresses.ethereumAddress}
              </div>
            </div>

            <p className="text-center heading-tertiary">
              If any of the above information is incorrect, please contact
              support at{' '}
              <a
                style={{ color: 'blue' }}
                href="mailto: support@islandmining.io"
              >
                support@islandmining.io
              </a>
            </p>
          </section>
        )}
        <div className="py-4">&nbsp;</div>
      </div>
    </div>
  );
}

export default Dashboard;
