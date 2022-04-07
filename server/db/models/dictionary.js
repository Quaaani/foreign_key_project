'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dictionary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Word }) {
      Dictionary.belongsTo(User, { foreignKey: 'user_id' })
      Dictionary.belongsTo(Word, { foreignKey: 'word_id' })
    }
  }
  Dictionary.init({
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
    word_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Words',
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
    modelName: 'Dictionary',
  });
  return Dictionary;
};
