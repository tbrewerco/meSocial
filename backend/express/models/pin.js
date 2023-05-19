export default (sequelize, DataTypes) => {
    const Pin = sequelize.define('Pin', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        about: {
            type: DataTypes.STRING,
            allowNull: true
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            }
        },
    });

    return Pin;
};