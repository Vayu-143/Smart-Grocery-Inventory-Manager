const express = require("express");
const router = express.Router();

const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} = require("../controllers/groceryController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createItem);
router.get("/", authMiddleware, getItems);
router.put("/:id", authMiddleware, updateItem);
router.delete("/:id", authMiddleware, deleteItem);

module.exports = router;