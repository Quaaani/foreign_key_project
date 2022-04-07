'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Favorite }) {
      Course.hasMany(Favorite, { foreignKey: 'course_id' })
    }
  }
  Course.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    course_name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    course_level: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    course_description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    course_img: {
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
    modelName: 'Course',
  });
  return Course;
};
