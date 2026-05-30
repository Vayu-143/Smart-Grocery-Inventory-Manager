import React, { useState } from "react";
import API from "../services/api";

const AddItemForm = ({ fetchItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    unit: "Kg",
    expiryDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/grocery", formData);

      setFormData({
        name: "",
        category: "",
        quantity: "",
        unit: "Kg",
        expiryDate: "",
      });

      fetchItems();
    } catch (error) {
      console.log("ADD ITEM ERROR:", error);
    }
  };

  return (
    <div className="card dark-card p-3 shadow mb-4">
      <form onSubmit={handleSubmit}>
        <div className="row g-3">

          <div className="col-md-3">
            <input
              className="form-control"
              name="name"
              placeholder="Item Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-2">
            <select
              className="form-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Category
              </option>

              <option value="Dairy">
                Dairy
              </option>

              <option value="Fruit">
                Fruit
              </option>

              <option value="Grain">
                Grain
              </option>

              <option value="Bakery">
                Bakery
              </option>

              <option value="Vegetable">
                Vegetable
              </option>

              <option value="Beverage">
                Beverage
              </option>
            </select>
          </div>

          <div className="col-md-2">
            <input
              className="form-control"
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-2">
            <select
              className="form-select"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
            >
              <option value="Kg">
                Kg
              </option>

              <option value="Gram">
                Gram
              </option>

              <option value="Liter">
                Liter
              </option>

              <option value="ml">
                ml
              </option>

              <option value="Pieces">
                Pieces
              </option>

              <option value="Packets">
                Packets
              </option>

              <option value="Boxes">
                Boxes
              </option>
            </select>
          </div>

          <div className="col-md-2">
            <input
              className="form-control"
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-1">
            <button
              className="btn btn-success w-100"
              type="submit"
            >
              Add
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddItemForm;