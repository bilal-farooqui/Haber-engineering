import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Label } from "reactstrap";
ChartJS.register(ArcElement, Tooltip, Legend);

const ServiceChart = () => {
  const data = {
    labels: ["Service A", "Service B", "Service C"],
    datasets: [
      {
        label: "Services Sold",
        data: [80, 120, 60],
        backgroundColor: ["#FFB74D", "#FF7043", "#8D6E63"],
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
        Services
      </Label>
      <div style={{ height: "200px" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ServiceChart;
