"use client"

import { Button } from "@/components/ui/button"
import { ActivityRow } from "./activity-row"
import { recentActivityData } from "./activity-data"

export function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <Button variant="ghost" className="text-violet-600 hover:text-violet-700">
          View all
        </Button>
      </div>
      <div className="space-y-4">
        {recentActivityData.map((activity, index) => (
          <ActivityRow key={index} activity={activity} />
        ))}
      </div>
    </div>
  )
}
