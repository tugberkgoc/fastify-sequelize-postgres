module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define(
    'photo',
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'url'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'userId'
      }
    },
  )

  return Photo
}
