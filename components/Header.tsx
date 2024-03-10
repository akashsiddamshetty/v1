import { FC } from "react";
import SocialLinks from "./SocialLinks";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="flex sm:py-10 sm:px-20 lg:px-40  sticky flex-col gap-4 sm:flex-row w-full p-10  z-10 bg-transparent items-center justify-between">
      <h1 className=" uppercase font-mono  text-2xl  sm:text-4xl font-semibold text-custom-pink  tracking-widest ">
        Akash Siddamshetty
      </h1>
      <SocialLinks mode="white" />
    </header>
  );
};
export default Header;
