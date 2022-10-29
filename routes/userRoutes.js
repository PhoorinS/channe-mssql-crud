"use strict";

const express = require("express");
const userControll = require("../controllers/userController");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const auth = require("../middleware/auth");

router.get("/users", userControll.getAllUsers);
// router.get("/event/:id", userControll.getEvent);
router.post("/register", userControll.addUser);
router.post("/login", userControll.login);
// router.delete("/event/:id", userControll.deleteEvent);

module.exports = {
  routes: router,
};
