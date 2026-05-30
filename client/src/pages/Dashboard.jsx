import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import API from "../services/api";
import Navbar from "../components/Navbar";
import AddItemForm from "../components/AddItemForm";
import InventoryTable from "../components/InventoryTable";
import InventoryChart from "../components/InventoryChart";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const fetchItems = async () => {
    try {
      const res = await API.get("/grocery");
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = items.filter((item) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All"
        ? true
        : item.category?.toLowerCase() ===
          category.toLowerCase();

    return searchMatch && categoryMatch;
  });

  const totalItems = items.length;

  const lowStockItems = items.filter(
    (item) => Number(item.quantity) < 5
  );

  const categoriesCount = new Set(
    items.map((item) => item.category)
  ).size;

  const expiringSoon = items.filter((item) => {
    const diff =
      (new Date(item.expiryDate) -
        new Date()) /
      (1000 * 60 * 60 * 24);

    return diff <= 7;
  });

  const exportToExcel = () => {
    const excelData = items.map((item) => ({
      Name: item.name,
      Category: item.category,
      Quantity: item.quantity,
      Unit: item.unit,
      ExpiryDate: new Date(
        item.expiryDate
      ).toLocaleDateString(),
    }));

    const worksheet =
      XLSX.utils.json_to_sheet(
        excelData
      );

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Inventory"
    );

    const excelBuffer =
      XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

    const fileData = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      }
    );

    saveAs(
      fileData,
      "inventory.xlsx"
    );
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4 inventory-wrapper">

        <h2 className="text-center mb-4">
          Inventory Dashboard
        </h2>

        {/* Statistics */}

        <div className="row mb-4">

          <div className="col-md-4">
            <div className="card stat-card shadow">
              <div className="card-body text-center">
                <h5>Total Items</h5>
                <h2>{totalItems}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card stat-card shadow">
              <div className="card-body text-center">
                <h5>Low Stock</h5>
                <h2>
                  {lowStockItems.length}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card stat-card shadow">
              <div className="card-body text-center">
                <h5>Categories</h5>
                <h2>
                  {categoriesCount}
                </h2>
              </div>
            </div>
          </div>

        </div>

        {/* Export Excel */}

        <div className="text-end mb-3">
          <button
            className="btn btn-success"
            onClick={exportToExcel}
          >
            Export Excel
          </button>
        </div>

        {/* Low Stock Alerts */}

        {lowStockItems.length > 0 && (
          <div className="alert alert-danger mb-4">
            <strong>
              🚨 Low Stock Alerts
            </strong>

            {lowStockItems.map(
              (item) => (
                <div
                  key={item._id}
                >
                  ⚠ {item.name} (
                  {item.quantity}
                  {item.unit})
                </div>
              )
            )}
          </div>
        )}

        {/* Expiry Alerts */}

        {expiringSoon.length > 0 && (
          <div className="alert alert-warning mb-4">
            <strong>
              ⚠ Expiry Alerts
            </strong>

            {expiringSoon.map(
              (item) => (
                <div
                  key={item._id}
                >
                  {item.name} expires
                  soon
                </div>
              )
            )}
          </div>
        )}

        {/* Search + Filter */}

        <div className="row mb-4">

          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Search Item..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />
          </div>

          <div className="col-md-6">
            <select
              className="form-select bg-dark text-white"
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
            >
              <option value="All">
                All Categories
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

        </div>

        {/* Add Item Form */}

        <AddItemForm
          fetchItems={fetchItems}
        />

        {/* Inventory Table */}

        <InventoryTable
          items={filteredItems}
          fetchItems={fetchItems}
        />

      </div>
    </>
  );
};

export default Dashboard;