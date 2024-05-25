import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import sourceData from "./sourceData.json";

function Chart1() {
  return (
    <div style={{ height: '400px' }}> {/* Set a specific height */}
      <Bar
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [{
            label: 'Total Active Employees',
            data: sourceData.map((data) => data.value),
          }],
        }}
        options={{
          maintainAspectRatio: false // Allow the chart to adjust to the specified height
        }}
      />
    </div>
  );
}

export default Chart1;
