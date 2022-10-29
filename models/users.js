// module.exports = (sequelize, Sequelize) => {
//   const User = sequelize.define(
//     "User",
//     {
//       UserName: {
//         type: Sequelize.STRING(50),
//         allowNull: false,
//         field: "UserName",
//       },
//       Password: {
//         type: Sequelize.STRING(2048),
//         allowNull: false,
//         field: "Password",
//       },
//       FName: {
//         type: Sequelize.STRING(50),
//         allowNull: false,
//         field: "FName",
//       },
//       LName: {
//         type: Sequelize.STRING(50),
//         allowNull: false,
//         field: "LName",
//       },
//       DepartmentDetailId: {
//         type: Sequelize.INTEGER(11),
//         allowNull: false,
//         field: "DepartmentDetailId",
//       },
//       IdCard: {
//         type: Sequelize.STRING(50),
//         allowNull: false,
//         field: "IdCard",
//       },
//     },
//     { tableName: "User" }
//   );
//   return User;
// };

// const UserSchema = {
//   Userid: {
//     type: int,
//     required: true,
//   },
//   UserName: {
//     type: String,
//     required: true,
//   },
//   Password: {
//     type: String,
//     required: true,
//   },
//   FName: {
//     type: String,
//   },
//   LName: {
//     type: String,
//     required: true,
//   },
//   DepartmentDetailId: {
//     type: int,
//     required: true,
//   },
//   IdCard: {
//     type: String,
//     required: true,
//   },
// };

// module.exports = {
//   UserSchema,
// };

const UserSchema = {
  Userid: "",
  UserName: "",
  Password: "",
  FName: "",
  LName: "",
  DepartmentDetailId: "",
  IdCard: "",
};

module.exports = {
  UserSchema,
};
