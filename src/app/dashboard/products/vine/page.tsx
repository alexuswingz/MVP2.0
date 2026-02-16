export default function VinePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Vine</h1>
        <p className="text-gray-500 mt-1">Product development and lifecycle management.</p>
      </div>
      
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🌿</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Vine Dashboard</h3>
          <p className="text-gray-500">Track your product growth and development stages.</p>
        </div>
      </div>
    </div>
  )
}
