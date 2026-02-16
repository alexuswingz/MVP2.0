"use client"

import { TrendingUp } from "lucide-react"
import { Project } from "./projects-data"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusStyles = {
    Production: "bg-green-100 text-green-800",
    Beta: "bg-yellow-100 text-yellow-800",
    Development: "bg-blue-100 text-blue-800",
  }

  const healthColor = parseInt(project.health) >= 95 ? "bg-green-500" : 
                      parseInt(project.health) >= 90 ? "bg-yellow-500" : "bg-blue-500"

  const iconBgColor = parseInt(project.health) >= 95 ? "bg-green-100 text-green-600" :
                      parseInt(project.health) >= 90 ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-600"

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900">{project.name}</h3>
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusStyles[project.status]}`}>
            {project.status}
          </span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconBgColor}`}>
          <TrendingUp className="w-4 h-4" />
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Health Score</span>
        <span className="font-semibold text-gray-900">{project.health}</span>
      </div>
      <div className="mt-3 w-full bg-gray-100 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${healthColor}`}
          style={{ width: project.health }}
        />
      </div>
    </div>
  )
}
