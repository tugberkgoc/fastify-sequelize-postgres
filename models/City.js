module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'city',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
      },
    },
  )

  return City
}
