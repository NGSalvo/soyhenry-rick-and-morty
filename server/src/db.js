require('dotenv').config();
const { Sequelize } = require('sequelize');
const { POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_HOST } = process.env;
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');

const sequelize = new Sequelize(
   `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/rickandmorty`,
   { logging: false, native: false }
);

FavoriteModel(sequelize)
UserModel(sequelize)

 const { User, Favorite } = sequelize.models;
 
 User.belongsToMany(Favorite, {through: 'user_favorite'});
 Favorite.belongsToMany(User, {through: 'user_favorite'});

module.exports = {
   User,
   Favorite,
   connection: sequelize,
};
