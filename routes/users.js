const usersRouter = require('express').Router();
const checkAuth = require("../middlewares/auth.js");

const {
  findAllUsers,
  createUser,
  findUserById,
  deleteUser,
  checkEmptyNameAndEmail,
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists,
  updateUser,
  hashPassword
  } = require('../middlewares/users');
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserDeleted,
  sendUserUpdated,
  sendMe
} = require('../controllers/users');

usersRouter.get("/me", checkAuth, sendMe);

// routes/users.js
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);

module.exports = usersRouter;