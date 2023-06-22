export default (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
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
    
    return Comment;
};

