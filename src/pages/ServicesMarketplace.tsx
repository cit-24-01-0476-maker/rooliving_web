import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Star, Search } from 'lucide-react';

export default function ServicesMarketplace() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'painter',
      name: 'Painting Services',
      description: 'Professional interior and exterior painting',
      rating: 4.8,
      reviews: 156,
      priceRange: '$200 - $800',
      image: '🎨',
    },
    {
      id: 'gardener',
      name: 'Gardening & Landscaping',
      description: 'Garden design, planting, and maintenance',
      rating: 4.9,
      reviews: 203,
      priceRange: '$150 - $600',
      image: '🌳',
    },
    {
      id: 'contractor',
      name: 'General Contractor',
      description: 'Construction and renovation services',
      rating: 4.7,
      reviews: 187,
      priceRange: '$500 - $2000',
      image: '🏗️',
    },
    {
      id: 'electrician',
      name: 'Electrical Services',
      description: 'Wiring, fixtures, and electrical repairs',
      rating: 4.9,
      reviews: 142,
      priceRange: '$100 - $500',
      image: '⚡',
    },
    {
      id: 'plumber',
      name: 'Plumbing Services',
      description: 'Plumbing installation and repairs',
      rating: 4.6,
      reviews: 128,
      priceRange: '$80 - $400',
      image: '🔧',
    },
    {
      id: 'carpenter',
      name: 'Carpentry Services',
      description: 'Custom woodwork and furniture',
      rating: 4.8,
      reviews: 95,
      priceRange: '$150 - $700',
      image: '🪵',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Service Marketplace</h1>
          <p className="text-gray-600">Find and book trusted professionals for your project</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for services..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 h-32 flex items-center justify-center text-6xl">
                {service.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 font-medium text-black">{service.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{service.reviews} reviews</span>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-600">Price Range: </span>
                  <span className="font-medium text-black">{service.priceRange}</span>
                </div>

                <button
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  View Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
