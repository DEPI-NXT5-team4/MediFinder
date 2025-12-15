import React from 'react';
import MedicineCard from '../../components/common/MedicineCard';
import { Activity, Pill, AlertTriangle, Info } from 'lucide-react';

const DigestiveHealth = () => {
  const medicines = [
    {
      id: 'omeprazole-001',
      name: 'Losec/Omez (Omeprazole 20mg)',
      rating: 5,
      price: 42.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Losec / Omez / Generic Omeprazole',
      activeIngredient: 'Omeprazole 10–40 mg (Proton Pump Inhibitor - PPI)',
      treats: 'Heartburn, GERD, peptic ulcer disease, H. pylori regimens (with antibiotics)',
      dosage: '20 mg once daily for many conditions (sometimes 40 mg or twice daily per guidance)',
      sideEffects: 'Headache, GI disturbances; long-term use associated with B12 deficiency, magnesium reduction, bone risk (consult doctor)',
      alternatives: 'Other PPIs (esomeprazole, pantoprazole) or H2 blockers (ranitidine — availability varies)',
      priceRange: 'Multiple local brands available in Egypt ~35-50 EGP'
    },
    {
      id: 'esomeprazole-001',
      name: 'Nexium (Esomeprazole 40mg)',
      rating: 5,
      price: 85.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Nexium / Generic Esomeprazole',
      activeIngredient: 'Esomeprazole 20mg, 40mg (PPI - S-isomer of omeprazole)',
      treats: 'GERD, erosive esophagitis, peptic ulcers, H. pylori eradication',
      dosage: '20-40mg once daily before meals (typically 30-60 minutes before eating)',
      sideEffects: 'Headache, diarrhea, nausea; long-term risks similar to omeprazole',
      alternatives: 'Omeprazole, pantoprazole, lansoprazole',
      priceRange: '~75-100 EGP depending on strength and pack size'
    },
    {
      id: 'pantoprazole-001',
      name: 'Controloc (Pantoprazole 40mg)',
      rating: 5,
      price: 68.00,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
      brandNames: 'Controloc / Pantoloc / Generic Pantoprazole',
      activeIngredient: 'Pantoprazole 20mg, 40mg (PPI)',
      treats: 'GERD, erosive esophagitis, Zollinger-Ellison syndrome, peptic ulcers',
      dosage: '40mg once daily (can be taken with or without food)',
      sideEffects: 'Headache, diarrhea, abdominal pain; long-term use risks similar to other PPIs',
      alternatives: 'Omeprazole, esomeprazole, lansoprazole',
      priceRange: '~60-80 EGP depending on formulation'
    },
    {
      id: 'lansoprazole-001',
      name: 'Prevacid (Lansoprazole 30mg)',
      rating: 4,
      price: 72.00,
      image: 'https://images.unsplash.com/photo-1550572017-4a6e8c4f2c3e?w=400&h=300&fit=crop',
      brandNames: 'Prevacid / Generic Lansoprazole',
      activeIngredient: 'Lansoprazole 15mg, 30mg (PPI)',
      treats: 'GERD, duodenal ulcers, gastric ulcers, H. pylori eradication',
      dosage: '15-30mg once daily before meals (morning dose preferred)',
      sideEffects: 'Diarrhea, headache, nausea; long-term risks include B12 deficiency, bone fractures',
      alternatives: 'Omeprazole, esomeprazole, pantoprazole',
      priceRange: '~65-85 EGP depending on strength'
    },
    {
      id: 'famotidine-001',
      name: 'Pepcid (Famotidine 40mg)',
      rating: 4,
      price: 48.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      brandNames: 'Pepcid / Generic Famotidine',
      activeIngredient: 'Famotidine 20mg, 40mg (H2-receptor antagonist)',
      treats: 'Heartburn, GERD, peptic ulcers (less potent than PPIs but faster onset)',
      dosage: '20mg twice daily or 40mg once daily at bedtime',
      sideEffects: 'Headache, dizziness, constipation or diarrhea (generally well-tolerated)',
      alternatives: 'PPIs for more severe cases; other H2-blockers (ranitidine if available)',
      priceRange: '~40-60 EGP depending on strength and pack size'
    },
    {
      id: 'combination-001',
      name: 'Gaviscon (Antacid + Alginate)',
      rating: 4,
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      brandNames: 'Gaviscon / Similar antacid combinations',
      activeIngredient: 'Sodium alginate + Antacids (calcium carbonate, sodium bicarbonate)',
      treats: 'Immediate heartburn relief, acid reflux (forms protective barrier)',
      dosage: 'Chewable tablets or liquid after meals and at bedtime as needed',
      sideEffects: 'Constipation (calcium-based), diarrhea (magnesium-based), bloating',
      alternatives: 'PPIs or H2-blockers for chronic use; other antacids (Maalox, Tums)',
      priceRange: '~30-45 EGP for liquid or tablet formulations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 rounded-full p-3">
              <Activity className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
              Digestive Health
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            Acid suppression for GERD, peptic ulcers, dyspepsia.
          </p>
        </div>

        {/* Long-term PPI Use Warning Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-md">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⚠️ IMPORTANT: LONG-TERM PPI USE
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Use PPIs Only as Directed</h3>
              <p className="text-sm text-gray-800 leading-relaxed mb-3">
                <strong>Proton Pump Inhibitors (PPIs) are effective for acid-related conditions but should not be used long-term without medical supervision.</strong>
              </p>
              <ul className="text-sm text-gray-800 space-y-1 ml-4">
                <li>• <strong>Long-term risks:</strong> Vitamin B12 deficiency, magnesium reduction, increased bone fracture risk</li>
                <li>• <strong>Use lowest effective dose</strong> for the shortest duration necessary</li>
                <li>• <strong>Don't self-medicate</strong> for more than 2 weeks without consulting a doctor</li>
                <li>• <strong>Regular monitoring</strong> may be needed for extended use</li>
                <li>• <strong>Consider lifestyle changes:</strong> Diet, weight management, avoid trigger foods</li>
                <li>• <strong>Gradual discontinuation</strong> may be needed to avoid rebound acid hypersecretion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Acid-Reducers Banner */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex items-start gap-3">
            <Pill className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Understanding Different Acid-Reducers</h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                <p><strong>PPIs (Proton Pump Inhibitors):</strong> Most potent acid suppressors (omeprazole, esomeprazole, pantoprazole, lansoprazole). Block acid production at the source. Take 30-60 minutes before meals. Full effect may take 1-4 days.</p>
                <p><strong>H2-Blockers (H2-Receptor Antagonists):</strong> Moderate acid suppression (famotidine, ranitidine). Faster onset than PPIs but less potent. Good for nighttime heartburn. Can be taken with or without food.</p>
                <p><strong>Antacids:</strong> Immediate but short-term relief (Gaviscon, Maalox, Tums). Neutralize existing acid. Work within minutes but last only 1-2 hours. Best for occasional heartburn.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Proper Usage Guidelines Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Proper Usage Guidelines</h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                <p><strong>Timing Matters:</strong> PPIs work best when taken 30-60 minutes before your first meal of the day. H2-blockers can be taken at bedtime for nighttime symptoms.</p>
                <p><strong>Duration:</strong> Most over-the-counter acid reducers are intended for 14-day courses. If symptoms persist, consult your doctor rather than continuing self-treatment.</p>
                <p><strong>Lifestyle Changes:</strong> Medications work best when combined with lifestyle modifications: avoid trigger foods (spicy, fatty, acidic), eat smaller meals, don't lie down immediately after eating, elevate head of bed, maintain healthy weight.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Available Digestive Health Medicines
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
            <strong>Disclaimer:</strong> Medicine Finder provides information only. We do not provide medical advice, diagnosis, or treatment. <strong>If symptoms persist for more than 2 weeks, or if you experience severe symptoms (difficulty swallowing, persistent vomiting, black stools, unexplained weight loss), seek immediate medical attention.</strong> Always verify prices and availability directly with the pharmacy.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DigestiveHealth;

