"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getUsers = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("users");
    const usersList = await pool.request().query(sqlQueries.userslist);
    console.log(usersList);
    return usersList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getByUserName = async (UserName) => {
  try {
    //console.log(UserName);
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("users");
    const event = await pool
    
      .request()
      .input("UserName", sql.VarChar(50), UserName)
      .query(sqlQueries.userbyUsername);
    //return event.recordset[0];

    console.log(event)
    if (event.recordset.length === 0) {
      return (event.recordset = []);
    } else {
     // console.log(JSON.stringify(event.recordset));
      return event.recordset[0];
    }
    //return event.recordset[0];
  } catch (error) {
    return error.message;
  }
};

const creatUser = async (userdata) => {
  try {
    //console.log(userdata);
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Users");
    const insertEvent = await pool
      .request()
      .input("UserName", sql.VarChar(50), userdata.UserName)
      .input("Password", sql.NVarChar(2048), userdata.Password)
      .input("FName", sql.VarChar(50), userdata.FName)
      .input("LName", sql.VarChar(50), userdata.LName)
      .input("DepartmentDetailId", sql.Int, userdata.DepartmentDetailId)
      //.input("IdCard", sql.VarChar(50), userdata.IdCard)
      .query(sqlQueries.createUser);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

// const updateUser = async (eventId, data) => {
//   try {
//     let pool = await sql.connect(config.sql);
//     const sqlQueries = await utils.loadSqlQueries("User");
//     const update = await pool
//       .request()
//       .input("eventId", sql.Int, eventId)
//       .input("eventTitle", sql.NVarChar(100), data.eventTitle)
//       .input("eventDescription", sql.NVarChar(1500), data.eventDescription)
//       .input("startDate", sql.Date, data.startDate)
//       .input("endDate", sql.Date, data.endDate)
//       .input("avenue", sql.NVarChar(200), data.avenue)
//       .input("maxMembers", sql.Int, data.maxMembers)
//       .query(sqlQueries.updateEvent);
//     return update.recordset;
//   } catch (error) {
//     return error.message;
//   }
// };

// const deleteUser = async (eventId) => {
//   try {
//     let pool = await sql.connect(config.sql);
//     const sqlQueries = await utils.loadSqlQueries("User");
//     const deleteEvent = await pool
//       .request()
//       .input("eventId", sql.Int, eventId)
//       .query(sqlQueries.deleteEvent);
//     return deleteEvent.recordset;
//   } catch (error) {
//     return error.message;
//   }
// };

module.exports = {
  getUsers,
  getByUserName,
  creatUser,
};
