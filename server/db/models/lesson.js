'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Test }) {
      Lesson.hasMany(Test, { foreignKey: 'lesson_id' })
    }
  }
  Lesson.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    lesson_name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    lesson_video: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    lesson_img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    lesson_price: {
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
    modelName: 'Lesson',
  });
  return Lesson;
};
