"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getItem = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("EquipmentDetail");
    const itemlist = await pool.request().query(sqlQueries.equipmentDlist);
    console.log(itemlist);
    return itemlist.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getByItem = async (EquipmentCode) => {
  try {
    console.log(EquipmentCode);
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("EquipmentDetail");
    const event = await pool
    
      .request()
      .input("EquipmentCode", sql.VarChar(50), EquipmentCode)
      .query(sqlQueries.equipmentDbyEquipmentD);
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
    console.log(userdata);
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("EquipmentDetail");
    const insertEvent = await pool
      .request()
      .input("EquipmentCode", sql.VarChar(50), userdata.EquipmentCode)
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
  getItem,
  getByItem,
  creatUser,
};
