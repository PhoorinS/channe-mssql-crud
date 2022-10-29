"use strict";

const express = require("express");
const equipmentDController = require("../controllers/equipmentDController");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const auth = require("../middleware/auth");

router.get("/allitem", equipmentDController.getAllItem);
router.post("/searchItem", equipmentDController.searchItem);
router.post("/additem", equipmentDController.additem);
//router.post("/login", userControll.login);
// router.delete("/event/:id", userControll.deleteEvent);

module.exports = {
  routes: router,
};
