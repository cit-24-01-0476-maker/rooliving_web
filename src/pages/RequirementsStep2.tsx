import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { Trees, ArrowRight, ArrowLeft } from 'lucide-react';

export default function RequirementsStep2() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gardenArea: '',
    plantPreferences: [] as string[],
    parking: '',
    outdoorSeating: false,
    waterFeatures: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/requirements/step3');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const togglePlantPreference = (plant: string) => {
    setFormData(prev => ({
      ...prev,
      plantPreferences: prev.plantPreferences.includes(plant)
        ? prev.plantPreferences.filter(p => p !== plant)
        : [...prev.plantPreferences, plant],
    }));
  };

  const plants = ['Flowers', 'Trees', 'Shrubs', 'Grass Lawn', 'Vegetable Garden', 'Herbs'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-orange-600">Step 2 of 3</span>
              <span className="text-sm text-gray-600">Landscape Needs</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '66%' }} />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Trees className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">Landscape Needs</h1>
            <p className="text-gray-600">Define your outdoor and landscape preferences</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Garden Area Size (sq. ft.)
              </label>
              <input
                type="number"
                name="gardenArea"
                value={formData.gardenArea}
                onChange={handleChange}
                required
                placeholder="e.g., 500"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Plant Preferences (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {plants.map(plant => (
                  <button
                    key={plant}
                    type="button"
                    onClick={() => togglePlantPreference(plant)}
                    className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                      formData.plantPreferences.includes(plant)
                        ? 'border-orange-600 bg-orange-50 text-orange-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {plant}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Parking Space Required
              </label>
              <select
                name="parking"
                value={formData.parking}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select parking...</option>
                <option value="none">No Parking</option>
                <option value="1">1 Car</option>
                <option value="2">2 Cars</option>
                <option value="3+">3+ Cars</option>
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="outdoorSeating"
                  name="outdoorSeating"
                  checked={formData.outdoorSeating}
                  onChange={handleChange}
                  className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-600"
                />
                <label htmlFor="outdoorSeating" className="ml-3 text-gray-700">
                  Include Outdoor Seating Area
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="waterFeatures"
                  name="waterFeatures"
                  checked={formData.waterFeatures}
                  onChange={handleChange}
                  className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-600"
                />
                <label htmlFor="waterFeatures" className="ml-3 text-gray-700">
                  Include Water Features (Fountain, Pond, etc.)
                </label>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/requirements/step1')}
                fullWidth
              >
                <ArrowLeft className="w-5 h-5 mr-2 inline" />
                Back
              </Button>
              <Button type="submit" fullWidth>
                Next: Upload & Confirm
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
