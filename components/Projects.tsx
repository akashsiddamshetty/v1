/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import ContactMeButton from "./ContactMeButton";
import Link from "next/link";

interface ProjectsProps {}

const projectsData = [
  {
    id: 0,
    name: "Chat App",
    url: "https://chat-app-y9mn.onrender.com/",
    github: "https://github.com/akashsiddamshetty/chat-app",
    techStack: [
      "Mongodb",
      "Expressjs",
      "ReactJs",
      "Nodejs",
      "TypeScript",
      "Tailwindcss",
      "jwt-authentication",
      "socket.io",
    ],
    image: "chat-app.jpg",
  },
  {
    id: 0,
    name: "Multi step form",
    url: "https://multistep-form-virid.vercel.app/",
    github: "https://github.com/akashsiddamshetty/multistep-form",
    techStack: [
      "Reactjs",
      "nextjs",
      "TypeScript",
      "Javascript",
      "CSS",
      "Tailwindcss",
      "React-hook-forms",
      "redux-tool-kit",
    ],
    image: "multi-step-form.jpg",
  },
];

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <section className="p-10 sm:py-10 sm:px-20  lg:px-40 ">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl sm:text-6xl font-semibold">Projects</h1>
        <ContactMeButton />
      </div>
      <div className="my-10 flex flex-col sm:flex-row sm:flex-wrap items-center gap-8 justify-start w-full">
        {projectsData.map((project) => {
          const { name, url, id, techStack, image, github } = project;
          return (
            <div key={id} className="flex-1 group relative cursor-pointer">
              <div className="relative w-full  lg:h-[400px] ">
                <img
                  src={image}
                  alt={name}
                  className=" object-contain  w-full h-full"
                />
              </div>
              <h1 className="text-2xl font-mono leading-loose text-center sm:text-start">
                {name}
              </h1>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                {techStack.map((tech: string, i: number) => {
                  return (
                    <span className="font-thin capitalize" key={i}>
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="relative lg:absolute my-4 lg:inset-0 flex gap-4 items-center sm:items-start lg:bg-custom-black lg:z-10 lg:gap-10 justify-center sm:justify-start lg:justify-center lg:items-center lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300  lg:bg-opacity-50">
                <Link
                  href={url}
                  target="_blank"
                  className="border-2 p-2 text-custom-pink border-custom-dark-red font-semibold font-mono lg:text-3xl"
                >
                  View Project
                </Link>
                <Link
                  className="border-2 p-2 text-custom-pink border-custom-dark-red  font-semibold font-mono lg:text-3xl"
                  href={github}
                  target="_blank"
                >
                  View Code
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
