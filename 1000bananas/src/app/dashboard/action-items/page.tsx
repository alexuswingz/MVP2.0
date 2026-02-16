export default function ActionItemsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Action Items</h1>
        <p className="text-gray-500 mt-1">Your tasks and action items that need attention.</p>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Pending Tasks</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { task: "Review Q4 production plan", priority: "High", due: "Today" },
            { task: "Approve new product designs", priority: "Medium", due: "Tomorrow" },
            { task: "Update shipment tracking", priority: "Low", due: "Next week" },
            { task: "Team meeting preparation", priority: "Medium", due: "In 2 days" },
          ].map((item, index) => (
            <div key={index} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-violet-600" />
                <span className="text-gray-900">{item.task}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  item.priority === "High" ? "bg-red-100 text-red-800" :
                  item.priority === "Medium" ? "bg-yellow-100 text-yellow-800" :
                  "bg-green-100 text-green-800"
                }`}>
                  {item.priority}
                </span>
                <span className="text-sm text-gray-500">{item.due}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
