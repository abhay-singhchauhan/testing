const express = require("express");
const router = express.Router();

const {
  getuser,
  createuser,
  byId,
  getCities,
} = require("../controllers/functions");

router.post("/get-user", getuser);
router.post("/add-user", createuser);
router.get("/by-id", byId);
router.get("/cities", getCities);
module.exports = router;
