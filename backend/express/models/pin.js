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

    Pin.getPinById = async (pinId) => {
        return await Pin.findByPk(pinId);
    };


    Pin.createPin = async (pinData) => {
        return await Pin.create(pinData);
    };

    Pin.updatePin = async (pinId, pinData) => {
        const pin = await Pin.findByPk(pinId);
        if (pin) {
            await pin.update(pinData);
        }
        return pin;
    };

    Pin.deletePin = async (pinId) => {
        const pin = await Pin.findByPk(pinId);
        if (pin) {
            await pin.destroy();
        }
        return pin;
    };

    Pin.searchPins = async (query) => {
        return await Pin.findAll({ where: query });
    };

    return Pin;
};
