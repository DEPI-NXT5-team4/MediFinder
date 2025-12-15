import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Medicine Finder?",
      answer: "Medicine Finder is a smart healthcare app that helps you locate medicines, compare prices across nearby pharmacies, and get directions or contact them instantly."
    },
    {
      question: "How does the app work?",
      answer: "1. Type the name of a medicine in the search bar.\n2. You'll get instant results showing:\n   • Medicine details\n   • Available pharmacies\n   • Prices\n   • Distance\n   • Call & navigation options"
    },
    {
      question: "Does the app show real pharmacy prices?",
      answer: "Yes — we show the latest available prices from trusted pharmacies. Prices may vary slightly from branch to branch."
    },
    {
      question: "Is Medicine Finder free to use?",
      answer: "Yes. The core features (search, price comparison, directions, and contact) are completely free."
    },
    {
      question: "Does the app use my location?",
      answer: "Only if you grant permission. Your location helps us show:\n• Nearby pharmacies\n• Distance\n• Fastest routes\n\nWe do not store or share your exact location."
    },
    {
      question: "Can I call a pharmacy through the app?",
      answer: "Yes. Each pharmacy card includes a direct \"Call\" button."
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. Medicine Finder does not store sensitive personal information and follows strict data protection practices."
    },
    {
      question: "Which countries does Medicine Finder support?",
      answer: "Currently, Medicine Finder focuses on pharmacies and medicine availability in Egypt."
    },
    {
      question: "Is Medicine Finder a medical service?",
      answer: "No. We provide information only. Always consult your doctor or pharmacist before taking any medication."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Find answers to common questions about Medicine Finder and how to make the most of our platform.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <div className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 sm:p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Still have questions?</h2>
          <p className="text-blue-100 mb-6 text-sm sm:text-base">
            We're here to help! Reach out to our support team for assistance.
          </p>
          <a
            href="mailto:support@medicinefinder.com"
            className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md"
          >
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
};

export default FAQ;

