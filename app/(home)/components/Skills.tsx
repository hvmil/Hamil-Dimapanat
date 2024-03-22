"use client"
import React from 'react'
import Title from "./Title"
import { HoverEffect } from "../../../components/ui/card-hover"
import { SiAmazonaws, SiExpress, SiGit, SiJavascript, SiMongodb, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTypescript } from "react-icons/si"

export default function () {
    const skills = [
        {
            text: "React",
            Icon: SiReact
        },
        {
            text: "Express",
            Icon: SiExpress
        },
        {
            text: "MongoDB",
            Icon: SiMongodb
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
            text: "Python",
            Icon: SiPython
        },
        {
            text: "Javascript",
            Icon: SiJavascript
        },
        {
            text: "SQL",
            Icon: SiPostgresql
        },
        {
            text: "GIT",
            Icon: SiGit,
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
