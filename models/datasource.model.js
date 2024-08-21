const mongoose = require('mongoose');

const dataSourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['BSE', 'NSE'], required: true },
  data: [
    {
      script: { type: String, required: true },
      closePrice: { type: Number, required: true },
      highPrice: { type: Number, required: true },
      lowPrice: { type: Number, required: true },
      volume: { type: Number, required: true },
      deliveryPercentage: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('data_source', dataSourceSchema);