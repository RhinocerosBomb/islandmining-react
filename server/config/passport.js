const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

var User = require("../models/user");
// var config = require('../config/database'); // get db config file

module.exports = function(passport, app) {
  passport.use(new LocalStrategy(User.authenticate()));

  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = "secret";
  passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
      User.findOne({ _id: jwt_payload._id }, function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    })
  );

  // passport.use(
  //   new GoogleStrategy(
  //     {
  //       callbackURL: "https://www.islandmining.io/auth/google/redirect",
  //       clientID:
  //         "985019318154-neihh7vs890qteen8kflvcg7aojs7oac.apps.googleusercontent.com",
  //       clientSecret: "lSCaYn8wyuVLJT6oPf1NAQoB"
  //     },
  //     (accessToken, refreshToken, profile, done) => {
  //       User.findOne({ oauthID: profile.id }, function(err, user) {
  //         if (err) console.log(err);
  //         if (!err && user !== null) {
  //           done(null, user);
  //         } else {
  //           new User({
  //             oauthID: profile.id,
  //             name: profile.displayName
  //           })
  //             .save()
  //             .then(newUser => {
  //               console.log("google user created");
  //               done(null, profile);
  //             });
  //         }
  //       });
  //     }
  //   )
  // );

  // passport.serializeUser(function(user, done) {
  //   console.log("serializeUser: " + user._id);
  //   done(null, user._id);
  // });
  // passport.deserializeUser(function(id, done) {
  //   User.findById(id, function(err, user) {
  //     console.log(user);
  //     if (!err) done(null, user);
  //     else done(err, null);
  //   });
  // });
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
};
