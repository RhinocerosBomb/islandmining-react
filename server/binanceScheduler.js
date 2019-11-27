//GET /api/v3/avgPrice average price
//GET /api/v3/ticker/price ticker price

const schedule = require("node-schedule");
const request = require("request");

// No API KEY needed for avg prices
const callBinance = function(symbol) {
  const options = {
    url: `https://api.binance.com/api/v3/avgPrice?symbol=${symbol}`,
    method: "GET",
    json: true
  };

  return new Promise(function(resolve, reject) {
    request(options, function(error, response, body) {
      console.log({ status: response.statusCode, body });
      if (response.statusCode === 200) {
        resolve(body);
      } else {
        reject({ status: response.statusCode, body });
      }
    });
  });
};

const scheduler = function(CryptoPrice) {
  // cron is "sec min hour day-of-month month day-of-week"
  // runs at 7am and 7pm (EST) or 12am and 12pm (UCT)
  // For testing purposes. It runs every 30 secs.
  // schedule.scheduleJob("0,30 * * * * *", async function() {
  schedule.scheduleJob("* * 7,19 * * *", async function() {
    try {
      // Binance API does not support multiple symbols in one call for avg price
      const BTCUSDT = await callBinance("BTCUSDT");
      const ETHUSDT = await callBinance("ETHUSDT");

      const cryptoPrice = new CryptoPrice({
        BTCUSDT: BTCUSDT.price,
        ETHUSDT: ETHUSDT.price
      });

      cryptoPrice.save(function(err) {
        if (err) console.log(err);
      });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = scheduler;
