const gamesRouter = require('express').Router();
const checkAuth = require("../middlewares/auth.js");
const {
    findAllGames,
    createGame,
    findGameById,
    updateGame,
    deleteGame,
    checkEmptyFields,
    checkIsGameExists,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsVoteRequest,
  } = require('../middlewares/games');
  
const {
    sendGameCreated,
    sendGameById,
    sendGameUpdated,
    sendGameDeleted
  } = require('../controllers/games');

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
  );

gamesRouter.delete(
    "/games/:id",
    checkAuth,
    deleteGame,
    sendGameDeleted
  );

module.exports = gamesRouter;