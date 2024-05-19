const mongoose = require('mongoose');
const userModel = require('./user');
const categoryModel = require('./category');

// models/game.js

gameSchema.statics.findGameByCategory = function(category) {
  return this.find({}) // Выполним поиск всех игр
    .populate({
      path: "categories",
      match: { name: category } 
    })
    .populate({
      path: "users",
      select: "-password"
    })
    .then(games => {
        // Отфильтруем по наличию искомой категории 
      return games.filter(game => game.categories.length > 0);
    });
};

module.exports = mongoose.model('game', gameSchema);