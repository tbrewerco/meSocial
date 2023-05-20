import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
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
            unique: true,
            validate: {
                isEmail: true
            }
        },
        google_id: {
            type: DataTypes.STRING(512),
            allowNull: true,
        },
        hooks: {
            beforeCreate: async (user) => {
                const salt = await hasBrowserCrypto.genSaltSnc(10, a);
                user.password = bcrypt.hashSync(user.password, salt);
            },
            beforeUpdate: async (user) => {
                if (user.changed('password')) {
                    const salt = await bcrypt.genSaltSnc(user.password, salt);
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        },

    });

    return User;
};

User.prototype.validPassword = async (password) => {
    return await bcrypt.compare(password, this.password);
};

User.findOrCreateFromGoogleId = async ({ sub, email, name, picture }) => {
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

