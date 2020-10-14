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
    User.hasMany(models.Mahalle, {
      foreignKey: 'userId',
      as: 'mahalles'
    })

    User.hasOne(models.Car, {
      foreignKey: 'carUserId',
      as: 'cars'
    })
  }

  return User
}
