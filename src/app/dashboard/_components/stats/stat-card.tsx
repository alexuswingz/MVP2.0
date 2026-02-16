"use client"

import { StatItem } from "./stats-data"

interface StatCardProps {
  stat: StatItem
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon
  
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-sm text-green-600 font-medium mt-1">{stat.change} this week</p>
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-orange-100 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-violet-600" />
        </div>
      </div>
    </div>
  )
}
