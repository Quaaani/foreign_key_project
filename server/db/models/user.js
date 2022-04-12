'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Favorite, Dictionary, Course, Feedback, Homework }) {
      User.hasMany(Favorite, { foreignKey: 'user_id' })
      User.hasMany(Dictionary, { foreignKey: 'user_id' })
      User.hasMany(Course, { foreignKey: 'user_id' })
      User.hasMany(Feedback, { foreignKey: 'user_id' })
      User.hasMany(Homework, {foreignKey: 'from_user_id'})
      User.hasMany(Homework, {foreignKey: 'to_user_id'})
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_firstName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    user_lastName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    user_email: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    user_password: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    user_role: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    user_age: {
      type: DataTypes.INTEGER
    },
    user_avatar: {
      type: DataTypes.TEXT
    },
    user_country: {
      type: DataTypes.TEXT
    },
    user_city: {
      type: DataTypes.TEXT
    },
    user_phone: {
      type: DataTypes.TEXT
    },
    user_level: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    user_lexicon: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
