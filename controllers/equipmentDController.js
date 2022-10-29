"use strict";

const userData = require("../data/EquipmentDetail");


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// get ทั้งหมด
const getAllItem = async (req, res, next) => {
  try {
    const userlist = await userData.getItem();
    console.log(userlist);
    res.send(userlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// const getItems = async (req, res, next) => {
//   try {
//     const EquipmentCode = req.params.EquipmentCode;
//     const item = await userData.getByUserName(EquipmentCode);
//     console.log(item);
//     res.send(item);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// สมัครใหม่ register
const additem = async (req, res, next) => {
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

// searchItem
const searchItem = async (req, res, next) => {
  try {
    const Data = {
      EquipmentCode: req.body.EquipmentCode,
    };
    const err = new Error();
    const findUser = await userData.getByItem(Data.EquipmentCode);
    // console.log(findUser);
    if (findUser.length === 0) {
      err.message = "Item not found";
      return res.status(404).json(err);
    }
    // console.log(findUser);
   

    return res.send(findUser);
    //res.send("Login");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllItem,
  additem,
  searchItem,
};
