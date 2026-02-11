import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { Upload, ArrowLeft, CheckCircle } from 'lucide-react';

export default function RequirementsStep3() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to project detail after creating
    navigate('/project/1');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-orange-600">Step 3 of 3</span>
              <span className="text-sm text-gray-600">Upload & Confirm</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Upload className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">Upload & Confirm</h1>
            <p className="text-gray-600">Add supporting documents and review your requirements</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Upload Land Sketch */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Land Sketch (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-600 transition-colors cursor-pointer">
                <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-1">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG, PDF up to 10MB</p>
              </div>
            </div>

            {/* Upload Reference Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Reference Images (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-600 transition-colors cursor-pointer">
                <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-1">Upload inspiration or reference images</p>
                <p className="text-sm text-gray-500">Multiple files allowed • PNG, JPG up to 10MB each</p>
              </div>
            </div>

            {/* Requirements Summary */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">Requirements Summary</h3>
              <div className="space-y-3">
                <SummaryRow label="House Floors" value="2 Floors" />
                <SummaryRow label="Rooms" value="3 Rooms" />
                <SummaryRow label="Bathrooms" value="2 Bathrooms" />
                <SummaryRow label="Land Size" value="2,500 sq. ft." />
                <SummaryRow label="Budget" value="$200,000 - $300,000" />
                <div className="border-t border-gray-300 my-3 pt-3">
                  <SummaryRow label="Garden Area" value="500 sq. ft." />
                  <SummaryRow label="Plant Preferences" value="Flowers, Trees, Grass Lawn" />
                  <SummaryRow label="Parking" value="2 Cars" />
                  <SummaryRow label="Outdoor Seating" value="Yes" />
                  <SummaryRow label="Water Features" value="No" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 font-medium">Almost there!</p>
                <p className="text-sm text-blue-700">
                  After submitting, we'll generate personalized house plans and connect you with service providers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/requirements/step2')}
                fullWidth
              >
                <ArrowLeft className="w-5 h-5 mr-2 inline" />
                Back
              </Button>
              <Button type="submit" fullWidth>
                Submit Requirements
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-600">{label}:</span>
      <span className="text-sm font-medium text-black">{value}</span>
    </div>
  );
}
