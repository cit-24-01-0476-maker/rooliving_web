import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { MapPin, Calendar, FileText, Upload } from 'lucide-react';

export default function LandInspectionRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    address: '',
    date: '',
    time: '',
    inspectionType: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/inspection-status/1');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">Land Inspection Request</h1>
            <p className="text-gray-600">Schedule a professional inspection of your property</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Location/City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                City/Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="e.g., Springfield"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            {/* Full Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Full address including street, state, and ZIP"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            {/* Inspection Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                Inspection Type
              </label>
              <select
                name="inspectionType"
                value={formData.inspectionType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select inspection type...</option>
                <option value="basic">Basic Land Survey</option>
                <option value="soil">Soil Testing</option>
                <option value="boundary">Boundary Verification</option>
                <option value="comprehensive">Comprehensive Inspection</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                >
                  <option value="">Select time...</option>
                  <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="evening">Evening (4:00 PM - 6:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Any specific areas of concern or special requirements..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            {/* Document Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Upload className="w-4 h-4 inline mr-2" />
                Upload Property Documents (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-600 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Click to upload property deed, survey, or other documents
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PDF, PNG, JPG up to 10MB
                </p>
              </div>
            </div>

            {/* Info Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Inspection Fee:</strong> $150 - $500 depending on inspection type. 
                Payment will be collected at the time of inspection.
              </p>
            </div>

            {/* Action Buttons */}
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
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
