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

    Like.checkLike = async (userId, pinId) => {
        return await Like.findOne({
            where: { userId, pinId }
        });
    };

    Like.createLike = async (userId, pinId) => {
        try {
            const like = await Like.create({
                userId,
                pinId
            });
            return like;
        } catch (error) {
            console.error('Error during createLike: ', err);
            throw error;
        };
    };

    Like.unlike = async (userId, pinId) => {
        try {
            const like = await Like.destroy({
                where: { userId, pinId }
            });
            return like;
        } catch (error) {
            console.error('Error during unlike: ', error);
            throw error;
        };
    };

    return Like;
}
