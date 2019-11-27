const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  username: String,
  userIndex: String,
  kycStatus: {
    verified: {
      type: String,
      default: "false"
    },
    kycUrl: String,
    kycUpdated: Date
  },
  userInformation: {
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    province: String,
    DOB: String,
    phone: String,
    citizenship: String,
    citizenship_2: String,
    residency: String
  },
  affiliateProgram: {
    affiliatePermissions: {
      type: Boolean,
      default: false
    },
    referredBy: {
      type: String,
      default: null
    },
    referrals: {
      type: Number,
      default: 0
    },
    referrals_2: {
      type: Number,
      default: 0
    },
    referralAddress: String,
    rewardTablePercentages: {
      11: {
        type: Number,
        default: 5
      },
      12: {
        type: Number,
        default: 6.5
      },
      13: {
        type: Number,
        default: 8
      },
      21: {
        type: Number,
        default: 1
      },
      22: {
        type: Number,
        default: 1.5
      },
      23: {
        type: Number,
        default: 2
      }
    }
  },
  cryptocurrencyAddresses: {
    bitcoinAddress: String,
    ethereumAddress: {
      type: String,
      default: null
    }
  },
  transactionHistory: {
    firstRound: Array
  }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
