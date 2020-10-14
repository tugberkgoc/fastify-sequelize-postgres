module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
      },
    },
    { tableName: 'users'}
  )

  User.associate = function (models) {
    User.hasOne(models.County, {
      foreignKey: 'userId',
      as: 'counties'
    })

    User.hasMany(models.Car, {
      foreignKey: 'carUserId',
      as: 'cars'
    })
  }

  return User
}
