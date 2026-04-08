"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Example sales data
const data = [
  { name: "Jan", sales: 200 },
  { name: "Feb", sales: 3200 },
  { name: "Mar", sales: 5100 },
  { name: "Apr", sales: 200 },
  { name: "May", sales: 2700 },
  { name: "Jun", sales: 6200 },
  { name: "Jul", sales: 4000 },
  { name: "Aug", sales: 1000 },
  { name: "Sep", sales: 10000 },
  { name: "Oct", sales: 1125 },
  { name: "Nov", sales: 10230 },
  { name: "Dec", sales: 1365 },
];

const MonthlyCharts = () => {
  return (
    <div className="w-full h-62.5 min-h-0">
      <ResponsiveContainer
        width="100%"
        height="100%"
        initialDimension={{ width: 320, height: 250 }}
      >
        <LineChart
          data={data}
          margin={{ top: 0, right: 6, left: -6, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6" // Tailwind blue-500
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyCharts;
