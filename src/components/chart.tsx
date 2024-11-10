import { useEffect } from "react";
import { Chart } from "chart.js";
import { ChartType } from "../interfaces/Interface.Components";
import {
  LinearScale,
  BarElement,
  BarController,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(
  LinearScale,
  BarElement,
  BarController,
  ChartDataLabels,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale
);

const ChartComponent = ({
  labels,
  datasets,
  typechart,
  style,
  id,
}: ChartType) => {
  useEffect(() => {
    const ctx = document.getElementById(id) as HTMLCanvasElement;

    if (ctx) {
      const myChart = new Chart(ctx, {
        type: typechart,
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              display: true,
              align: "top",
              font: {
                weight: "bold",
              },
              formatter: (value: number) => value.toLocaleString(),
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [labels, datasets, typechart, style, id]);

  return (
    <div className={style}>
      <canvas id={id} width="400" height="400"></canvas>
    </div>
  );
};

export default ChartComponent;
