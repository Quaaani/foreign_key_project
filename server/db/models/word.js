'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Dictionary, Topic }) {
      Word.hasMany(Dictionary, { foreignKey: 'word_id' })
      Word.belongsTo(Topic, { foreignKey: 'topic_id' })
    }
  }
  Word.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    word_name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    word_transcription: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    word_translate: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    word_example: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    word_transExample: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    topic_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Topics',
        key: 'id'
      }
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
    modelName: 'Word',
  });
  return Word;
};
