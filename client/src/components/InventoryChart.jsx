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
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A855F7",
  "#EF4444",
];

const InventoryChart = ({
  items,
}) => {
  const categoryData = Object.values(
    items.reduce(
      (acc, item) => {
        if (
          !acc[item.category]
        ) {
          acc[item.category] = {
            name: item.category,
            value: 0,
          };
        }

        acc[item.category]
          .value += Number(
          item.quantity
        );

        return acc;
      },
      {}
    )
  );

  const quantityData =
    items.map((item) => ({
      name: item.name,
      quantity:
        item.quantity,
    }));

  return (
    <div className="row mb-4">

      <div className="col-md-6">
        <div className="card dark-card p-3">

          <h5 className="text-center mb-3">
            Category Distribution
          </h5>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>
              <Pie
                data={
                  categoryData
                }
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {categoryData.map(
                  (
                    entry,
                    index
                  ) => (
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

          <h5 className="text-center mb-3">
            Inventory Quantities
          </h5>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart
              data={
                quantityData
              }
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="quantity"
                fill="#0d6efd"
              />
            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>

    </div>
  );
};

export default InventoryChart;