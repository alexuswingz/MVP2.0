"use client"

import { Clock } from "lucide-react"
import { ActivityItem } from "./activity-data"

interface ActivityRowProps {
  activity: ActivityItem
}

export function ActivityRow({ activity }: ActivityRowProps) {
  const statusColors = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  }

  return (
    <div className="flex items-start gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
      <div className={`w-2 h-2 rounded-full mt-2 ${statusColors[activity.status]}`} />
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
        <p className="text-sm text-gray-500">{activity.project}</p>
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-400">
        <Clock className="w-3 h-3" />
        {activity.time}
      </div>
    </div>
  )
}
