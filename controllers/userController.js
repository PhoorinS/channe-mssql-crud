"use strict";

const userData = require("../data/users");

const User = require("../models/users");
const keys = require("../config/keys");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// get ทั้งหมด
const getAllUsers = async (req, res, next) => {
  try {
    const userlist = await userData.getUsers();
    console.log(userlist);
    res.send(userlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// const getUsers = async (req, res, next) => {
//   try {
//     const userName = req.params.UserName;
//     const user = await userData.getByUserName(userName);
//     console.log(user);
//     res.send(user);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// สมัครใหม่ register
const addUser = async (req, res, next) => {
  try {
    const Data = {
      UserName: req.body.UserName,
      Password: req.body.Password,
      FName: req.body.FName,
      LName: req.body.LName,
      DepartmentDetailId: req.body.DepartmentDetailId,
    };
    const findUser = await userData.getByUserName(Data.UserName);
    console.log(findUser);
    if (Object.keys(findUser).length > 0) {
      err.message = "User alredy";
      return res.status(404).json(err);
    }
    //console.log(Data)
    bcrypt.genSalt(10, async (err, salt) => {
      await bcrypt.hash(Data.Password, salt, async (err, hash) => {
        console.log(err);
        if (!err) {
          
        Data.Password = hash;
        console.log(Data.Password)

        const insert = await userData.creatUser(Data);
        // console.log(insert);
        res.send(insert);
        };
        
      });
    });

    //console.log(Data.Password);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// login
const login = async (req, res, next) => {
  try {
    const Data = {
      UserName: req.body.UserName,
      Password: req.body.Password,
    };
    const err = new Error();
    const findUser = await userData.getByUserName(Data.UserName);
    console.log(findUser);
    if (findUser.length === 0) {
      err.message = "User not found";
      return res.status(404).json(err);
    }

    // Check Password
    console.log(findUser);

    bcrypt.compare(Data.Password, findUser.Password).then((isMatch) => {
      if (isMatch) {
        console.log("Match");
        // User Matched
        const payload = {
          id: findUser.UserId,
          user: findUser.UserName,
          name: findUser.FName,
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: token,
            });
          }
        );
      } else {
        console.log("Not Match");
        err.message = "Password incorrect";
        return res.status(400).json(err);
      }
    });

    //return res.send(findUser);
    //res.send("Login");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  login,
};
