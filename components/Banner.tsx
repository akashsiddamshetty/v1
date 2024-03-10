/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FaJsSquare, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";

import { FC } from "react";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import ContactMeButton from "./ContactMeButton";

interface BannerProps {}
const techStack = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    experience: 2,
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
    experience: 2,
  },
  {
    name: "Javascript",
    icon: <FaJsSquare />,
    experience: 2,
  },
  {
    name: "React",
    icon: <FaReact />,
    experience: 2,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    experience: 1,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    experience: 1,
  },
];

const Banner: FC<BannerProps> = ({}) => {
  return (
    <section className="p-10 sm:py-10 sm:px-20 lg:px-40 ">
      <div className=" flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between">
        <div className="flex-1 text-center sm:text-start">
          <h1 className="text-6xl font-bold leading-tight py-4 ">
            Nice to meet you! <br />
            {`I'm`}{" "}
            <span className="text-custom-pink uppercase tracking-widest border-b-2 border-custom-dark-red">
              Akash
            </span>
          </h1>
          <p className="text-lg font-thin  ">{`A web
          developer from India. Passionate about web apps, I love turning ideas
          into digital reality with sleek designs and powerful functionality.`}</p>

          <ContactMeButton />
        </div>

        <div className="flex-1 flex items-center justify-end">
          <img
            src="https://media.licdn.com/dms/image/C5603AQGG2uRK1zsRyw/profile-displayphoto-shrink_400_400/0/1662365517290?e=1715817600&v=beta&t=02UpxrILaOthPvrIocYh3hCsmMvYRjnI3_R7ezK4_Uc"
            alt="akash siddamshetty"
            height={800}
            width={400}
            className="w-96 h-96 object-fill sm:w-[400px] lg:h-[500px] "
          />
        </div>
      </div>

      <div className="w-full h-[1px] bg-white rounded-full my-20"></div>
      <div className="flex items-start my-4 justify-center gap-14 flex-wrap">
        {techStack.map((stack, index) => {
          const { name, experience, icon } = stack;
          return (
            <div
              key={index}
              className="flex items-center justify-center flex-col"
            >
              <div className="flex items-center gap-2 text-3xl sm:text-5xl">
                <div>{icon}</div>
                <span className="capitalize">{name}</span>
              </div>
              <p className="capitalize py-4 font-thin ">
                {experience} {experience >= 2 ? "years" : "year"} plus
                experience
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Banner;
