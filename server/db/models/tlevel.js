'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TLevel.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tlevel_question: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    tlevel_option1: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    tlevel_option2: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    tlevel_option3: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    tlevel_option4: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    tlevel_answer1: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    tlevel_answer2: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    tlevel_answer3: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    tlevel_answer4: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    tlevel_price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'TLevel',
  });
  return TLevel;
};
