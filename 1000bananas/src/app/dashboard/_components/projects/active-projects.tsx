"use client"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project-card"
import { projectsData } from "./projects-data"

export function ActiveProjects() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Active Projects</h2>
        <Button variant="ghost" className="text-violet-600 hover:text-violet-700">
          View all projects
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
