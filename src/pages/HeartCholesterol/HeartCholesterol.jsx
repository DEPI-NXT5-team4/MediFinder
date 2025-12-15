import React from 'react';
import MedicineCard from '../../components/common/MedicineCard';
import { Heart, Pill, AlertCircle, Info } from 'lucide-react';

const HeartCholesterol = () => {
  const medicines = [
    {
      id: 'atorvastatin-001',
      name: 'Lipitor (Atorvastatin 20mg)',
      rating: 5,
      price: 95.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Lipitor / Atorva / Generic Atorvastatin',
      activeIngredient: 'Atorvastatin 10mg, 20mg, 40mg, 80mg (Statin - HMG-CoA reductase inhibitor)',
      treats: 'High cholesterol (LDL), cardiovascular disease prevention, reduces risk of heart attack and stroke',
      dosage: '10-80mg once daily (usually taken in the evening)',
      sideEffects: 'Muscle pain/weakness, liver enzyme elevation, digestive issues, headache (rare: rhabdomyolysis)',
      alternatives: 'Other statins (simvastatin, rosuvastatin, pravastatin), ezetimibe, PCSK9 inhibitors',
      priceRange: '~85-120 EGP depending on strength and brand'
    },
    {
      id: 'simvastatin-001',
      name: 'Zocor (Simvastatin 40mg)',
      rating: 5,
      price: 68.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Zocor / Generic Simvastatin',
      activeIngredient: 'Simvastatin 10mg, 20mg, 40mg, 80mg (Statin)',
      treats: 'High cholesterol, cardiovascular disease prevention, reduces LDL and triglycerides',
      dosage: '10-40mg once daily in the evening (80mg dose rarely used due to muscle risk)',
      sideEffects: 'Muscle pain, liver enzyme changes, digestive upset, headache',
      alternatives: 'Atorvastatin, rosuvastatin, pravastatin',
      priceRange: '~60-85 EGP depending on strength'
    },
    {
      id: 'enalapril-001',
      name: 'Vasotec (Enalapril 10mg)',
      rating: 5,
      price: 52.00,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
      brandNames: 'Vasotec / Renitec / Generic Enalapril',
      activeIngredient: 'Enalapril 2.5mg, 5mg, 10mg, 20mg (ACE Inhibitor)',
      treats: 'High blood pressure, heart failure, protects kidneys in diabetes',
      dosage: '5-40mg daily (divided into 1-2 doses)',
      sideEffects: 'Dry cough (common), dizziness, fatigue, elevated potassium (monitor levels)',
      alternatives: 'Other ACE inhibitors (lisinopril, ramipril), ARBs (losartan, valsartan)',
      priceRange: '~45-65 EGP depending on strength'
    },
    {
      id: 'amlodipine-001',
      name: 'Norvasc (Amlodipine 5mg)',
      rating: 5,
      price: 48.00,
      image: 'https://images.unsplash.com/photo-1550572017-4a6e8c4f2c3e?w=400&h=300&fit=crop',
      brandNames: 'Norvasc / Generic Amlodipine',
      activeIngredient: 'Amlodipine 5mg, 10mg (Calcium Channel Blocker)',
      treats: 'High blood pressure, angina (chest pain), coronary artery disease',
      dosage: '5-10mg once daily (can be taken any time of day)',
      sideEffects: 'Ankle swelling, flushing, headache, dizziness, palpitations',
      alternatives: 'Other calcium channel blockers (nifedipine, diltiazem), ACE inhibitors, ARBs',
      priceRange: '~40-60 EGP depending on strength'
    },
    {
      id: 'atenolol-001',
      name: 'Tenormin (Atenolol 50mg)',
      rating: 4,
      price: 42.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Tenormin / Generic Atenolol',
      activeIngredient: 'Atenolol 25mg, 50mg, 100mg (Beta-blocker - selective beta-1)',
      treats: 'High blood pressure, angina, irregular heartbeat, post-heart attack protection',
      dosage: '25-100mg once daily (morning dose preferred)',
      sideEffects: 'Fatigue, cold hands/feet, slow heart rate, dizziness (caution in asthma/COPD)',
      alternatives: 'Other beta-blockers (metoprolol, bisoprolol, carvedilol)',
      priceRange: '~35-55 EGP depending on strength'
    },
    {
      id: 'aspirin-cardio-001',
      name: 'Aspirin Cardio 100mg',
      rating: 5,
      price: 28.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Aspirin Cardio / Aspirin Protect / Low-dose Aspirin',
      activeIngredient: 'Aspirin (Acetylsalicylic acid) 75mg, 100mg (Antiplatelet agent)',
      treats: 'Cardiovascular disease prevention, reduces risk of heart attack and stroke (blood thinner)',
      dosage: '75-100mg once daily (usually taken with food)',
      sideEffects: 'Stomach upset, bleeding risk, bruising (avoid if bleeding disorder)',
      alternatives: 'Clopidogrel (Plavix), ticagrelor (for specific indications)',
      priceRange: '~25-35 EGP for enteric-coated formulations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 rounded-full p-3">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
              Heart & Cholesterol
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            Cardiovascular health - medications for cholesterol management, blood pressure control, and heart health.
          </p>
        </div>

        {/* Regular Monitoring Warning Banner */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-md">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⚠️ CRITICAL: ONGOING MEDICAL SUPERVISION REQUIRED
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Cardiovascular Medications Require Regular Monitoring</h3>
              <p className="text-sm text-gray-800 leading-relaxed mb-3">
                <strong>Heart and cholesterol medications are long-term treatments that require ongoing medical supervision and regular monitoring.</strong>
              </p>
              <ul className="text-sm text-gray-800 space-y-1 ml-4">
                <li>• <strong>Never stop suddenly:</strong> Especially beta-blockers and statins - can cause rebound effects or cardiovascular events</li>
                <li>• <strong>Regular blood tests:</strong> Cholesterol panels, liver function (for statins), kidney function, potassium levels</li>
                <li>• <strong>Blood pressure monitoring:</strong> Home monitoring recommended for blood pressure medications</li>
                <li>• <strong>Report side effects:</strong> Muscle pain (statins), persistent cough (ACE inhibitors), swelling, dizziness</li>
                <li>• <strong>Drug interactions:</strong> Inform all doctors about medications - many interactions possible</li>
                <li>• <strong>Lifestyle is essential:</strong> Medications work best with diet, exercise, smoking cessation, weight management</li>
                <li>• <strong>Take as prescribed:</strong> Consistency is critical for cardiovascular protection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Cardiovascular Medications Banner */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex items-start gap-3">
            <Pill className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Understanding Different Cardiovascular Medications</h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                <p><strong>Statins (Cholesterol-lowering):</strong> Atorvastatin, simvastatin, rosuvastatin. Block cholesterol production in liver. Reduce LDL ("bad" cholesterol) and cardiovascular risk. Take in evening. Monitor liver function and muscle symptoms.</p>
                <p><strong>ACE Inhibitors (Blood Pressure):</strong> Enalapril, lisinopril, ramipril. Relax blood vessels, reduce blood pressure, protect heart and kidneys. Common side effect: dry cough. Monitor potassium levels.</p>
                <p><strong>Beta-blockers (Heart Rate & BP):</strong> Atenolol, metoprolol, bisoprolol. Slow heart rate, reduce blood pressure, protect after heart attack. Never stop suddenly. May cause fatigue.</p>
                <p><strong>Calcium Channel Blockers (Blood Pressure):</strong> Amlodipine, nifedipine. Relax blood vessels, reduce blood pressure and angina. May cause ankle swelling.</p>
                <p><strong>Antiplatelet Agents (Blood Thinners):</strong> Low-dose aspirin, clopidogrel. Prevent blood clots, reduce heart attack/stroke risk. Monitor for bleeding.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lifestyle Modifications Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Lifestyle Modifications Are Essential</h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                <p><strong>Diet:</strong> Heart-healthy diet (Mediterranean, DASH). Reduce saturated fats, trans fats, sodium. Increase fruits, vegetables, whole grains, fish, nuts.</p>
                <p><strong>Exercise:</strong> At least 150 minutes moderate aerobic activity per week. Consult doctor before starting new exercise program.</p>
                <p><strong>Weight Management:</strong> Maintain healthy BMI. Even 5-10% weight loss can significantly improve cardiovascular health.</p>
                <p><strong>Smoking Cessation:</strong> Critical for cardiovascular health. Seek support programs if needed.</p>
                <p><strong>Alcohol:</strong> Limit intake. Excessive alcohol raises blood pressure and triglycerides.</p>
                <p><strong>Stress Management:</strong> Chronic stress affects heart health. Practice relaxation techniques, adequate sleep.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Available Heart & Cholesterol Medicines
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
            <strong>Disclaimer:</strong> Medicine Finder provides information only. We do not provide medical advice, diagnosis, or treatment. <strong>Cardiovascular medications require ongoing medical supervision. Never start, stop, or change doses without consulting your doctor. Seek immediate medical attention for chest pain, severe shortness of breath, sudden weakness, or signs of stroke.</strong> Always verify prices and availability directly with the pharmacy.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HeartCholesterol;

