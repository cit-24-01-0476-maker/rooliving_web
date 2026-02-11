import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Bell, CheckCircle, Home, DollarSign, MapPin, Calendar } from 'lucide-react';

export default function NotificationsPage() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: 'booking',
      iconType: 'check',
      title: 'Booking Confirmed',
      message: 'Your painting service has been scheduled for Jan 25, 2026',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'design',
      iconType: 'home',
      title: 'New Design Available',
      message: 'We have added new 3D plans matching your requirements',
      time: '5 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'loan',
      iconType: 'dollar',
      title: 'Loan Contact Update',
      message: 'Bank representative will contact you tomorrow at 2:00 PM',
      time: '1 day ago',
      read: false,
    },
    {
      id: 4,
      type: 'inspection',
      iconType: 'map',
      title: 'Inspection Scheduled',
      message: 'Your land inspection is scheduled for Jan 22, 2026',
      time: '1 day ago',
      read: true,
    },
    {
      id: 5,
      type: 'reminder',
      iconType: 'calendar',
      title: 'Project Reminder',
      message: "Don't forget to complete your requirements form",
      time: '2 days ago',
      read: true,
    },
  ];

  const getIcon = (iconType: string) => {
    const iconClass = "w-5 h-5";
    switch (iconType) {
      case 'check': return <CheckCircle className={iconClass} />;
      case 'home': return <Home className={iconClass} />;
      case 'dollar': return <DollarSign className={iconClass} />;
      case 'map': return <MapPin className={iconClass} />;
      case 'calendar': return <Calendar className={iconClass} />;
      default: return <Bell className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-orange-100 p-3 rounded-lg">
            <Bell className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-black">Notifications</h1>
            <p className="text-gray-600">Stay updated on your projects and bookings</p>
          </div>
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
          {notifications.map(notification => (
            <div
              key={notification.id}
              className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${
                !notification.read ? 'bg-orange-50' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    !notification.read ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {getIcon(notification.iconType)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-black">{notification.title}</h3>
                    {!notification.read && (
                      <span className="ml-2 w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mark All as Read */}
        <div className="mt-6 text-center">
          <button className="text-orange-600 hover:text-orange-700 font-medium">
            Mark all as read
          </button>
        </div>
      </div>
    </div>
  );
}