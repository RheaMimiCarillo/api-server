'use strict';

const coffeeSchema = (sequelize, DataTypes) => sequelize.define(
  'Coffee',
  {
    roastLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    isTasty: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  });


module.exports = coffeeSchema;
