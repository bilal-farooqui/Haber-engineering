import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Label } from "reactstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProductChart = () => {
  const data = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Products Sold",
        data: [50, 150, 200, 100],
        backgroundColor: "#66BB6A",
        borderColor: "#388E3C",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Products",
        },
      },
      y: {
        title: {
          display: true,
          text: "Quantity Sold",
        },
        beginAtZero: true,
      },
    },
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
        Products Sold
      </Label>
      <div style={{ height: "200px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ProductChart;
