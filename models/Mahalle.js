module.exports = (sequelize, DataTypes) => {
  const Mahalle = sequelize.define(
    'Mahalle',
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
    { tableName: 'mahalles'}
  )

  return Mahalle
}
