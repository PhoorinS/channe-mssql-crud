"use strict";

const express = require("express");
const userControll = require("../controllers/userController");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/auth", auth, async (req, res) => {
  try {
    res.send("Page Auth");
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "server Error" });
  }
});

module.exports = {
  routes: router,
};
