import { ChartType } from "@/interfaces/Interface.Components";

export const Chart1: ChartType = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56],
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      borderColor: "rgba(255, 0, 0, 1)",
      borderWidth: 1,
    },
    {
      label: "Delivery",
      data: [55, 52, 45, 76, 36],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(85, 180, 162, 1)",
      borderWidth: 1,
    },
  ],
  typechart: "bar",
  style: "lg:w-full lg:h-50 ",
  id: "",
};

export const Chart2: ChartType = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [45, 29, 50, 91, 36],
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      borderColor: "rgba(255, 0, 0, 1)",
      borderWidth: 1,
    },
  ],
  typechart: "doughnut",
  style: "lg:w-full lg:h-50 ",
  id: "",
};
