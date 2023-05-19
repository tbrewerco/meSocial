export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
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
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        googleId: {
            type: DataTypes.STRING(512),
            allowNull: true,
        }
    });

    User.findOrCreateFromGoogleId = async function ({ sub, email, name, picture }) {
        try {
            const [user] = await User.findOrCreate({
                where: { googleId: sub },
                defaults: {
                    name: name,
                    email: email,
                    username: email,
                    image: picture,
                    googleId: sub
                }
            });
            return user;
        } catch (error) {
            console.error('Error during findOrCreateFromGoogleId:', error);
            throw error;
        };
    };
    return User;
};
