'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Homework extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Lesson}) {
      Homework.belongsTo(User, {foreignKey: 'from_user_id'})
      Homework.belongsTo(User, {foreignKey: 'to_user_id'})
      Homework.belongsTo(Lesson, {foreignKey: 'lesson_id'})
    }
  }
  Homework.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    from_user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    to_user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    lesson_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Lessons',
        key: 'id',
      }
    },
    homework: {
      allowNull: false,
      type: DataTypes.TEXT
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
    modelName: 'Homework',
  });
  return Homework;
};
