import Sequelize from "sequelize";
import UserModel from './models/user.js';
import PinModel from './models/pin.js';
import CommentModel from './models/comment.js';
import LikeModel from './models/like.js';

const { HOST, USERNAME, DATABASE, PASSWORD } = process.env;

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    port: 3306,
    dialect: 'mysql'
});

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