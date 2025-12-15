import React from 'react';
import MedicineCard from '../../components/common/MedicineCard';
import { Wind, Pill, Info } from 'lucide-react';

const RespiratoryHealth = () => {
  const medicines = [
    {
      id: 'salbutamol-001',
      name: 'Ventolin Evohaler (Salbutamol Inhaler)',
      rating: 5,
      price: 70.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Ventolin Evohaler / Ventolin Diskus',
      activeIngredient: 'Salbutamol (albuterol)',
      treats: 'Acute bronchospasm, asthma attacks, COPD exacerbations (relief inhaler)',
      dosage: 'Inhaler: 100–200 mcg per actuation; as prescribed (use spacer if recommended)',
      sideEffects: 'Tremor, palpitations, headache, mild nervousness',
      alternatives: 'Other short-acting beta-agonists; controller inhalers for chronic use',
      priceRange: 'Ventolin inhalers available online ~55–86 EGP (varies by pharmacy/pack)'
    },
    {
      id: 'salbutamol-002',
      name: 'Ventolin Diskus (Salbutamol Powder Inhaler)',
      rating: 5,
      price: 75.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Ventolin Diskus',
      activeIngredient: 'Salbutamol (albuterol) dry powder',
      treats: 'Acute bronchospasm, asthma attacks, COPD exacerbations',
      dosage: '200 mcg per inhalation; as prescribed',
      sideEffects: 'Tremor, palpitations, headache, mild nervousness',
      alternatives: 'Ventolin Evohaler, other short-acting beta-agonists',
      priceRange: '~70-90 EGP depending on pharmacy'
    },
    {
      id: 'budesonide-001',
      name: 'Pulmicort Turbuhaler (Budesonide)',
      rating: 5,
      price: 120.00,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
      brandNames: 'Pulmicort Turbuhaler / Pulmicort Respules',
      activeIngredient: 'Budesonide (corticosteroid inhaler)',
      treats: 'Chronic asthma control, COPD maintenance (controller inhaler, not for acute relief)',
      dosage: '100-400 mcg twice daily or as prescribed',
      sideEffects: 'Oral thrush (rinse mouth after use), hoarseness, cough',
      alternatives: 'Other inhaled corticosteroids (fluticasone, beclomethasone)',
      priceRange: '~100-150 EGP depending on strength and pack size'
    },
    {
      id: 'ipratropium-001',
      name: 'Atrovent (Ipratropium Bromide)',
      rating: 4,
      price: 85.00,
      image: 'https://images.unsplash.com/photo-1550572017-4a6e8c4f2c3e?w=400&h=300&fit=crop',
      brandNames: 'Atrovent / Ipratropium inhaler',
      activeIngredient: 'Ipratropium bromide (anticholinergic bronchodilator)',
      treats: 'COPD, chronic bronchitis, some asthma cases',
      dosage: '20-40 mcg per actuation, 3-4 times daily or as prescribed',
      sideEffects: 'Dry mouth, cough, headache, dizziness',
      alternatives: 'Salbutamol for acute relief; combination inhalers',
      priceRange: '~75-100 EGP depending on formulation'
    },
    {
      id: 'combination-001',
      name: 'Seretide (Fluticasone + Salmeterol)',
      rating: 5,
      price: 180.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Seretide Diskus / Seretide Evohaler',
      activeIngredient: 'Fluticasone (corticosteroid) + Salmeterol (long-acting beta-agonist)',
      treats: 'Chronic asthma control, COPD maintenance (combination controller)',
      dosage: 'Varies by strength; typically twice daily as prescribed',
      sideEffects: 'Oral thrush, hoarseness, headache, tremor',
      alternatives: 'Other combination inhalers (Symbicort), separate controller + reliever',
      priceRange: '~150-220 EGP depending on strength'
    },
    {
      id: 'theophylline-001',
      name: 'Theophylline SR (Sustained Release)',
      rating: 4,
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Various theophylline brands',
      activeIngredient: 'Theophylline (oral bronchodilator)',
      treats: 'Chronic asthma, COPD (oral maintenance therapy)',
      dosage: '200-400mg twice daily or as prescribed (requires blood level monitoring)',
      sideEffects: 'Nausea, headache, insomnia, palpitations, narrow therapeutic window',
      alternatives: 'Inhaled bronchodilators preferred; combination inhalers',
      priceRange: '~35-60 EGP depending on strength and pack size'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-cyan-100 rounded-full p-3">
              <Wind className="w-8 h-8 text-cyan-600" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
              Respiratory Health
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            Relieve bronchospasm — asthma, COPD inhalers and oral bronchodilators.
          </p>
        </div>

        {/* Important Info Banner */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Important: Proper Inhaler Use</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                <strong>Correct inhaler technique is crucial for effective treatment.</strong> Many patients don't get the full benefit because of improper use.
              </p>
              <ul className="text-sm text-gray-800 space-y-1 ml-4">
                <li>• Ask your pharmacist or doctor to demonstrate proper inhaler technique</li>
                <li>• Use a spacer device if recommended (especially for children)</li>
                <li>• Rinse your mouth after using corticosteroid inhalers to prevent thrush</li>
                <li>• Keep track of doses remaining in your inhaler</li>
                <li>• Always carry your rescue inhaler (e.g., Ventolin) with you</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Controller vs Reliever Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex items-start gap-3">
            <Pill className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Understanding Your Inhalers</h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                <p><strong>Reliever Inhalers (Rescue):</strong> Fast-acting for immediate relief during asthma attacks or breathlessness (e.g., Ventolin/Salbutamol). Use as needed.</p>
                <p><strong>Controller Inhalers (Preventer):</strong> Long-term daily use to prevent symptoms and reduce inflammation (e.g., Pulmicort, Seretide). Must be used regularly even when feeling well.</p>
                <p className="text-amber-700"><strong>⚠️ Never stop controller inhalers without consulting your doctor.</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Available Respiratory Medicines
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
            <strong>Disclaimer:</strong> Medicine Finder provides information only. We do not provide medical advice, diagnosis, or treatment. Always verify prices and availability directly with the pharmacy. <strong>Consult your doctor or pharmacist for proper inhaler technique and asthma/COPD management.</strong>
          </p>
        </div>

      </div>
    </div>
  );
};

export default RespiratoryHealth;

