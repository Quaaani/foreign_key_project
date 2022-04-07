'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Course }) {
      Favorite.belongsTo(User, { foreignKey: 'user_id' })
      Favorite.belongsTo(Course, { foreignKey: 'course_id' })
    }
  }
  Favorite.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }, 
    },
    course_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Courses',
        key: 'id'
      },
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
    modelName: 'Favorite',
  });
  return Favorite;
};
