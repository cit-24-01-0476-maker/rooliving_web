import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { Calendar, Clock, MapPin, FileText, Upload } from 'lucide-react';

export default function BookServiceForm() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    project: '',
    date: '',
    time: '',
    address: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking-confirmation');
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
          <h1 className="text-3xl font-bold text-black mb-2">Book Service</h1>
          <p className="text-gray-600 mb-8">Fill in the details to schedule your service</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Select Project */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                Select Project
              </label>
              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Choose a project...</option>
                <option value="1">Modern Villa Project</option>
                <option value="2">Garden Renovation</option>
                <option value="new">Create New Project</option>
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
                  <Clock className="w-4 h-4 inline mr-2" />
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
                  <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Service Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="123 Main Street, City, State, ZIP"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Any special requirements or instructions..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Upload className="w-4 h-4 inline mr-2" />
                Upload Reference Images (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-600 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, PDF up to 10MB
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
                fullWidth
              >
                Cancel
              </Button>
              <Button type="submit" fullWidth>
                Confirm Booking
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
