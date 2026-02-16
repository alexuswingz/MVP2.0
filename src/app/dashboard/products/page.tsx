export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Products</h1>
        <p className="text-gray-500 mt-1">Manage your product catalog and inventory.</p>
      </div>
      
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📦</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Products Yet</h3>
          <p className="text-gray-500 mb-6">Start by adding your first product to the catalog.</p>
          <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-orange-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            Add New Product
          </button>
        </div>
      </div>
    </div>
  )
}
