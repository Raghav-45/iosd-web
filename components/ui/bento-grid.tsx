"use client"

import type React from "react"

import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { FaCode, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaChartBar, FaChartPie } from "react-icons/fa"
import { MdWeb, MdOutlineDevices, MdPsychology, MdTimeline, MdModelTraining, MdAnalytics } from "react-icons/md"
import { FiLayout } from "react-icons/fi"
import { TbWorldWww, TbManualGearbox, TbBinaryTree, TbSql } from "react-icons/tb"
import { SiJavascript, SiTypescript, SiTensorflow, SiPytorch, SiPandas, SiScipy } from "react-icons/si"
import { VscBrowser, VscChecklist, VscGraph } from "react-icons/vsc"

// 2. ML Imports
import { GiBrain, GiSandsOfTime } from "react-icons/gi"
import { RiRobotLine } from "react-icons/ri"
import { AiOutlineDotChart, AiOutlineAreaChart } from "react-icons/ai"
import { BiChip, BiTable } from "react-icons/bi"
import { LuBrainCircuit } from "react-icons/lu"

// 3. DSA Imports
import { PiTreeStructureFill } from "react-icons/pi"
import { TiFlowMerge } from "react-icons/ti"
import { BsGraphUp } from "react-icons/bs"
import { CgLoadbar } from "react-icons/cg"
import { ImTree } from "react-icons/im"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  // Web
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  MdWeb,
  MdOutlineDevices,
  FiLayout,
  TbWorldWww,
  SiJavascript,
  SiTypescript,
  VscBrowser,

  // ML
  GiBrain,
  RiRobotLine,
  MdPsychology,
  TbManualGearbox,
  SiTensorflow,
  SiPytorch,
  AiOutlineDotChart,
  BiChip,
  LuBrainCircuit,
  MdModelTraining,

  // DSA
  PiTreeStructureFill,
  TiFlowMerge,
  MdTimeline,
  VscChecklist,
  GiSandsOfTime,
  BsGraphUp,
  CgLoadbar,
  ImTree,
  TbBinaryTree,

  // Data Science
  FaDatabase,
  FaChartBar,
  FaChartPie,
  MdAnalytics,
  SiPandas,
  SiScipy,
  TbSql,
  VscGraph,
  AiOutlineAreaChart,
  BiTable,
}

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ComponentType<{ className?: string }>
  description: string
  _href?: string
  _cta?: string
  icons: string[]
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  )
}

// Updated BentoCard component with improved icon styling
const BentoCard = ({ name, className, background, Icon, description, icons, ...props }: BentoCardProps) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden",
        "border border-border bg-background backdrop-blur-md rounded-xl",
        className,
      )}
      {...props}
    >
      <div>{background}</div>
      <div className="relative p-4 h-full" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div
          className={cn(
            "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-500 ease-in-out",
            hover ? "opacity-0 scale-95" : "opacity-100 scale-100",
          )}
        >
          <Icon className="h-12 w-12 origin-left transform-gpu text-foreground transition-all duration-300 ease-in-out" />
          <h3 className="text-xl font-light tracking-tight">{name}</h3>
          <p className="max-w-lg text-muted-foreground">{description}</p>
        </div>

        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out",
            hover ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
          )}
        >
          <div className="w-full h-full p-4">
            <div className="grid grid-cols-3 lg:flex lg:gap-6 gap-4 h-full place-items-center lg:justify-center lg:items-center">
              {icons?.slice(0, 9).map((iconName, index) => {
                const Icon_React = ICON_MAP[iconName]
                if (!Icon_React) return null

                return (
                  <div key={index} className="flex items-center justify-center w-full h-full lg:w-auto lg:h-auto">
                    {/* Icon with hover effect */}
                    <div className="group/icon relative flex items-center justify-center">
                      {/* Glow background on hover */}
                      <div
                        className={cn(
                          "absolute inset-0 blur-lg opacity-0 group-hover/icon:opacity-50 transition-opacity duration-300",
                          "bg-accent rounded-lg",
                        )}
                        style={{
                          width: "4rem",
                          height: "4rem",
                        }}
                      />

                      <Icon_React
                        className={cn(
                          "w-8 h-8 lg:w-12 lg:h-12 transition-all duration-300 ease-in-out",
                          "group-hover/icon:scale-125 group-hover/icon:text-accent",
                          "text-foreground relative z-10",
                        )}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { BentoCard, BentoGrid }
