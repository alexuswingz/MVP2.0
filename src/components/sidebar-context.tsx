"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface SidebarContextType {
  isExpanded: boolean
  toggleSidebar: () => void
  expandedSections: string[]
  toggleSection: (section: string) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [expandedSections, setExpandedSections] = useState<string[]>(["products", "production"])

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  return (
    <SidebarContext.Provider value={{ isExpanded, toggleSidebar, expandedSections, toggleSection }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
