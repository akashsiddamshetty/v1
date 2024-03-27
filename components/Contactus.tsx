"use client";
import { FC } from "react";
import ContactForm from "./ContactForm";
import { IoIosMail } from "react-icons/io";

interface ContactusProps {}

const Contactus: FC<ContactusProps> = ({}) => {
  return (
    <section
      id="contactContainer"
      className="bg-custom-gray text-custom-black w-full p-10 sm:py-10  sm:px-20  lg:px-40 "
    >
      <div className="flex flex-col gap-8 sm:flex-row w-full items-center sm:items-start justify-between">
        <div className="flex-1 w-full text-center sm:text-start">
          <h1 className="text-7xl font-semibold my-8">Contact</h1>
          <p className="font-semibold w-full font-mono text-center sm:text-start lg:w-4/6">
            {`I would love to hear about your project and how I could help.
            Please fill in the form, and I'll get back to you as soon as
            possible. Alternatively, you can connect with me via email at`}
          </p>
          <address>
            <a
              href="mailto:akashsiddamshetty@gmail.com"
              className="font-semibold py-4 flex items-center justify-start gap-1"
            >
              akashsiddamshetty@gmail.com{" "}
              <span>
                <IoIosMail />
              </span>
            </a>
          </address>
        </div>
        <ContactForm />
      </div>
      <div className="w-full h-[2px] bg-custom-black mt-20"></div>
    </section>
  );
};
export default Contactus;
