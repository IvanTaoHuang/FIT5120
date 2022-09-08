import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartsOption from "./chartsOption";

// Create a basic bar chart

function Barchart({ chartData }) {
  const options = ChartsOption();
  return <Bar data={chartData} options={options} />;
}

export default Barchart;
