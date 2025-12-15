import React from 'react';
import { Shield, MapPin, Smartphone, Lock, Eye, Database, UserX } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: "Basic Usage Information",
      color: "blue",
      items: [
        "Search queries (e.g., medicine names)",
        "Interactions with app features"
      ]
    },
    {
      icon: MapPin,
      title: "Location Information (Optional)",
      color: "green",
      description: "We use your approximate GPS location only when you enable it, solely to:",
      items: [
        "Show nearby pharmacies",
        "Calculate distance",
        "Provide navigation"
      ],
      note: "We do not store or share your precise location."
    },
    {
      icon: Smartphone,
      title: "Device Information",
      color: "purple",
      items: [
        "Device type",
        "Operating system",
        "App version",
        "Anonymous analytics to improve performance"
      ]
    },
    {
      icon: UserX,
      title: "No Sensitive Personal Data",
      color: "red",
      description: "We do not collect:",
      items: [
        "Health records",
        "Medical history",
        "Personal details (name, ID, address)",
        "Payment information"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base mb-2">
            Last Updated: 2025
          </p>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how Medicine Finder collects, uses, and protects your information when you use our app or website.
          </p>
        </div>

        {/* Information We Collect Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-7 h-7 text-gray-700" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Information We Collect
            </h2>
          </div>
          <p className="text-gray-600 mb-6">We may collect:</p>

          {/* Information Cards */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const colorClasses = getColorClasses(section.color);
              
              return (
                <div
                  key={index}
                  className={`border ${colorClasses.border} rounded-xl p-5 sm:p-6 bg-gradient-to-br from-white to-gray-50`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${colorClasses.bg} rounded-lg p-3 flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                        {index + 1}. {section.title}
                      </h3>
                      {section.description && (
                        <p className="text-gray-600 mb-3">{section.description}</p>
                      )}
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                            <span className={`${colorClasses.text} mt-1`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {section.note && (
                        <div className={`mt-4 p-3 ${colorClasses.bg} rounded-lg`}>
                          <p className={`text-sm font-medium ${colorClasses.text}`}>
                            ⓘ {section.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 sm:p-8 text-center text-white">
          <Lock className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Your Privacy Matters</h2>
          <p className="text-blue-100 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            We are committed to protecting your privacy and ensuring your data is secure. If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
          </p>
          <a
            href="mailto:support@medicinefinder.com"
            className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md"
          >
            Contact Privacy Team
          </a>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;

