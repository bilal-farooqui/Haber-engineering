import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Label } from "reactstrap";
ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueChart = () => {
  const data = {
    labels: ["Revenue from Products", "Revenue from Services"],
    datasets: [
      {
        label: "Revenue Generated",
        data: [5000, 3000],
        backgroundColor: ["#4CAF50", "#FF9800"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
    // Adjust the chart's size via options
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        // width: "300px",
        height: "250px",
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.2)",
      }}
      className="p-2"
    >
      <Label className="w-100 text-center" style={{ fontSize: "20px" }}>
        Revenue
      </Label>
      <div style={{ height: "200px" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
