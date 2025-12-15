import React from 'react';
import MedicineCard from '../../components/common/MedicineCard';
import { ShieldAlert, Pill, AlertTriangle } from 'lucide-react';

const Antibiotics = () => {
  const medicines = [
    {
      id: 'amoxicillin-001',
      name: 'Amoxil (Amoxicillin 500mg)',
      rating: 5,
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Amoxil / IBIAMOX / E-Mox (multiple local brands)',
      activeIngredient: 'Amoxicillin (250–1000 mg formulations)',
      treats: 'Common infections — respiratory tract, ear, sinus, skin, urinary tract (where appropriate)',
      dosage: '500 mg every 8 hours or 875 mg twice daily for some formulations (follow prescription)',
      sideEffects: 'Diarrhea, nausea, allergic reactions (rash, anaphylaxis)',
      alternatives: 'Amoxicillin + clavulanic acid (e.g., Augmentin / Hibiotic) for beta-lactamase producing bacteria',
      priceRange: 'Generic local brands widely available; small packs from ~28 EGP (varies by pack/retailer)'
    },
    {
      id: 'augmentin-001',
      name: 'Augmentin (Amoxicillin + Clavulanic acid)',
      rating: 5,
      price: 68.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Augmentin / Hibiotic',
      activeIngredient: 'Amoxicillin + Clavulanic acid (various strengths)',
      treats: 'Broader-spectrum antibiotic for resistant bacterial infections',
      dosage: 'Varies by product formulation (follow prescription)',
      sideEffects: 'GI upset (diarrhea, nausea), allergic reactions',
      alternatives: 'Plain amoxicillin (for non-resistant infections), other antibiotics as prescribed',
      priceRange: 'Varies by formulation and pack size'
    },
    {
      id: 'azithromycin-001',
      name: 'Zithromax (Azithromycin 500mg)',
      rating: 5,
      price: 85.00,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
      brandNames: 'Zithromax / Azithrocin / Zithrocin',
      activeIngredient: 'Azithromycin (macrolide antibiotic)',
      treats: 'Respiratory infections, skin infections, sexually transmitted infections',
      dosage: 'Typically 500mg on day 1, then 250mg daily for 4 days (Z-pack) or as prescribed',
      sideEffects: 'Nausea, diarrhea, abdominal pain, rare cardiac effects',
      alternatives: 'Other macrolides (clarithromycin), amoxicillin for some infections',
      priceRange: '~70-100 EGP for standard course'
    },
    {
      id: 'ciprofloxacin-001',
      name: 'Cipro (Ciprofloxacin 500mg)',
      rating: 4,
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1550572017-4a6e8c4f2c3e?w=400&h=300&fit=crop',
      brandNames: 'Cipro / Ciprofloxacin (various brands)',
      activeIngredient: 'Ciprofloxacin (fluoroquinolone antibiotic)',
      treats: 'Urinary tract infections, respiratory infections, gastrointestinal infections, bone/joint infections',
      dosage: '250-750mg twice daily depending on infection type (follow prescription)',
      sideEffects: 'Nausea, diarrhea, tendon problems (rare), photosensitivity',
      alternatives: 'Other fluoroquinolones (levofloxacin), or different antibiotic classes as prescribed',
      priceRange: '~40-60 EGP depending on pack size'
    },
    {
      id: 'cephalexin-001',
      name: 'Keflex (Cephalexin 500mg)',
      rating: 4,
      price: 52.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Keflex / Ceporex / various cephalexin brands',
      activeIngredient: 'Cephalexin (first-generation cephalosporin)',
      treats: 'Skin infections, respiratory tract infections, bone infections, urinary tract infections',
      dosage: '250-500mg every 6 hours or 500mg-1g every 12 hours (follow prescription)',
      sideEffects: 'Diarrhea, nausea, allergic reactions (cross-reactivity with penicillin allergy possible)',
      alternatives: 'Other cephalosporins, amoxicillin for some infections',
      priceRange: '~45-65 EGP depending on formulation'
    },
    {
      id: 'metronidazole-001',
      name: 'Flagyl (Metronidazole 500mg)',
      rating: 4,
      price: 38.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Flagyl / Metronidazole (various brands)',
      activeIngredient: 'Metronidazole (antibiotic and antiprotozoal)',
      treats: 'Anaerobic bacterial infections, protozoal infections (giardia, amoeba), dental infections',
      dosage: '500mg 2-3 times daily or as prescribed',
      sideEffects: 'Metallic taste, nausea, dark urine, avoid alcohol (disulfiram-like reaction)',
      alternatives: 'Depends on infection type; consult doctor',
      priceRange: '~30-50 EGP depending on pack size'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 rounded-full p-3">
              <ShieldAlert className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
              Antibiotics
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            Treat bacterial infections — prescription only.
          </p>
        </div>

        {/* Prescription Warning Banner */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-md">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⚠️ PRESCRIPTION REQUIRED
                </span>
              </div>
              <h3 className="font-bold text-red-900 mb-2 text-lg">Important: Prescription-Only Medication</h3>
              <p className="text-sm text-gray-800 leading-relaxed mb-2">
                <strong>Antibiotics must only be taken under medical supervision.</strong> Improper use can lead to antibiotic resistance, making infections harder to treat in the future.
              </p>
              <ul className="text-sm text-gray-800 space-y-1 ml-4">
                <li>• Always complete the full course as prescribed by your doctor</li>
                <li>• Never share antibiotics with others</li>
                <li>• Do not use leftover antibiotics for new infections</li>
                <li>• Consult your doctor or pharmacist before taking any antibiotic</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex items-start gap-3">
            <Pill className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">About Antibiotics</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Antibiotics are powerful medicines that fight bacterial infections. They work by killing bacteria or preventing them from reproducing. It's crucial to use them responsibly to prevent antibiotic resistance. Always follow your doctor's instructions and complete the full course of treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Available Antibiotics
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
            <strong>Disclaimer:</strong> Medicine Finder provides information only. We do not provide medical advice, diagnosis, or treatment. Always verify prices and availability directly with the pharmacy. <strong>All antibiotics require a valid prescription from a licensed healthcare provider.</strong>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Antibiotics;

