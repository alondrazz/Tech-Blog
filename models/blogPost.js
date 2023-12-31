const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class blogPostModel extends Model {}

blogPostModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_created: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = blogPostModel;
