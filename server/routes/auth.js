/**
 * auth.js routes is the user authentication logic
 */
const express = require("express");
const router = express.Router();
const passport = require("passport");
const request = require("request");
const User = require("../models/user");
const bjs = require("bitcoinjs-lib");
const bip32 = require("bip32");
const xpub =
  "xpub6Ci3DHRbomXva9UT2ZFDWwxeUVqw8vox45ofZCDMk5tpA8cQeiExu8BVPYhYbx6chuquywSgXofiSTbLjL9YzvVUC7VEkayTw5igbCCnmky";
var jwt = require("jsonwebtoken");

// router.get("/register", function(req, res) {
//   if (req.isAuthenticated()) {
//     res.status(200).send({
//       auth: true,
//       message: "user found & logged in"
//     });
//   } else {
//     res.send({ referralAddress: false });
//   }
// });

router.post("/register", async function(req, res) {
  const referrer = await User.findOne({
    "affiliateProgram.referralAddress": req.body.referral
  }).exec();

  // If invalid referral code, return error
  if (!referrer && req.body.referral) {
    return res.status(400).send({
      message: "Invalid Referral Code"
    });
  }

  var userIndex = await User.count();
  userIndex = userIndex + 200;

  var token = jwt.sign({ username: req.body.username }, "This is a secret :)");
  const options = {
    url: "https://netverify.com/api/v4/initiate",
    method: "POST",
    json: true,
    body: {
      customerInternalReference: "JUMIOGENERATED",
      userReference: userIndex,
      callbackUrl: "https://www.islandmining.io/kyc/completed/" + token
    },
    auth: {
      user: "72b2e9ed-3cbf-4f3f-b1db-28cf388476b2",
      password: "E6vxGqxblvicH7hPfLFKKrXrYxr5fxWA"
    },
    headers: {
      "User-Agent": "SMB Redirect/1.0.0",
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  // Sends a POST request to Netverify servers
  // then loads KYC page with registration link (redirectUrl)
  request(options, function(err, response, body) {
    console.log(response.statusCode);

    // Generate address
    if (!err && response.statusCode == 200) {
      var { address } = bjs.payments.p2sh({
        redeem: bjs.payments.p2wpkh({
          pubkey: bip32
            .fromBase58(xpub)
            .derive(0)
            .derive(userIndex).publicKey
        })
      });

      User.register(
        new User({
          username: req.body.username,
          userIndex: userIndex,
          cryptocurrencyAddresses: {
            bitcoinAddress: address
          },
          affiliateProgram: {
            referralAddress: Math.floor(Math.random() * 1000000000 + 1)
          },
          kycStatus: {
            kycUrl: body.redirectUrl,
            kycUpdated: Date.now()
          }
        }),
        req.body.password,
        function(err, user) {
          if (err) {
            console.log(err);
            return res.status(400).send({
              message: err
            });
          }

          passport.authenticate("local", { session: false })(
            req,
            res,
            function() {
              if (
                req.user.affiliateProgram.referralAddress != req.body.referral
              ) {
                // Increment user who referred the just registered user
                // Find user whose referral link was entered

                if (referrer) {
                  referrer.affiliateProgram.referrals += 1;
                  referrer
                    .save()
                    .then(function() {
                      // Check if they were referred
                      if (
                        req.body.referral &&
                        user.affiliateProgram.referredBy !== null
                      ) {
                        User.findOneAndUpdate(
                          {
                            "affiliateProgram.referralAddress":
                              referrer.affiliateProgram.referredBy
                          },
                          { $inc: { "affiliateProgram.referrals_2": 1 } },
                          function(err) {
                            if (err) console.log(err);
                          }
                        );
                      }
                    })
                    .catch(err => err && console.log(err));
                }

                // Updated "referredBy" of just registered user
                User.findOneAndUpdate(
                  { username: req.user.username },
                  {
                    $set: { "affiliateProgram.referredBy": req.body.referral }
                  },
                  function(err) {
                    if (err) console.log(err);
                  }
                );
              } else {
                res
                  .status(400)
                  .send({ message: "Cannot enter your own referral address" });
              }
              const accessToken = jwt.sign(user.toJSON(), "secret");
              res.status(200).send({ message: "user created", accessToken });
            }
          );
        }
      );
    } else {
      // Let the user know our app wasn't able to grab the registration link
      if (err) console.log(err);
      res.status(500).send({
        message:
          "something went wrong, please contact Island Mining and report this problem"
      });
    }
  });
});

// Login Routes
// router.get("/login", function(req, res) {
//   if (req.isAuthenticated()) {
//     res.status(200).send({
//       auth: true,
//       message: "user found & logged in"
//     });
//   } else {
//     res.send({ message: req.flash("error") });
//   }
// });

router.post(
  "/login",
  passport.authenticate("local", {
    session: false
  }),
  function(req, res) {
    const accessToken = jwt.sign(req.user.toJSON(), "secret");
    res.status(200).json({
      success: true,
      accessToken
    });
  }
);

// Logout route
// router.post("/logout", function(req, res) {
//   req.session.destroy();
//   req.logout();
//   res.clearCookie("connect.sid", { path: "/" });
// });

router.get("/me", function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    const user = jwt.verify(token, "secret");
    return res.status(200).json(user);
  } else {
    return res.status(403).json({ msg: "Unauthorized." });
  }
});

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   req.flash("error", "You need to be logged in to do that.");
// }

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
