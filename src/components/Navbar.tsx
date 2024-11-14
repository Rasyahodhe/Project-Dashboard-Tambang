import Image from "next/image";
import { SidebarTrigger } from "./ui/sidebar";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const Navbar = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none border-b border-b-black">
      <nav className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11 ">
        <SidebarTrigger className="text-gray-600" />
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center space-x-4">
                <div>
                  <h5 className="text-sm font-semibold">Angga Widana</h5>
                  <p className="text-xs">Admin Server</p>
                </div>
                <Image
                  width={40}
                  height={40}
                  src="/unit/TH.png"
                  alt="logo"
                ></Image>
                <ChevronDown className="text-[5px]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};
