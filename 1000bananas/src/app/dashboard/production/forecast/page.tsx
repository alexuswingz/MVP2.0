export default function ForecastPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Forecast</h1>
        <p className="text-gray-500 mt-1">Production forecasting and demand planning.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center h-64">
          <p className="text-gray-400">Demand forecast charts coming soon...</p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center h-64">
          <p className="text-gray-400">Production planning tools coming soon...</p>
        </div>
      </div>
    </div>
  )
}
