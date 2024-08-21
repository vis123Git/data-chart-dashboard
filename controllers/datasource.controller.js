const DataSource = require("../models/datasource.model");

exports.createDataSource = async (req, res) => {
  try {
    const { name, type, data } = req.body;
    if (!name) return res.status(400).json({ status: false, message: "name is required!" });
    if (!type) return res.status(400).json({ status: false, message: "type is required!" });
    if (!data) return res.status(400).json({ status: false, message: "data is required!" });
    const dataSource = new DataSource({ name, type, data });
    const dataSaved = await dataSource.save();
    if (!dataSaved) return res.status(400).json({ status: false, message: "Unable to add data!" });
    return res.status(201).json({ status: true, data: dataSource, message: "Sucess!" });
  } catch (error) {
    console.log("error===>", error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};

exports.getDataSources = async (req, res) => {
  try {
    const dataSources = await DataSource.find();
    if (!dataSources) return res.status(400).json({ status: false, message: "Unable to fetch data!" });

    return res.status(200).json({ status: true, data: dataSources, message: "Sucess!" });
  } catch (error) {
    console.log("error===>", error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};
