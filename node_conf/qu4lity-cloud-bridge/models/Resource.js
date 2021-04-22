/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Resource', {
    resource_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    resourceType_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ResourceType',
        key: 'resourceType_id'
      }
    },
    resourceSetup_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ResourceSetup',
        key: 'resourceSetup_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Resource',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "resource_id" },
        ]
      },
      {
        name: "resource_fk_1",
        using: "BTREE",
        fields: [
          { name: "resourceType_id" },
        ]
      },
      {
        name: "resource_fk_2",
        using: "BTREE",
        fields: [
          { name: "resourceSetup_id" },
        ]
      },
    ]
  });
};
