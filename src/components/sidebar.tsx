"use client"

import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"
import { 
  Home, 
  Briefcase, 
  Package, 
  Zap,
  ChevronUp,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react"
import { useSidebar } from "./sidebar-context"
import { cn } from "@/lib/utils"

interface NavItem {
  icon: React.ReactNode
  label: string
  href: string
  id: string
}

interface NavSection {
  id: string
  icon: React.ReactNode
  label: string
  items: { label: string; href: string }[]
}

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const { isExpanded, toggleSidebar, expandedSections, toggleSection } = useSidebar()

  const mainNavItems: NavItem[] = [
    {
      id: "home",
      icon: <Home className="w-5 h-5" />,
      label: "Home",
      href: "/dashboard",
    },
  ]

  const navSections: NavSection[] = [
    {
      id: "products",
      icon: <Briefcase className="w-5 h-5" />,
      label: "Products",
      items: [
        { label: "My Products", href: "/dashboard/products" },
        { label: "Vine", href: "/dashboard/products/vine" },
      ],
    },
    {
      id: "production",
      icon: <Package className="w-5 h-5" />,
      label: "Production",
      items: [
        { label: "Forecast", href: "/dashboard/production/forecast" },
        { label: "Shipments", href: "/dashboard/production/shipments" },
      ],
    },
  ]

  const bottomNavItems: NavItem[] = [
    {
      id: "action-items",
      icon: <Zap className="w-5 h-5" />,
      label: "Action Items",
      href: "/dashboard/action-items",
    },
  ]

  const handleNavClick = (href: string) => {
    router.push(href)
  }

  return (
    <aside 
      className={cn(
        "bg-slate-900 flex flex-col min-h-screen fixed left-0 top-0 z-50 transition-all duration-300",
        isExpanded ? "w-64" : "w-16"
      )}
    >
      {/* Header */}
      <div className={cn(
        "flex items-center border-b border-slate-800",
        isExpanded ? "p-4 justify-between" : "p-3 flex-col gap-3"
      )}>
        {/* Logo */}
        {isExpanded ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="1000 Bananas Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-yellow-400 font-bold text-sm leading-tight">1000</span>
              <span className="text-yellow-400 font-bold text-sm leading-tight">Bananas</span>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 relative flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="1000 Bananas Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        )}
        
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-slate-800"
        >
          {isExpanded ? (
            <PanelLeftClose className="w-5 h-5" />
          ) : (
            <PanelLeftOpen className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 py-2 overflow-y-auto">
        {/* Simple nav items */}
        {mainNavItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.href)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 transition-all duration-200",
              isExpanded ? "justify-start" : "justify-center",
              pathname === item.href
                ? "bg-slate-800 text-white border-r-2 border-violet-500"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            )}
          >
            {item.icon}
            {isExpanded && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}

        {/* Collapsible sections */}
        {isExpanded && navSections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => toggleSection(section.id)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200",
                expandedSections.includes(section.id) && "text-white"
              )}
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <span className="text-sm font-medium">{section.label}</span>
              </div>
              {expandedSections.includes(section.id) ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            
            {/* Submenu items */}
            {expandedSections.includes(section.id) && (
              <div className="bg-slate-800/30">
                {section.items.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "w-full flex items-center pl-12 pr-4 py-2 text-sm transition-all duration-200",
                      pathname === item.href
                        ? "text-white bg-slate-800 border-r-2 border-violet-500"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Collapsed sections (icon only) */}
        {!isExpanded && navSections.map((section) => (
          <div key={section.id} className="relative group">
            <button
              className="w-full flex items-center justify-center px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
            >
              {section.icon}
            </button>
            
            {/* Tooltip on hover */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
              {section.label}
            </div>
          </div>
        ))}

        {/* Bottom nav items */}
        {bottomNavItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.href)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 transition-all duration-200",
              isExpanded ? "justify-start" : "justify-center",
              pathname === item.href
                ? "bg-slate-800 text-white border-r-2 border-violet-500"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            )}
          >
            {item.icon}
            {isExpanded && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  )
}
