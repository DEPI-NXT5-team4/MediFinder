import React from 'react';
import MedicineCard from '../../components/common/MedicineCard';
import { Activity, Pill, AlertCircle, Droplet } from 'lucide-react';

const DiabetesCare = () => {
  const medicines = [
    {
      id: 'metformin-001',
      name: 'Glucophage (Metformin 500mg)',
      rating: 5,
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Glucophage / Glucophage XR',
      activeIngredient: 'Metformin hydrochloride (500 mg, 850 mg, 1000 mg)',
      treats: 'Type 2 diabetes mellitus, insulin sensitizer; also used for PCOS',
      dosage: '500 mg–2000 mg/day (divided doses) depending on formulation (immediate vs XR)',
      sideEffects: 'GI upset (nausea, diarrhea), rare lactic acidosis in kidney impairment',
      alternatives: 'Other oral agents (sulfonylureas, DPP-4 inhibitors, SGLT2 inhibitors) — depend on physician',
      priceRange: 'Glucophage formulations available (e.g., 500 mg pack) — price varies by retailer'
    },
    {
      id: 'metformin-002',
      name: 'Glucophage XR (Metformin Extended Release 750mg)',
      rating: 5,
      price: 65.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Glucophage XR',
      activeIngredient: 'Metformin hydrochloride extended release (750mg, 1000mg)',
      treats: 'Type 2 diabetes mellitus (once-daily dosing for better compliance)',
      dosage: '750mg-2000mg once daily with evening meal',
      sideEffects: 'Similar to regular metformin but may have fewer GI side effects',
      alternatives: 'Regular metformin, other oral antidiabetics',
      priceRange: '~60-80 EGP depending on strength and pack size'
    },
    {
      id: 'glimepiride-001',
      name: 'Amaryl (Glimepiride 2mg)',
      rating: 4,
      price: 55.00,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
      brandNames: 'Amaryl / Generic Glimepiride',
      activeIngredient: 'Glimepiride (sulfonylurea) - 1mg, 2mg, 3mg, 4mg',
      treats: 'Type 2 diabetes mellitus (stimulates insulin secretion from pancreas)',
      dosage: '1-4mg once daily with breakfast or first main meal',
      sideEffects: 'Hypoglycemia (low blood sugar), weight gain, nausea',
      alternatives: 'Other sulfonylureas (gliclazide), metformin, DPP-4 inhibitors',
      priceRange: '~45-70 EGP depending on strength'
    },
    {
      id: 'gliclazide-001',
      name: 'Diamicron MR (Gliclazide Modified Release 60mg)',
      rating: 4,
      price: 58.00,
      image: 'https://images.unsplash.com/photo-1550572017-4a6e8c4f2c3e?w=400&h=300&fit=crop',
      brandNames: 'Diamicron MR / Generic Gliclazide',
      activeIngredient: 'Gliclazide modified release (sulfonylurea) - 30mg, 60mg',
      treats: 'Type 2 diabetes mellitus (stimulates insulin release)',
      dosage: '30-120mg once daily with breakfast',
      sideEffects: 'Hypoglycemia, weight gain, GI upset',
      alternatives: 'Glimepiride, metformin, combination therapy',
      priceRange: '~50-75 EGP depending on strength and pack size'
    },
    {
      id: 'sitagliptin-001',
      name: 'Januvia (Sitagliptin 100mg)',
      rating: 5,
      price: 180.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Januvia / Generic Sitagliptin',
      activeIngredient: 'Sitagliptin (DPP-4 inhibitor) - 50mg, 100mg',
      treats: 'Type 2 diabetes mellitus (enhances incretin hormones, glucose-dependent insulin release)',
      dosage: '100mg once daily (50mg if kidney impairment)',
      sideEffects: 'Generally well-tolerated; upper respiratory infection, headache, rare pancreatitis',
      alternatives: 'Other DPP-4 inhibitors (vildagliptin), metformin, SGLT2 inhibitors',
      priceRange: '~150-220 EGP for 28 tablets'
    },
    {
      id: 'combination-001',
      name: 'Janumet (Sitagliptin + Metformin)',
      rating: 5,
      price: 220.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Janumet / Janumet XR',
      activeIngredient: 'Sitagliptin 50mg + Metformin 500mg/850mg/1000mg (combination)',
      treats: 'Type 2 diabetes mellitus (dual mechanism: DPP-4 inhibitor + insulin sensitizer)',
      dosage: 'Varies by formulation; typically twice daily with meals (or once daily for XR)',
      sideEffects: 'Combination of both drugs: GI upset from metformin, headache',
      alternatives: 'Separate metformin + DPP-4 inhibitor, other combination therapies',
      priceRange: '~200-280 EGP depending on strength and formulation'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 rounded-full p-3">
              <Activity className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
              Diabetes Care
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            Medicines for blood sugar control in type 2 diabetes (oral agents).
          </p>
        </div>

        {/* Important Blood Sugar Monitoring Banner */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-orange-300 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-md">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⚠️ IMPORTANT: BLOOD SUGAR MONITORING
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Regular Monitoring is Essential</h3>
              <p className="text-sm text-gray-800 leading-relaxed mb-3">
                <strong>Diabetes requires ongoing medical supervision and regular blood sugar monitoring.</strong> These medications must be taken as prescribed by your doctor.
              </p>
              <ul className="text-sm text-gray-800 space-y-1 ml-4">
                <li>• <strong>Monitor blood glucose regularly</strong> as directed by your doctor</li>
                <li>• <strong>Watch for hypoglycemia signs:</strong> shakiness, sweating, confusion, dizziness, hunger</li>
                <li>• <strong>Never adjust doses</strong> without consulting your doctor</li>
                <li>• <strong>Maintain healthy diet and exercise</strong> as part of diabetes management</li>
                <li>• <strong>Regular HbA1c testing</strong> to monitor long-term blood sugar control</li>
                <li>• <strong>Report side effects</strong> to your doctor immediately</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Medication Types Info Banner */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex items-start gap-3">
            <Pill className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Understanding Antidiabetic Medications</h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                <p><strong>Metformin (Biguanides):</strong> First-line treatment for type 2 diabetes. Improves insulin sensitivity and reduces glucose production in the liver. Take with meals to reduce GI side effects.</p>
                <p><strong>Sulfonylureas (Glimepiride, Gliclazide):</strong> Stimulate pancreas to release more insulin. Risk of hypoglycemia and weight gain. Take with meals.</p>
                <p><strong>DPP-4 Inhibitors (Sitagliptin):</strong> Enhance natural incretin hormones for glucose-dependent insulin release. Lower risk of hypoglycemia. Can be taken with or without food.</p>
                <p><strong>Combination Therapy:</strong> Often more effective than single agents. Targets multiple mechanisms of blood sugar control.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lifestyle Management Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex items-start gap-3">
            <Droplet className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Lifestyle is Key to Diabetes Management</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Medications work best when combined with healthy lifestyle choices: balanced diet, regular physical activity, weight management, stress reduction, and adequate sleep. Work with your healthcare team to develop a comprehensive diabetes management plan.
              </p>
            </div>
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Available Antidiabetic Medicines
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
            <strong>Disclaimer:</strong> Medicine Finder provides information only. We do not provide medical advice, diagnosis, or treatment. <strong>Diabetes medications require medical supervision. Always consult your doctor before starting, stopping, or changing diabetes medications.</strong> Always verify prices and availability directly with the pharmacy.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DiabetesCare;

