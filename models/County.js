module.exports = (sequelize, DataTypes) => {
  const County = sequelize.define(
    'county',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'cityId'
      },
    },
  )

  County.associate = function (models) {
    County.belongsTo(models.city, {
      foreignKey: 'cityId',
    })
  }

  return County
}
