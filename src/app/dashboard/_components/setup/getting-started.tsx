"use client"

import { Button } from "@/components/ui/button"
import { SetupStepItem } from "./setup-step-item"
import { setupStepsData } from "./setup-data"

export function GettingStarted() {
  return (
    <div className="bg-gradient-to-br from-violet-600 to-purple-700 p-6 rounded-xl text-white">
      <h2 className="text-lg font-semibold mb-2">Getting Started Guide</h2>
      <p className="text-violet-100 mb-6">Complete these steps to get the most out of 1000 Bananas.</p>
      <div className="space-y-3">
        {setupStepsData.map((step, index) => (
          <SetupStepItem key={index} step={step} index={index} />
        ))}
      </div>
      <Button className="mt-6 w-full bg-white text-violet-600 hover:bg-gray-100 font-medium">
        Continue Setup
      </Button>
    </div>
  )
}
