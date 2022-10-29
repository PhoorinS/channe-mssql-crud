"use strict";
const express = require("express");
const config = require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
const auth = require("./routes/auth");
const passport = require("passport");
const eqiupmentDRoutes = require("./routes/eqiupmentDRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

app.use("/api", eventRoutes.routes);
app.use("/api", userRoutes.routes);
app.use("/api", eqiupmentDRoutes.routes);
app.use("/api", auth.routes);

app.listen(config.port, () => {
  console.log("app listening on url http://localhost:" + config.port);
});
