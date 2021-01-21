/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    productionOrder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ProductionOrder',
        key: 'productionOrder_id'
      }
    },
    industrialModel_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    commercialModel_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descriptionModel_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Product',
    schema: 'whr_mpfq_relational',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "product_fk_1",
        using: "BTREE",
        fields: [
          { name: "productionOrder_id" },
        ]
      },
    ]
  });
};
