import Image from "next/image";
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full bg-orange-400">
      <div className="">
        <Image width={40} height={40} src="/unit/TH.png" alt="logo"></Image>
      </div>
      <div className=""></div>
    </nav>
  );
};
