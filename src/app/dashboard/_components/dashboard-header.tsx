"use client"

import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back! 👋</h1>
        <p className="text-gray-500 mt-1">Here's what's happening with your projects today.</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          All systems operational
        </div>
        <Button className="bg-gradient-to-r from-violet-600 to-orange-500 hover:opacity-90 text-white">
          <Rocket className="w-4 h-4 mr-2" />
          New Deployment
        </Button>
      </div>
    </div>
  )
}
