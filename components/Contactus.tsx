"use client";
import { FC, useRef } from "react";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

interface ContactusProps {}

const Contactus: FC<ContactusProps> = ({}) => {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div
id="contactContainer"      className="bg-custom-gray text-custom-black w-full p-10 sm:py-10  sm:px-20  lg:px-40 "
    >
      <div className="flex flex-col gap-8 sm:flex-row w-full items-center sm:items-start justify-between">
        <div className="flex-1 w-full text-center sm:text-start">
          <h1 className="text-7xl font-semibold my-8">Contact</h1>
          <p className="font-semibold w-full font-mono text-center sm:text-start lg:w-4/6">
            {`I would love to hear about your project and how l could help.
            Please fill in the form, and I'll get back to you as soon as
            possible. `}
          </p>
        </div>
        <ContactForm />
      </div>
      <div className="w-full h-[2px] bg-custom-black mt-20 mb-10"></div>
      <footer className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <h1 className="uppercase font-mono  text-2xl sm:text-4xl tracking-widest font-semibold">
          Akash Siddamshetty
        </h1>
        <SocialLinks mode="dark" />
      </footer>
    </div>
  );
};
export default Contactus;
