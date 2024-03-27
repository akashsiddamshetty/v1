import { FC } from "react";
import SocialLinks from "./SocialLinks";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className=" bg-custom-gray text-custom-black w-full pb-10 sm:pb-10  sm:px-20  lg:px-40 flex flex-col sm:flex-row gap-4 items-center justify-between">
      <h1 className="uppercase font-mono  text-2xl sm:text-4xl tracking-widest font-semibold">
        Akash Siddamshetty
      </h1>
      <SocialLinks mode="dark" />
    </footer>
  );
};
export default Footer;
