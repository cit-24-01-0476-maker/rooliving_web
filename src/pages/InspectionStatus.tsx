import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { CheckCircle, Clock, User, Phone, Mail, Calendar, MapPin } from 'lucide-react';

export default function InspectionStatus() {
  const { inspectionId } = useParams();
  const navigate = useNavigate();

  const statusSteps = [
    { status: 'Requested', completed: true, date: 'Jan 17, 2026' },
    { status: 'Scheduled', completed: true, date: 'Jan 18, 2026' },
    { status: 'In Progress', completed: false, date: 'Jan 22, 2026' },
    { status: 'Completed', completed: false, date: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">Inspection Status</h1>
            <p className="text-gray-600">Track your land inspection progress</p>
          </div>

          {/* Status Timeline */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-black mb-6">Inspection Progress</h2>
            <div className="space-y-6">
              {statusSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  {index < statusSteps.length - 1 && (
                    <div
                      className={`absolute left-5 top-12 w-0.5 h-16 ${
                        step.completed ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    />
                  )}

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.completed
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-black">{step.status}</h3>
                        <p className="text-sm text-gray-600">{step.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inspector Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-black mb-4">Inspector Details</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <User className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Inspector Name</p>
                  <p className="font-medium text-black">Michael Anderson</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-black">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-black">m.anderson@inspector.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scheduled Inspection Info */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-black mb-3">Scheduled Inspection</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-gray-700">
                  <strong>Date:</strong> Monday, January 22, 2026
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-gray-700">
                  <strong>Time:</strong> 10:00 AM - 12:00 PM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-gray-700">
                  <strong>Location:</strong> 123 Main Street, Springfield, 12345
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
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
