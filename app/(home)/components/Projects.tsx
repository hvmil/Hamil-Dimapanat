import React from "react";
import {
  SiAmazonaws,
  SiAmazonroute53,
  SiAmazons3,
  SiBootstrap,
  SiFlask,
  SiHeroku,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPython,
  SiReact,
  SiSpacy,
  SiSqlalchemy,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Printer Dynamix",
      tech: [SiPython, SiBootstrap, SiJavascript, SiMysql, SiPhp],
      link: "https://github.com/hvmil/Printer-Dynamix",
      cover: "/pdynamix.png",
      background: "bg-indigo-500",
    },
    {
      title: "Flavor Frames",
      tech: [SiOpenai, SiReact, SiJavascript, SiNodedotjs],
      link: "https://github.com/hvmil/Flavor-Frames",
      cover: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzFrbGd4ZDI5NTRieDFrYTM1cmQwZzYxMXhlZnFhanI1YXA2d2ZyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ohGrmKiQkP5HYL3OBy/giphy.gif",
      background: "bg-green-500",
    },
    {
      title: "My Portfolio",
      tech: [SiAmazons3, SiAmazonroute53, SiTypescript, SiNextdotjs, SiReact],
      link: "https://github.com/hvmil/Printer-Dynamix",
      cover: "/portfolio_1.png",
      background: "bg-green-500",
    },
    {
      title: "SUNY New Paltz TicketSense",
      tech: [SiJavascript, SiSpacy, SiPython, SiFlask, SiHeroku, SiSqlalchemy],
      link: "https://github.com/hvmil/spaCy",
      cover: "/ticketsense_1.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🏗"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid sm:grid-cols-2 grid-cols-1 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
