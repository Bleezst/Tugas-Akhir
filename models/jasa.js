'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jasa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jasa.init({
    nama_jasa: DataTypes.STRING,
    harga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jasa',
  });
  return jasa;
};