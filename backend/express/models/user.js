export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        googleId: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    User.findOrCreateFromGoogleId = async function ({ googleId, email, name, picture }) {
        let user = await User.findOne({ where: { googleId } });

        if (!user) {
            user = await User.create({
                googleId,
                email,
                username: name,
                image: picture
            });
        };

        return user;
    };

    return User;
};
