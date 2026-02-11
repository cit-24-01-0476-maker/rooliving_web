import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { CheckCircle, Phone, Mail, Calendar } from 'lucide-react';

export default function LoanSubmittedSuccess() {
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

          <h1 className="text-3xl font-bold text-black mb-2">Request Submitted!</h1>
          <p className="text-gray-600 mb-8">
            Your loan contact request has been successfully submitted.
          </p>

          {/* Request Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-bold text-black mb-4">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-black">Within 2-3 Business Days</p>
                  <p className="text-sm text-gray-600">
                    A bank representative from First National Bank will review your request.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-black">Contact from Bank</p>
                  <p className="text-sm text-gray-600">
                    You'll receive a phone call during your preferred time to discuss loan options.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-black">Email Confirmation</p>
                  <p className="text-sm text-gray-600">
                    Check your email for a confirmation message with your reference number.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reference Number */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-1">Request Reference Number</p>
            <p className="text-2xl font-bold text-orange-600">#LN-2026-00087</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => navigate('/project/1')} fullWidth>
              Back to Project
            </Button>
            <Button onClick={() => navigate('/dashboard')} variant="outline" fullWidth>
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
