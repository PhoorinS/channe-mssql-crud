"use strict";

const express = require("express");
const eventControll = require("../controllers/eventController");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/events", auth, eventControll.getAllEvents);
router.get("/event/:id", auth, eventControll.getEvent);
router.post("/event", auth, eventControll.addEvent);
router.put("/event/:id", auth, eventControll.updatEvent);
router.delete("/event/:id", auth, eventControll.deleteEvent);

module.exports = {
  routes: router,
};
