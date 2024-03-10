"use client";
import { FC } from "react";

interface ContactMeButtonProps {}

const ContactMeButton: FC<ContactMeButtonProps> = ({}) => {
  const scrollToContact = () => {
    const contactContainer = document.getElementById("contactContainer");
    if (contactContainer) {
      contactContainer.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      type="button"
      onClick={() => scrollToContact()}
      className="cursor-pointer my-6 uppercase border-b-2 hover:border-custom-dark-red hover:text-custom-dark-red"
    >
      Contact Me
    </button>
  );
};
export default ContactMeButton;
