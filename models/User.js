module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
      },
      countyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'countyId'
      },
    },
  )

  User.associate = function (models) {
    User.hasMany(models.photo, {
      foreignKey: 'userId',
    })

    User.belongsTo(models.county, {
      foreignKey: 'countyId',
    })

    User.belongsToMany(models.car, { through: 'userCars' });
  }

  return User
}
