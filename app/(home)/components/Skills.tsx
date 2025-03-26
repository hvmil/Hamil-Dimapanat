"use client"
import React from 'react'
import Title from "./Title"
import { HoverEffect } from "../../../components/ui/card-hover"
import { SiGnubash, SiAmazonaws, SiExpress, SiGit, SiJavascript, SiMongodb, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTypescript } from "react-icons/si"
import { TbBrandAnsible } from "react-icons/tb";
import { GrVmware } from "react-icons/gr";
import { FaWindows } from "react-icons/fa";

export default function () {
    const skills = [
        {
            text: "Bash",
            Icon: SiGnubash
        },
        {
            text: "VMWare",
            Icon: GrVmware
        },
        {
            text: "Ansible",
            Icon: TbBrandAnsible
        },
        {
            text: "Python",
            Icon: SiPython
        },
        {
            text: "Javascript",
            Icon: SiJavascript
        },
        {
            text: "GIT",
            Icon: SiGit,
        },
        {
            text: "Windows Server",
            Icon: FaWindows
        },
        {
            text: "React",
            Icon: SiReact
        },
        {
            text: "Express",
            Icon: SiExpress
        },
        {
            text: "Node",
            Icon: SiNodedotjs
        },
        {
            text: "AWS",
            Icon: SiAmazonaws
        },
        {
            text: "SQL",
            Icon: SiPostgresql
        },
    ]

  return (
    <div className="max-w-5xl mx-auto px-8">
        <Title text="Skills 🛠️" className="flex flex-col items-center justify-center -rotate-6"/>
        <div>
            <HoverEffect items={skills}/>
        </div>
    </div>
  )
}
