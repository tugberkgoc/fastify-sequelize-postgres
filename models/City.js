module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'City',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
      },
      countyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'userId'
      },
    },
    { tableName: 'cities'}
  )

  return City
}
