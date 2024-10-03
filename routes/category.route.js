/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const categoryController = require("../controllers/category.controller");
const verify = require("../middleware/verify.middleware");
const authorize = require("../middleware/authorize.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new category
router.post(
  "/add-category",
  verify,
  authorize("admin", "seller"),
  upload.single("thumbnail"),
  categoryController.addCategory
);

// get all categories
router.get("/get-categories", categoryController.getCategories);

// get a category
router.get("/get-category/:id", categoryController.getCategory);

// update category
router.patch(
  "/update-category/:id",
  verify,
  authorize("admin", "seller"),
  upload.single("thumbnail"),
  categoryController.updateCategory
);

// delete category
router.delete(
  "/delete-category/:id",
  verify,
  authorize("admin", "seller"),
  categoryController.deleteCategory
);

module.exports = router;
