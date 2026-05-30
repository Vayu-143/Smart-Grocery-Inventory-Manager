const GroceryItem = require("../models/GroceryItem");

// Create Grocery Item
exports.createItem = async (req, res) => {
  try {
    const item = await GroceryItem.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get User Grocery Items
exports.getItems = async (req, res) => {
  try {
    const items = await GroceryItem.find({
      user: req.user.id,
    });

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Update Grocery Item
exports.updateItem = async (req, res) => {
  try {
    const item = await GroceryItem.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Delete Grocery Item
exports.deleteItem = async (req, res) => {
  try {
    await GroceryItem.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    res.json({
      message: "Item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};