import React from "react";
import "./styles/chart.css";
import ChartBar from "../chart-bar/ChartBar";

const Chart = ({ chartData }) => {
  const valuesArray = chartData.map((data) => data.value);
  const maxValue = Math.max(...valuesArray);

  console.log(valuesArray);

  return (
    <div className="chart">
      {chartData.map(({ label, value }) => (
        <ChartBar key={label} value={value} maxValue={maxValue} label={label} />
      ))}
    </div>
  );
};

export default Chart;
