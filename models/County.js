module.exports = (sequelize, DataTypes) => {
  const County = sequelize.define(
    'County',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'userId'
      },
    },
    { tableName: 'counties'}
  )

  County.associate = function (models) {
    County.hasOne(models.City, {
      foreignKey: 'countyId',
      as: 'cities'
    })
  }

  return County
}
