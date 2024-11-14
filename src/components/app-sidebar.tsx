import {
  Calendar,
  LayoutDashboard,
  ChartColumnBig,
  Users,
  BookCopy,
  Truck,
} from "lucide-react";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analisis",
    url: "#",
    icon: ChartColumnBig,
  },
  {
    title: "Data Kerja",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Data Operator",
    url: "#",
    icon: Users,
  },
  {
    title: "Data Aset",
    url: "/dashboard/about",
    icon: BookCopy,
  },
  {
    title: "Data Unit",
    url: "/about",
    icon: Truck,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-none">
      <SidebarHeader className="bg-green-800 p-2 flex flex-col items-center">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
        <h2 className="text-white font-bold">PT ARTA DAYA TARUNA</h2>
        <p className="text-white text-[12px]">
          {" "}
          Sistem Informasi Pertambangan{" "}
        </p>
      </SidebarHeader>
      <hr className="border-gray-50 px-2" />
      <SidebarContent className="bg-green-900">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-lg ">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="text-white " key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className=" hover:text-white hover:bg-green-700  "
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
