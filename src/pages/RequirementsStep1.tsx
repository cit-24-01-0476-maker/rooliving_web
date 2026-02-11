import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { Home, ArrowRight } from 'lucide-react';

export default function RequirementsStep1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    floors: '',
    rooms: '',
    bathrooms: '',
    landSize: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/requirements/step2');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-orange-600">Step 1 of 3</span>
              <span className="text-sm text-gray-600">House Basics</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '33%' }} />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Home className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">House Basics</h1>
            <p className="text-gray-600">Tell us about your basic house requirements</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Floors
                </label>
                <select
                  name="floors"
                  value={formData.floors}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                >
                  <option value="">Select floors...</option>
                  <option value="1">1 Floor</option>
                  <option value="2">2 Floors</option>
                  <option value="3">3 Floors</option>
                  <option value="4+">4+ Floors</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Rooms
                </label>
                <select
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                >
                  <option value="">Select rooms...</option>
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4">4 Rooms</option>
                  <option value="5+">5+ Rooms</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Bathrooms
                </label>
                <select
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                >
                  <option value="">Select bathrooms...</option>
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3 Bathrooms</option>
                  <option value="4+">4+ Bathrooms</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Land Size (sq. ft.)
                </label>
                <input
                  type="number"
                  name="landSize"
                  value={formData.landSize}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 2500"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select budget...</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-200k">$100,000 - $200,000</option>
                <option value="200k-300k">$200,000 - $300,000</option>
                <option value="300k-500k">$300,000 - $500,000</option>
                <option value="500k+">$500,000+</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/dashboard')}
                fullWidth
              >
                Cancel
              </Button>
              <Button type="submit" fullWidth>
                Next: Landscape Needs
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
