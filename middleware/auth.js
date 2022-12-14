const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // GET token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  console.log(config.get("jwtSecret"));
  //Verify token
  try {
    console.log(config.get("jwtSecret"));
    console.log(token);
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
