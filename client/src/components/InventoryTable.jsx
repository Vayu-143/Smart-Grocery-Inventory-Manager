import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = [
  "#00C49F",
  "#0088FE",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4560",
];

const InventoryChart = ({ items }) => {
  const categoryData = Object.values(
    items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = {
          name: item.category,
          value: 0,
        };
      }

      acc[item.category].value += 1;

      return acc;
    }, {})
  );

  const quantityData = items.map((item) => ({
    name: item.name,
    quantity: Number(item.quantity),
  }));

  return (
    <div className="row mb-4">

      <div className="col-md-6">
        <div className="card dark-card p-3">
          <h5 className="text-center text-white mb-3">
            Category Distribution
          </h5>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {categoryData.map(
                  (_, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card dark-card p-3">
          <h5 className="text-center text-white mb-3">
            Inventory Quantity
          </h5>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart
              data={quantityData}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />

              <Tooltip />
              <Legend />

              <Bar
                dataKey="quantity"
                fill="#00C49F"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default InventoryChart;