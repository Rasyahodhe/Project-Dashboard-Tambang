import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "../../styles/custom/style.css";
import { Navbar } from "../Navbar";

type LayoutShellProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const LayoutShell = (props: LayoutShellProps) => {
  const { children } = props;

  return (
    <SidebarProvider className="relative">
      <AppSidebar />

      <main className="w-full ">
        <Navbar />
        <div className="max-w-screen-2xl h-dvh my-auto mx-auto overflow-auto w-full ">
          <div className="w-full  bg-gray-50 ">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default LayoutShell;
