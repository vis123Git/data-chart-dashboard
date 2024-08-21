const User = require("../models/user.model");

exports.createUser = async (req, res) => {
  try {
    const { username, password, role, accessibleCategories } = req.body;

    if (!username) return res.status(400).json({ status: false, message: "Username is required!" });
    if (!password) return res.status(400).json({ status: false, message: "password is required!" });
    if (!role) return res.status(400).json({ status: false, message: "role is required!" });
    if (!accessibleCategories || !Array.isArray(accessibleCategories) || !accessibleCategories?.length) return res.status(400).json({ status: false, message: "accessibleCategories is required!" });

    const user = new User({ username, password, role, accessibleCategories });
    await user.save();
    return res.status(200).json({ status: true, data: user, message: "Sucess!" });
  } catch (error) {
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("accessibleCategories");
    if (!users) return res.status(400).json({ status: false, message: "Unable to fetch data!" });

    return res.status(200).json({ status: true, data: users, message: "Sucess!" });
  } catch (error) {
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};
