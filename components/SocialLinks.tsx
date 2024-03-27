// components/SocialLinks.tsx

import React, { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface SocialLinksProps {
  mode: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ mode }) => {
  return (
    <address className="flex items-center space-x-4">
      <a
        href="https://github.com/akashsiddamshetty"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition duration-300"
      >
        <FaGithub
          color={mode === "dark" ? "black" : "white"}
          className="h-6 w-6 "
        />
      </a>
      <a
        href="https://www.linkedin.com/in/akash-siddamshetty-a947b3216/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition duration-300"
      >
        <FaLinkedin
          color={mode === "dark" ? "black" : "white"}
          className="h-6 w-6"
        />
      </a>
      <a
        href="https://twitter.com/4k4_s_h"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition duration-300"
      >
        <FaTwitter
          color={mode === "dark" ? "black" : "white"}
          className="h-6 w-6"
        />
      </a>
    </address>
  );
};

export default SocialLinks;
