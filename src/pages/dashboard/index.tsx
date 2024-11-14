import Image from "next/image";
import S_Dash from "@/styles/tailwind/pages/Styles.Dashboard";
// Data CHARDT
const data = {
  labels: ["Malam", "Siang"],
  datasets: [
    {
      label: "Foel Cons",
      data: [200, 459],
      backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const data2 = {
  labels: ["Malam", "Siang"],
  datasets: [
    {
      label: "Malam",
      data: [200, 459],
      backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const dashboard = () => {
  return (
    <div className={`${S_Dash.WEB.ContDash}`}>
      <h1 className={`${S_Dash.WEB.H_dash}`}>Dashboard</h1>
      <div className={`${S_Dash.WEB.Section1} ${S_Dash.ANDROID.Section1}`}>
        <div className={`${S_Dash.WEB.Div_Button}`}></div>
        <div className={`${S_Dash.WEB.Div_image}`}>
          <div className={S_Dash.WEB.D_image_item}>
            <Image
              src="/unit/TH.png"
              alt="Truck Houl"
              width={200}
              height={200}
            />
          </div>
          <div className={S_Dash.WEB.D_image_item}>
            <h4 className="">Truck Houl</h4>
          </div>
        </div>
      </div>
      {/* //Grafik
        <div className={`${S_Dash.WEB.ContChart}`}>
          <div className={`${S_Dash.WEB.C_Chart_item}`}>
            <h2 className={S_Dash.WEB.C_Chart_Item_H}>FOEL CONS</h2>
            <ChartComponent
              id="myChart"
              datasets={data2.datasets}
              labels={data2.labels}
              typechart="doughnut"
              style={`${S_Dash.WEB.C_Chart_Item_Chart}`}
            ></ChartComponent>
          </div>
          <div className={`${S_Dash.WEB.C_Chart_item}`}>
            <h2 className={S_Dash.WEB.C_Chart_Item_H}>FOEL CONS</h2>
            <ChartComponent
              id="myChart2"
              datasets={data.datasets}
              labels={data.labels}
              typechart="bar"
              style={`${S_Dash.WEB.C_Chart_Item_Chart}`}
              indexaxiss="y"
            ></ChartComponent>
          </div>
        </div> */}
    </div>
  );
};

export default dashboard;
