'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usertask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usertask.init({
    
    taskId: DataTypes.INTEGER,
    id:{type: DataTypes.INTEGER,primaryKey:true}
  }, {
    sequelize,
    modelName: 'usertask',
  });
  return usertask;
};