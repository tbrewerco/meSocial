export default (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            }
        },
        pinId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pins',
                key: 'id',
            }
        },
    });

    return Like;
}
