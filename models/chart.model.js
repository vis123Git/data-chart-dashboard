// models/Chart.js
const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dataSource: { type: mongoose.Schema.Types.ObjectId, ref: 'data_source', required: true },
  chartType: { type: String, enum: ['line', 'bar', 'pie'], required: true },
  xAxis: { type: String, required: true },
  yAxis: { type: String, required: true },
});

module.exports = mongoose.model('chart', chartSchema);