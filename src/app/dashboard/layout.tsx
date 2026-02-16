"use client"

import { Sidebar } from "@/components/sidebar"
import { SidebarProvider, useSidebar } from "@/components/sidebar-context"
import { cn } from "@/lib/utils"

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { isExpanded } = useSidebar()

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main 
        className={cn(
          "flex-1 p-8 transition-all duration-300",
          isExpanded ? "ml-64" : "ml-16"
        )}
      >
        {children}
      </main>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardContent>
        {children}
      </DashboardContent>
    </SidebarProvider>
  )
}
