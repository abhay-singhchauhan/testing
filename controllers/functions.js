const { json } = require("body-parser");
const user = require("../models/user");

exports.getuser = async function (req, res, next) {
  try {
    console.log(req.body);
    console.log("inside the route");
    const { searchBy } = req.body;
    console.log(searchBy);
    const userData = await user.findAll({
      where: searchBy,
    });
    console.log(userData);
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
  }
};

exports.createuser = async function (req, res, next) {
  try {
    let companies = ["microsoft", "google", "airtel", "jio"];
    let cities = ["mumbai", "bengaluru", "dehradun", "delhi"];

    if (!companies.includes(req.body.company)) {
      res.status(404).json({ message: "company not found" });
    }
    if (!cities.includes(req.body.city)) {
      res.status(404).json({ message: "city not found" });
    }
    const userData = await user.create(req.body);
    res.json(userData);
  } catch (err) {
    console.log(err);
  }
};

exports.byId = async function (req, res, next) {
  try {
    const userData = await user.findByPk(req.query.id);
    res.json(userData);
  } catch (err) {
    console.log(err);
  }
};

exports.getCities = async function (req, res, next) {
  try {
    const userData = await user.findAll({});
    res.json(userData);
  } catch (err) {
    console.log(err);
  }
};
