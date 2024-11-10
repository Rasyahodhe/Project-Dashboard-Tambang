import { Navbar } from "../Navbar";
import "../../styles/custom/style.css";
import List from "../List";

const link = [
  { name: "Dasrboard", path: "/dashboard" },
  { name: "Analisis", path: "/dashboard/analisis" },
  { name: "Data Kerja", path: "/dashboard/datakerja" },
  { name: "Data Operator", path: "/dashboard/dataoperator" },
  { name: "Data Asset", path: "/dashboard/dataasset" },
  { name: "Data Unit", path: "/dashboard/dataunit" },
  { name: "About", path: "/dashboard/about" },
];
type LayoutShellProps = {
  children: React.ReactNode;
};

const LayoutShell = (props: LayoutShellProps) => {
  const { children } = props;

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <Navbar />
      <main className="w-full h-auto flex">
        <div className="w-0 ease-in transition-all md:w-72 md:ease-out">
          <div className="w-full h-screen bg-white">
            <h6 className="text-amber-800 p-2  font-bold text-xs/[0px] opacity-0 md:text-2xl md:opacity-100">
              Menu
            </h6>
            <List
              style="h-full list-none flex flex-col "
              list={link}
              stylelist={
                " px-4 hover:bg-orange-600 focus:bg-orange-600 hover:px-8 hover:cursor-pointer hover:text-white hover:text-xl text-amber-800  transition-all duration-300 ease-out hover:ease-in hover:font-bold"
              }
            />
          </div>
        </div>
        <div className="w-full">
          <div className=" h-screen bg-slate-200">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default LayoutShell;
