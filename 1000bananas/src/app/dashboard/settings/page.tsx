export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your workspace preferences and configurations.</p>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">General Settings</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Workspace Name</p>
              <p className="text-sm text-gray-500">1000 Bananas Production</p>
            </div>
            <button className="text-violet-600 text-sm font-medium hover:text-violet-700">Edit</button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Timezone</p>
              <p className="text-sm text-gray-500">UTC-8 (Pacific Time)</p>
            </div>
            <button className="text-violet-600 text-sm font-medium hover:text-violet-700">Change</button>
          </div>
        </div>
      </div>
    </div>
  )
}
