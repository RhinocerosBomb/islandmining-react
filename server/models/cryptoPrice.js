const mongoose = require("mongoose");

const CryptoPriceSchema = new mongoose.Schema({
  dateTime: { type: Date, default: Date.now },
  BTCUSDT: Number,
  ETHUSDT: Number
});

module.exports = mongoose.model("CryptoPrice", CryptoPriceSchema);
