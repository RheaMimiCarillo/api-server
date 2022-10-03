'use strict'

const foodSchema = (sequelize, DataTypes) => sequelize.define(
  'Food',
  {
    spiceLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    isMoist: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  });

  module.exports = foodSchema;
