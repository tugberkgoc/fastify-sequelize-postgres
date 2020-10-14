module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    'car',
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'model'
      },
    },
  )

  return Car
}
