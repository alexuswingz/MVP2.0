"use client"

import { CheckCircle2 } from "lucide-react"
import { SetupStep } from "./setup-data"

interface SetupStepItemProps {
  step: SetupStep
  index: number
}

export function SetupStepItem({ step, index }: SetupStepItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
        step.completed ? "bg-green-400" : "bg-violet-400/50"
      }`}>
        {step.completed ? (
          <CheckCircle2 className="w-4 h-4 text-white" />
        ) : (
          <span className="text-xs font-medium">{index + 1}</span>
        )}
      </div>
      <span className={`text-sm ${step.completed ? "text-white" : "text-violet-200"}`}>
        {step.label}
      </span>
    </div>
  )
}
