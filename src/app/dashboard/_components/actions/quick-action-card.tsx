"use client"

import { ArrowRight } from "lucide-react"
import { QuickAction } from "./actions-data"

interface QuickActionCardProps {
  action: QuickAction
}

export function QuickActionCard({ action }: QuickActionCardProps) {
  const Icon = action.icon
  
  return (
    <button className="group flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all text-left">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900">{action.label}</p>
        <p className="text-sm text-gray-500">Get started</p>
      </div>
      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
    </button>
  )
}
