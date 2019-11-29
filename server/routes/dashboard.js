/**
 * dashboard.js is the logic behind the dashboard page
 */
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const CryptoPrice = require("../models/cryptoPrice");
const Transaction = require("../models/transaction");
const Web3 = require("web3");
const request = require("request");
var jwt = require("jsonwebtoken");
const passport = require("passport");

const findAffiliates = async affiliateProgram => {
  var totalFirstTierRewards = 0;
  var totalSecondTierRewards = 0;
  // Find all first tier referrals
  if (affiliateProgram.affiliatePermissions === true) {
    const users_1 = await User.find({
      "affiliateProgram.referredBy": affiliateProgram.referralAddress
    })
      .exec()
      .catch(err => console.log(err));
    // async does not work for array.foreach callbacks
    for (let i = 0; i < users_1.length; i++) {
      const user_1 = users_1[i];
      if (
        user_1.transactionHistory.firstRound &&
        user_1.transactionHistory.firstRound.length > 0
      ) {
        for (let i = 0; i < user_1.transactionHistory.firstRound.length; i++) {
          const transaction_1 = user_1.transactionHistory.firstRound[i];
          const transaction = await Transaction.findOne({
            id: transaction_1
          })
            .exec()
            .catch(err => console.log(err));
          totalFirstTierRewards += parseInt(transaction.amountSent.USD);
        }
      }

      const users_2 = await User.find({
        "affiliateProgram.referredBy": user_1.affiliateProgram.referralAddress
      })
        .exec()
        .catch(err => console.log(err));
      for (let i = 0; i < users_2.length; i++) {
        const user_2 = users_2[i];

        if (
          user_2.transactionHistory.firstRound &&
          user_2.transactionHistory.firstRound.length > 0
        ) {
          for (
            let i = 0;
            i < user_2.transactionHistory.firstRound.length;
            i++
          ) {
            const transaction_2 = user_2.transactionHistory.firstRound[i];
            const transaction = await Transaction.findOne({
              id: transaction_2
            })
              .exec()
              .catch(err => console.log(err));
            totalSecondTierRewards += parseInt(transaction.amountSent.USD);
          }
        }
      }
    }
  }
  return { totalFirstTierRewards, totalSecondTierRewards };
};

/**
 * Dashboard route.
 *
 * Has to verify that user is logged in before loading the page.
 * The route then searches for the logged in user in the database
 * and loads their information.
 */
router.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  async function(req, res) {
    // Netverify information
    const {
      username,
      kycStatus,
      userInformation,
      affiliateProgram,
      cryptocurrencyAddresses
    } = await User.findOne({ username: req.user.username })
      .exec()
      .catch(err => console.log(err));

    const tierRewards = await findAffiliates(affiliateProgram);

    const cryptoPrice = await CryptoPrice.findOne(
      {},
      {},
      { sort: { dateTime: -1 } },
      err => {
        err && console.log(err);
      }
    );

    res.json({
      // kycStatus,
      // userInformation,
      // affiliateProgram,
      // cryptocurrencyAddresses,
      tierRewards,
      cryptoPrice
    });
  }
);

router.post(
  "/kyc/completed/:token",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    console.log(req.params.token);
    User.findOne({ userIndex: req.body.customerId }, function(err, user) {
      if (!user) return;

      const decoded = jwt.verify(req.params.token, "This is a secret :)");

      if (decoded.username === user.username) {
        if (
          req.body.verificationStatus !== "NO_ID_UPLOADED" &&
          req.body.verificationStatus !== "ERROR_NOT_READABLE_ID"
        ) {
          user.kycStatus.verified = "true";
          user.save(function(err) {
            if (err) console.log(err);
          });
        } else {
          if (user.kycStatus.verified !== "true") {
            user.kycStatus.verified = "failed";
            user.save(function() {
              if (err) console.log(err);
            });
          }
        }
      }
    });
  }
);

router.post(
  "/submitPending",
  passport.authenticate("jwt", { session: false }),
  
  function(req, res) {
    User.findOne({ username: req.user.username }, function(err, user) {
      if (err) console.log(err);
      user.kycStatus.verified = "pending";
      user.save(error => error && console.log(error));
      const accessToken = jwt.sign(user.toJSON(), "secret");
      res.status(200).json({user, accessToken});
    });
  }
);

router.post(
  "/submitInformation",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    const { userInformation } = req.body;
    User.findOne({ username: req.user.username }, function(err, user) {
      user.userInformation = userInformation;
      user.save(err => {
        if (err) {
          res.send({ message: "Something went wrong" });
        } else {
          const accessToken = jwt.sign(user.toJSON(), "secret");
          res.status(200).json({user, accessToken});
        }
      });
    })
  }
);

/**
 * Verifies legitimacy of inputed Ethereum address
 *
 * Receives POST request from dashboard page
 * and verifies the address with Web3.
 * If it is a valid address, update user's Ethereum address
 */
router.post(
  "/verifyEthereum",
  passport.authenticate("jwt", { session: false }),

  function(req, res) {
    const {user} = req;
    if (Web3.utils.isAddress(req.body.address) === true) {
      user.cryptocurrencyAddresses.ethereumAddress = req.body.address;
      user.save(err => {
        if(err) {
          return res.status(400).send({message: "error"})
        }
        const accessToken = jwt.sign(user.toJSON(), "secret");
        return res.status(200).json({user, accessToken});
      });  
    } else {
      res.status(400).send({message: "Wallet is not valid"});
    }
  }
);


module.exports = router;
