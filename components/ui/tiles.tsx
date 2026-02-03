"use client"

import React, { useCallback } from "react"
import { cn } from "@/lib/utils"

interface TilesProps {
  className?: string
  tileClassName?: string
  tileSize?: "sm" | "md" | "lg"
}

const tilePx = {
  sm: 32,
  md: 48,
  lg: 64,
}

export function Tiles({
  className,
  tileClassName,
  tileSize = "md",
}: TilesProps) {
  const size = tilePx[tileSize]

  const handleHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (target.dataset.tile) {
      target.style.backgroundColor = "var(--tile)"
      const timeout = setTimeout(() => {
        target.style.backgroundColor = ""
      }, 2000)
      target.addEventListener("mouseleave", () => {
        clearTimeout(timeout)
        target.style.backgroundColor = ""
      }, { once: true })
    }
  }, [])

  return (
    <div
      className={cn("relative z-0 w-full h-full overflow-hidden", className)}
      onMouseOver={handleHover}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${size}px)`,
        gridTemplateRows: `repeat(auto-fill, ${size}px)`,
        justifyContent: "center",
      }}
    >
      {Array.from({ length: 2000 }).map((_, i) => (
        <div
          key={i}
          data-tile=""
          className={cn(
            "border border-neutral-900 transition-colors duration-2000",
            tileClassName
          )}
        />
      ))}
    </div>
  )
}
