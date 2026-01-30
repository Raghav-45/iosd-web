"use client"

import type React from "react"

import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { FaCode, FaDatabase } from "react-icons/fa"
import { GiBrain } from "react-icons/gi"
import { TbBinaryTree } from "react-icons/tb"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  FaCode,
  FaDatabase,
  GiBrain,
  TbBinaryTree,
}

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  icon: string
  description: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  )
}

// Simplified BentoCard - icon, name, and description
const BentoCard = ({ name, className, icon, description, ...props }: BentoCardProps) => {
  const Icon = ICON_MAP[icon]

  return (
    <div
      key={name}
      className={cn(
        "relative col-span-3 flex flex-col justify-center overflow-hidden",
        "border border-border bg-background backdrop-blur-md rounded-xl",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-2 p-6">
        {Icon && <Icon className="h-12 w-12 text-foreground" />}
        <h3 className="text-xl font-light tracking-tight">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export { BentoCard, BentoGrid }
