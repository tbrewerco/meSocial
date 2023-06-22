import Sequelize from "sequelize";
import dbConfig from '../config/dbConfig.js';

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: 3306,
    dialect: 'mysql'
});

import UserModel from './user.js';
import PinModel from './pin.js';
import CommentModel from './comment.js';
import LikeModel from './like.js';

const User = UserModel(sequelize, Sequelize.DataTypes);
const Pin = PinModel(sequelize, Sequelize.DataTypes);
const Comment = CommentModel(sequelize, Sequelize.DataTypes);
const Like = LikeModel(sequelize, Sequelize.DataTypes);

// associations
User.hasMany(Pin, { as: 'pins', foreignKey: 'userId' });
Pin.belongsTo(User, { as: 'user', foreignKey: 'userId' });

User.hasMany(Comment, { as: 'comments', foreignKey: 'userId' });
Comment.belongsTo(User, { as: 'user', foreignKey: 'userId' });

User.hasMany(Like, { as: 'likes', foreignKey: 'userId' });
Like.belongsTo(User, { as: 'user', foreignKey: 'userId' });

Pin.hasMany(Comment, { as: 'comments', foreignKey: 'pinId' });
Comment.belongsTo(Pin, { as: 'pin', foreignKey: 'pinId' });

Pin.hasMany(Like, { as: 'likes', foreignKey: 'pinId' }); // ensure the correct case for foreignKey
Like.belongsTo(Pin, { as: 'pin', foreignKey: 'pinId' }); // ensure the correct case for foreignKey

sequelize.sync().catch((error) => {
    console.error('Error occurred during synchronization:', error);
});

export default { User, Pin, Comment, Like }