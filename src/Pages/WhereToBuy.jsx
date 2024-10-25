import React from 'react';
import { 
  IoTimeOutline, 
  IoLocationOutline
} from 'react-icons/io5';

const WhereToBuy = () => {
  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="h-[92vh] w-full font-sans flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[80vh]">
          <div className="grid h-full grid-cols-1 lg:grid-cols-5">
            {/* Left Section - Map (3 columns) */}
            <div className="p-4 lg:col-span-3 lg:p-6">
              <div className="bg-[#F7CE3E] rounded-xl p-4 h-full">
                <h2 className="font-serif text-xl lg:text-2xl font-bold text-[#0A1612] text-center mb-4">
                  Visit Our Store
                </h2>
                
                {/* Location Details */}
                <div className="flex items-start gap-2 mb-3 text-[#1A2930]">
                  <IoLocationOutline className="flex-shrink-0 w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-semibold text-base mb-0.5">Barkat Enterprise</h3>
                    <p className="text-xs">Your trusted partner in agricultural solutions</p>
                  </div>
                </div>

                {/* Map Container */}
                <div className="bg-white rounded-lg shadow p-1.5 h-[300px] lg:h-[350px]">
                  <iframe
                    title="Store Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7748799986544!2d87.95883571499945!3d25.062669583958825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39faf1e0d271f18b%3A0xd57d079b6d647370!2sBarkat%20Enterprise!5e0!3m2!1sen!2sin!4v1666777777777!5m2!1sen!2sin"
                    className="w-full h-full rounded-lg"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Business Hours & Contact (2 columns) */}
            <div className="p-4 lg:col-span-2 lg:p-6">
              {/* Business Hours Card */}
              <div className="bg-[#F7CE3E] rounded-xl p-4 shadow-md mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <IoTimeOutline className="w-5 h-5 text-[#1A2930]" />
                  <h3 className="font-semibold text-lg text-[#0A1612]">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-[#1A2930] bg-white rounded-lg p-2 shadow-sm"
                    >
                      <span className="text-sm font-medium">{schedule.day}</span>
                      <span className="text-xs bg-[#0A1612] text-white py-1 px-2 rounded-full">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bulk Orders Section */}
              <div className="bg-[#F7CE3E] rounded-xl p-4 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-[#0A1612]">
                  Looking for Bulk Orders?
                </h3>
                <p className="text-[#1A2930] text-sm mb-4">
                  We offer special pricing for bulk orders and corporate clients. 
                  Contact us to discuss your requirements.
                </p>
                <button 
                  className="w-full bg-white text-[#0A1612] px-4 py-2 rounded-full text-sm font-semibold 
                           shadow-md transition-all duration-300 hover:bg-[#1A2930] hover:text-white
                           focus:outline-none focus:ring-2 focus:ring-[#1A2930] focus:ring-offset-2"
                >
                  Contact Sales Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;