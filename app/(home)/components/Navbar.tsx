
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Navbar({className}:{className?: string}) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/hamil-dimapanat-1b6057167/",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/hvmil",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "https://www.instagram.com/blackcherryseltzer.jpg/",
      label: "Instagram",
      icon: SiInstagram,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Hamil🧑🏽‍💻</h1>

      
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link target="_blank" href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
