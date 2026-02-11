import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { Star, Check } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const serviceData: any = {
    painter: {
      name: 'Painting Services',
      description: 'Professional interior and exterior painting services for residential and commercial properties. Our team uses high-quality paints and follows best practices to ensure a flawless finish.',
      rating: 4.8,
      reviews: 156,
      image: '🎨',
    },
    gardener: {
      name: 'Gardening & Landscaping',
      description: 'Transform your outdoor space with expert garden design, planting, and maintenance services. We specialize in creating beautiful, sustainable landscapes.',
      rating: 4.9,
      reviews: 203,
      image: '🌳',
    },
    contractor: {
      name: 'General Contractor',
      description: 'Complete construction and renovation services for your home. From foundation to finishing, we handle all aspects of your building project.',
      rating: 4.7,
      reviews: 187,
      image: '🏗️',
    },
  };

  const service = serviceData[serviceId as string] || serviceData.painter;

  const packages = [
    {
      name: 'Basic',
      price: '$200',
      features: [
        'Single room service',
        '1 professional worker',
        'Basic materials included',
        '1-day completion',
      ],
    },
    {
      name: 'Standard',
      price: '$450',
      features: [
        'Up to 3 rooms',
        '2 professional workers',
        'Premium materials included',
        '2-3 days completion',
        'Free consultation',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '$800',
      features: [
        'Whole house service',
        '3+ professional workers',
        'Premium materials & brands',
        '5-7 days completion',
        'Free consultation',
        '1-year warranty',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Service Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-32 h-32 rounded-lg flex items-center justify-center text-6xl">
              {service.image}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-black mb-2">{service.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium text-black">{service.rating}</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{service.reviews} reviews</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Service Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 ${
                  pkg.popular ? 'ring-2 ring-orange-600 relative' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-black mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-orange-600 mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigate(`/book-service/${serviceId}`)}
                  variant={pkg.popular ? 'primary' : 'outline'}
                  fullWidth
                >
                  Book {pkg.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
