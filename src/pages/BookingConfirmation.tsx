import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { CheckCircle, Calendar, Clock, MapPin, FileText } from 'lucide-react';

export default function BookingConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-black mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Your service has been successfully scheduled. You'll receive a confirmation email shortly.
          </p>

          {/* Booking Summary */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-bold text-black mb-4">Booking Summary</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Service</p>
                  <p className="font-medium text-black">Painting Services - Standard Package</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-medium text-black">January 25, 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="font-medium text-black">Morning (8:00 AM - 12:00 PM)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium text-black">123 Main Street, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking ID */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-1">Booking Reference</p>
            <p className="text-2xl font-bold text-orange-600">#BK-2026-00143</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => navigate('/my-projects')} fullWidth>
              Track in My Projects
            </Button>
            <Button onClick={() => navigate('/dashboard')} variant="outline" fullWidth>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
