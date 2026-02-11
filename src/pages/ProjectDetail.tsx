import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { CheckCircle, Circle, FileText, Home, Hammer, DollarSign, MapPin } from 'lucide-react';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const timelineSteps = [
    {
      id: 'requirements',
      title: 'Requirements',
      description: 'Define your project needs',
      icon: <FileText className="w-5 h-5" />,
      status: 'completed',
      action: () => navigate('/requirements/step1'),
    },
    {
      id: 'design',
      title: 'Design',
      description: 'View and customize plans',
      icon: <Home className="w-5 h-5" />,
      status: 'current',
      action: () => navigate('/plans'),
    },
    {
      id: 'services',
      title: 'Services',
      description: 'Book professionals',
      icon: <Hammer className="w-5 h-5" />,
      status: 'pending',
      action: () => navigate('/services'),
    },
    {
      id: 'loan',
      title: 'Loan Contact',
      description: 'Get financial assistance',
      icon: <DollarSign className="w-5 h-5" />,
      status: 'pending',
      action: () => navigate('/loan-request'),
    },
    {
      id: 'inspection',
      title: 'Land Inspection',
      description: 'Verify property details',
      icon: <MapPin className="w-5 h-5" />,
      status: 'pending',
      action: () => navigate('/land-inspection'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Modern Villa Project</h1>
              <p className="text-gray-600">Created on Jan 5, 2026</p>
            </div>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              In Progress
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Overall Progress</span>
                <span className="text-sm font-medium text-orange-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-black mb-6">Project Timeline</h2>

          <div className="space-y-6">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {index < timelineSteps.length - 1 && (
                  <div
                    className={`absolute left-5 top-12 w-0.5 h-16 ${
                      step.status === 'completed' ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                )}

                <div
                  className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    step.status === 'completed'
                      ? 'border-green-200 bg-green-50'
                      : step.status === 'current'
                      ? 'border-orange-600 bg-orange-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={step.action}
                >
                  <div
                    className={`p-2 rounded-full ${
                      step.status === 'completed'
                        ? 'bg-green-600 text-white'
                        : step.status === 'current'
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.icon
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>

                  <button
                    className={`px-4 py-2 rounded-lg font-medium ${
                      step.status === 'current'
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {step.status === 'completed' ? 'Review' : step.status === 'current' ? 'Continue' : 'Start'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
