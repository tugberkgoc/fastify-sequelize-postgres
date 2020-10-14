module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    'Car',
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'model'
      },
      carUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'carUserId'
      }
    },
    { tableName: 'cars'}
  )

  return Car
}
