var DataTypes = require("sequelize").DataTypes;
var _congé = require("./congé");
var _employé = require("./employé");

function initModels(sequelize) {
  var congé = _congé(sequelize, DataTypes);
  var employé = _employé(sequelize, DataTypes);


  return {
    congé,
    employé,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
