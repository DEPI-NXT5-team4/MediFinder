import React from 'react';
import MedicineCard from '../../components/common/MedicineCard';
import { Thermometer, Pill } from 'lucide-react';

const PainReliefFever = () => {
  const medicines = [
    {
      id: 'paracetamol-001',
      name: 'Panadol Advance (Paracetamol 500mg)',
      rating: 5,
      price: 42.50,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Panadol / Panadol Advance / Panadol Extra',
      activeIngredient: 'Paracetamol 500 mg (some formulas combine caffeine)',
      treats: 'Fever, mild-to-moderate pain (headache, toothache, muscle aches)',
      dosage: '500–1000 mg every 4–6 hours (max commonly 3–4 g/day; follow label/doctor)',
      sideEffects: 'Rare at therapeutic doses — nausea, allergic reaction (rare). Overdose risk: liver injury',
      alternatives: 'Generic paracetamol; other brands in Egypt',
      priceRange: 'Panadol Advance 24 tabs: ~31–54 EGP (varies by pack/retailer)'
    },
    {
      id: 'ibuprofen-001',
      name: 'Brufen (Ibuprofen 400mg)',
      rating: 4,
      price: 38.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Brufen, generic ibuprofen',
      activeIngredient: 'Ibuprofen (NSAID - anti-inflammatory + analgesic)',
      treats: 'Pain, inflammation, fever (mild to moderate)',
      dosage: '200–400 mg every 4–6 hours (max commonly ~1200 mg/day OTC; higher under medical direction)',
      sideEffects: 'Stomach irritation, increased bleeding risk, kidney effects (with long-term use)',
      alternatives: 'Paracetamol (if anti-inflammatory not required); other NSAIDs (diclofenac)',
      priceRange: 'Varies by pack size and retailer'
    },
    {
      id: 'paracetamol-002',
      name: 'Panadol Extra (Paracetamol + Caffeine)',
      rating: 5,
      price: 48.00,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
      brandNames: 'Panadol Extra',
      activeIngredient: 'Paracetamol 500mg + Caffeine 65mg',
      treats: 'Enhanced pain relief for headaches, migraines, and body aches',
      dosage: '1-2 tablets every 4-6 hours (max 8 tablets in 24 hours)',
      sideEffects: 'Similar to regular paracetamol, plus caffeine-related effects (restlessness, insomnia)',
      alternatives: 'Regular Panadol, generic paracetamol',
      priceRange: '~40-55 EGP for 24 tablets'
    },
    {
      id: 'paracetamol-003',
      name: 'Generic Paracetamol 500mg',
      rating: 4,
      price: 25.00,
      image: 'https://images.unsplash.com/photo-1550572017-4a6e8c4f2c3e?w=400&h=300&fit=crop',
      brandNames: 'Various generic brands',
      activeIngredient: 'Paracetamol 500mg',
      treats: 'Fever, mild-to-moderate pain',
      dosage: '500–1000 mg every 4–6 hours (max 4g/day)',
      sideEffects: 'Rare at therapeutic doses',
      alternatives: 'Branded paracetamol (Panadol)',
      priceRange: '~20-30 EGP for 20-24 tablets'
    },
    {
      id: 'ibuprofen-002',
      name: 'Ibuprofen 200mg (Generic)',
      rating: 4,
      price: 28.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Various generic brands',
      activeIngredient: 'Ibuprofen 200mg',
      treats: 'Pain, inflammation, fever',
      dosage: '200–400 mg every 4–6 hours (max ~1200 mg/day OTC)',
      sideEffects: 'Stomach irritation, increased bleeding risk',
      alternatives: 'Brufen, paracetamol',
      priceRange: '~25-35 EGP depending on pack size'
    },
    {
      id: 'aspirin-001',
      name: 'Aspirin 100mg (Low Dose)',
      rating: 4,
      price: 22.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Various brands',
      activeIngredient: 'Aspirin (Acetylsalicylic Acid) 100mg',
      treats: 'Pain relief, fever reduction, anti-inflammatory (also used for heart protection)',
      dosage: 'For pain: 300-900mg every 4-6 hours. For heart: 75-100mg daily (as prescribed)',
      sideEffects: 'Stomach irritation, bleeding risk, allergic reactions',
      alternatives: 'Paracetamol, ibuprofen',
      priceRange: '~20-30 EGP for 30 tablets'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 rounded-full p-3">
              <Thermometer className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
              Pain Relief & Fever
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            Pain relief and fever reducers. Commonly used for headaches, toothache, fever, mild pain.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex items-start gap-3">
            <Pill className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Important Information</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Always consult your doctor or pharmacist before taking any medication. Follow the recommended dosage and do not exceed the maximum daily limit. If symptoms persist or worsen, seek medical attention immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Available Medicines
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {medicines.map(medicine => (
              <MedicineCard
                key={medicine.id}
                name={medicine.name}
                rating={medicine.rating}
                price={medicine.price}
                image={medicine.image}
                id={medicine.id}
              />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 sm:p-6">
          <p className="text-sm text-gray-700 text-center">
            <strong>Disclaimer:</strong> Medicine Finder provides information only. We do not provide medical advice, diagnosis, or treatment. Always verify prices and availability directly with the pharmacy.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PainReliefFever;

