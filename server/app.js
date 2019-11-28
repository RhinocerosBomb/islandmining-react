/**
 * app.js is the starting point
 */
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const flash = require("connect-flash");
const methodOverride = require('method-override');
const app = express();

const mongoose = require("mongoose");
const User = require("./models/user");
const Transaction = require("./models/transaction");
const CryptoPrice = require("./models/cryptoPrice");

// Require auth packages
const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20");
// const passportLocalMongoose = require("passport-local-mongoose");

// Cryptocurrency-helper packages
const bjs = require("bitcoinjs-lib");
const bip32 = require("bip32");
const Web3 = require("web3");

// Include routes
const indexRoutes = require("./routes/index");
const dashboardRoutes = require("./routes/dashboard");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

// Include binance api scheduler
const binanceScheduler = require("./binanceScheduler")(CryptoPrice);

// Variables
// const CMC_API_KEY = '2372fa89-a6e9-461a-811d-fdaf24506f31'; // Coin Market Cap API key
const CONNECTION_STRING =
  "mongodb+srv://VictorHogrefe:Manowar2@cluster0-dbqcz.mongodb.net/user-registration-db?retryWrites=true&w=majority";
const DEV_CONNECTION_STRING = 'mongodb://localhost:27017/test';
// Connect to MongoAtlas database
mongoose.connect(DEV_CONNECTION_STRING, { useNewUrlParser: true });

// App settings
app.set("view engine", "ejs");
app.use(flash());
app.use(express.static(__dirname));
app.use(methodOverride('_method'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Auth settings
app.use(passport.initialize());
require('./config/passport')(passport);


// Route settings
app.use(authRoutes);
app.use(dashboardRoutes);
app.use(indexRoutes);
app.use('/admin', adminRoutes);

app.listen(process.env.PORT || 9000, function() {
  console.log("Server started ON PORT 9000");
});
