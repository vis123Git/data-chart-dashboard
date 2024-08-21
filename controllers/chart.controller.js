// controllers/chartController.js
const Chart = require("../models/Chart");
const DataSource = require("../models/DataSource");

exports.createChart = async (req, res) => {
  try {
    const { title, dataSource, chartType, xAxis, yAxis } = req.body;
    const chart = new Chart({ title, dataSource, chartType, xAxis, yAxis });
    await chart.save();
    return res.status(200).json({ status: true, data: chart, message: "Sucess!" });
  } catch (error) {
    console.log("error===>", error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};

exports.getCharts = async (req, res) => {
  try {
    const charts = await Chart.find().populate("dataSource");
    if (!charts) return res.status(400).json({ status: false, message: "Unable to fetch data!" });

    return res.status(200).json({ status: true, data: charts, message: "Sucess!" });
  } catch (error) {
    console.log("error===>", error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};
