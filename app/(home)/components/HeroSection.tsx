import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import Title from "./Title";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-between min-h-[60vh] lg:flex-row flex-col-reverse lg:gap-0 gap-14 animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you!👋 <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            I'm Hamil.
          </span>{" "}
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          New York-Based Fullstack Developer with a passion for creating and
          continous learning.
        </p>

        <Link
          href={"mailto:dimapanat.hamil@gmail.com"}
          className="inline-block group"
        >
          <Title text="Contact Me 📬" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:left-10">
          <a target="_blank" href="/hamil_dimapanat.pdf">
            <MovingBorderBtn
              borderRadius="0.5rem"
              className="p-3 font-semibold"
            >
              <p>🚨 Available for Work</p>
            </MovingBorderBtn>
          </a>
        </div>
      </div>
    </div>
  );
}
