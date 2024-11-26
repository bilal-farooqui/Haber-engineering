import React from "react";
import { Label } from "reactstrap";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CustomerChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Number of Customers",
        data: [100, 120, 150, 200, 250, 300],
        fill: true,
        borderColor: "#42A5F5",
        tension: 0.1,
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
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "No of Customers",
        },
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
        Cutomers
      </Label>
      <div style={{ height: "200px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomerChart;
