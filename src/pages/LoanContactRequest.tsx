import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { Building2, DollarSign, Calendar } from 'lucide-react';

export default function LoanContactRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bank: '',
    income: '',
    contactTime: '',
    loanAmount: '',
    purpose: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/loan-success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const banks = [
    'First National Bank',
    'Community Credit Union',
    'Metro Bank',
    'Citizens Bank',
    'Regional Trust Bank',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">Loan Contact Request</h1>
            <p className="text-gray-600">Get connected with bank officers for home loan guidance</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Select Bank */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building2 className="w-4 h-4 inline mr-2" />
                Select Partner Bank
              </label>
              <select
                name="bank"
                value={formData.bank}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Choose a bank...</option>
                {banks.map(bank => (
                  <option key={bank} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
            </div>

            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Loan Amount Needed
              </label>
              <select
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select amount range...</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-200k">$100,000 - $200,000</option>
                <option value="200k-300k">$200,000 - $300,000</option>
                <option value="300k-500k">$300,000 - $500,000</option>
                <option value="500k+">$500,000+</option>
              </select>
            </div>

            {/* Monthly Income */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Income Range
              </label>
              <select
                name="income"
                value={formData.income}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select income range...</option>
                <option value="0-3k">$0 - $3,000</option>
                <option value="3k-5k">$3,000 - $5,000</option>
                <option value="5k-7k">$5,000 - $7,000</option>
                <option value="7k-10k">$7,000 - $10,000</option>
                <option value="10k+">$10,000+</option>
              </select>
            </div>

            {/* Preferred Contact Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Preferred Contact Time
              </label>
              <select
                name="contactTime"
                value={formData.contactTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select preferred time...</option>
                <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>

            {/* Purpose/Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Purpose (Optional)
              </label>
              <textarea
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                rows={4}
                placeholder="Brief description of what the loan will be used for..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            {/* Info Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> This is a contact request only. A bank representative will reach out to you 
                within 2-3 business days to discuss loan options and requirements. This is not a loan application.
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
