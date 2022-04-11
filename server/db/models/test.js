'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Lesson, Course }) {
      Test.belongsTo(Lesson, { foreignKey: 'lesson_id' })
      Test.belongsTo(Course, { foreignKey: 'course_id' })
    }
  }
  Test.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    course_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Courses',
        key: 'id'
      }
    },
    lesson_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Lessons',
        key: 'id'
      }
    },
    test_question: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    test_option1: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    test_option2: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    test_option3: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    test_option4: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    test_answer1: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    test_answer2: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    test_answer3: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    test_answer4: {
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
    modelName: 'Test',
  });
  return Test;
};
