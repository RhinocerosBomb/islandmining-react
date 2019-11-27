var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
    id: String,
    sentBy: String,
    date: {
        type: Date,
        default: Date.now()
    },
    amountSent: {
        USD: String,
        BTC: String,
        ETH: String,
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
