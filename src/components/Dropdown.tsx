import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { DropdownType } from "@/interfaces/Interface.Components";
const Dropdown = ({ style, list }: DropdownType) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border border-green-500 hover:bg-red-400 p-5">
        Profile
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className={style}>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {list.map((item, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link href={item.path}>{item.name}</Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
