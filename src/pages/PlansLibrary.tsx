import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Search, Home, Maximize2 } from 'lucide-react';

export default function PlansLibrary() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'2D' | '3D'>('2D');

  const plans = [
    {
      id: 1,
      name: 'Modern Villa',
      type: '2D/3D',
      size: '2,500 sq. ft.',
      style: 'Contemporary',
      rooms: '3 Bed, 2 Bath',
    },
    {
      id: 2,
      name: 'Cozy Cottage',
      type: '2D/3D',
      size: '1,800 sq. ft.',
      style: 'Traditional',
      rooms: '2 Bed, 2 Bath',
    },
    {
      id: 3,
      name: 'Luxury Estate',
      type: '2D/3D',
      size: '4,200 sq. ft.',
      style: 'Modern',
      rooms: '5 Bed, 4 Bath',
    },
    {
      id: 4,
      name: 'Garden Bungalow',
      type: '2D/3D',
      size: '1,500 sq. ft.',
      style: 'Rustic',
      rooms: '2 Bed, 1 Bath',
    },
    {
      id: 5,
      name: 'Family Home',
      type: '2D/3D',
      size: '3,000 sq. ft.',
      style: 'Contemporary',
      rooms: '4 Bed, 3 Bath',
    },
    {
      id: 6,
      name: 'Urban Loft',
      type: '2D/3D',
      size: '1,200 sq. ft.',
      style: 'Industrial',
      rooms: '1 Bed, 1 Bath',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Plans Library</h1>
          <p className="text-gray-600">Browse professional house and landscape designs</p>
        </div>

        {/* Search and View Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search plans by style, size, or features..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            />
          </div>

          <div className="flex gap-2 bg-white border border-gray-300 rounded-lg p-1">
            <button
              onClick={() => setViewMode('2D')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                viewMode === '2D'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              2D Plans
            </button>
            <button
              onClick={() => setViewMode('3D')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                viewMode === '3D'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              3D Plans
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center relative">
                <Home className="w-20 h-20 text-gray-400" />
                <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {viewMode}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{plan.name}</h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="font-medium text-black">{plan.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Style:</span>
                    <span className="font-medium text-black">{plan.style}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Layout:</span>
                    <span className="font-medium text-black">{plan.rooms}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/plans/${plan.id}`)}
                  className="w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Maximize2 className="w-4 h-4" />
                  View Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
