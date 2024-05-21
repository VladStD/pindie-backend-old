const categoriesRouter = require('express').Router();
const checkAuth = require("../middlewares/auth.js");

const {
    findAllCategories,
    createCategory,
    findCategoryById,
    deleteCategory,
    checkEmptyName,
    checkIsCategoryExists,
    updateCategory
  } = require('../middlewares/categories');
const {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryDeleted,
    sendCategoryUpdated
} = require('../controllers/categories');

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
// routes/categories.js
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
);

module.exports = categoriesRouter;