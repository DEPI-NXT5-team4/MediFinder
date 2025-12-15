import React from 'react';
import { FileText, CheckCircle, AlertCircle, Shield, Scale, Users, Info, Link as LinkIcon, UserX, RefreshCw, Mail } from 'lucide-react';

const TermsOfUse = () => {
  const terms = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      color: "green",
      description: "By accessing our app or website, you confirm that you:",
      items: [
        "Are at least 13 years old",
        "Agree to follow all terms and rules",
        "Accept our Privacy Policy"
      ]
    },
    {
      icon: Info,
      title: "Purpose of the App",
      color: "blue",
      description: "Medicine Finder:",
      items: [
        "Helps users find medicines at nearby pharmacies",
        "Shows prices, availability, and directions",
        "Provides general medicine information"
      ],
      note: "Medicine Finder does not provide medical advice, diagnosis, or treatment."
    },
    {
      icon: Users,
      title: "User Responsibilities",
      color: "purple",
      description: "You agree to:",
      items: [
        "Use the app for lawful purposes",
        "Not misuse, hack, or disrupt the app",
        "Not submit false or misleading information"
      ]
    },
    {
      icon: AlertCircle,
      title: "Accuracy of Information",
      color: "yellow",
      description: "We aim to provide accurate and updated information. However:",
      items: [
        "Prices, availability, and pharmacy details may change",
        "We are not responsible for errors caused by external data sources",
        "Always verify important details directly with the pharmacy"
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      color: "indigo",
      description: "All content in the app (design, logo, text, data, and layout) is owned by Medicine Finder and protected by copyright laws. You may not copy, resell, or redistribute any content."
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      color: "red",
      description: "Medicine Finder is not responsible for:",
      items: [
        "Medical consequences of improper medicine usage",
        "Price differences between pharmacies",
        "Incorrect information provided by third parties",
        "Delays, bugs, or technical issues"
      ],
      note: "Use the app at your own discretion."
    },
    {
      icon: LinkIcon,
      title: "Third-Party Links",
      color: "cyan",
      description: "The app may contain links to external services (e.g., Google Maps). We do not control or endorse their content."
    },
    {
      icon: UserX,
      title: "Account & Access",
      color: "orange",
      description: "If the app ever includes user accounts:",
      items: [
        "You are responsible for keeping your login secure",
        "We may suspend accounts that violate our terms"
      ]
    },
    {
      icon: AlertCircle,
      title: "Termination",
      color: "pink",
      description: "We may suspend or restrict access to the app if:",
      items: [
        "You misuse the service",
        "You violate these terms"
      ]
    },
    {
      icon: RefreshCw,
      title: "Updates to Terms",
      color: "teal",
      description: "We may modify these Terms of Use at any time. Continued use of the app means you accept the updated terms."
    },
    {
      icon: Mail,
      title: "Contact Us",
      color: "gray",
      description: "If you have any questions about these Terms:",
      contact: "support@medicinefinder.com"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      yellow: { bg: "bg-yellow-100", text: "text-yellow-600", border: "border-yellow-200" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
      red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
      cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
      pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
      teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200" },
      gray: { bg: "bg-gray-100", text: "text-gray-600", border: "border-gray-200" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Terms of Use
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base mb-2">
            Last Updated: 2025
          </p>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            By using Medicine Finder, you agree to the following Terms of Use.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-5">
          {terms.map((term, index) => {
            const Icon = term.icon;
            const colorClasses = getColorClasses(term.color);
            
            return (
              <div
                key={index}
                className={`bg-white border ${colorClasses.border} rounded-2xl shadow-sm p-5 sm:p-6 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${colorClasses.bg} rounded-lg p-3 flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      {index + 1}. {term.title}
                    </h2>
                    {term.description && (
                      <p className="text-gray-700 mb-3">{term.description}</p>
                    )}
                    {term.items && (
                      <ul className="space-y-2 mb-3">
                        {term.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                            <span className={`${colorClasses.text} mt-1 font-bold`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {term.note && (
                      <div className={`mt-3 p-3 ${colorClasses.bg} rounded-lg border ${colorClasses.border}`}>
                        <p className={`text-sm font-medium ${colorClasses.text}`}>
                          ⓘ {term.note}
                        </p>
                      </div>
                    )}
                    {term.contact && (
                      <div className="mt-3">
                        <a
                          href={`mailto:${term.contact}`}
                          className={`inline-flex items-center gap-2 ${colorClasses.text} hover:underline font-medium`}
                        >
                          📧 {term.contact}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 sm:p-8 text-center text-white">
          <Scale className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Questions About Our Terms?</h2>
          <p className="text-blue-100 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            We're committed to transparency and fairness. If you have any questions or concerns about our Terms of Use, our team is here to help.
          </p>
          <a
            href="mailto:support@medicinefinder.com"
            className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md"
          >
            Contact Legal Team
          </a>
        </div>

      </div>
    </div>
  );
};

export default TermsOfUse;

