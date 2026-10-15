import { useState } from 'react';
import { Leaf, CheckCircle2, AlertTriangle, ShieldCheck, Activity, Droplets } from 'lucide-react';

interface CropSample {
  crop: string;
  condition: string;
  confidence: number;
  status: 'Diseased' | 'Healthy';
  image: string;
  symptoms: string[];
  organicTreatment: string;
  chemicalTreatment: string;
  preventativeMeasures: string;
}

export function CropDiagnosisVisualizer() {
  const samples: CropSample[] = [
    {
      crop: 'Tomato (Solanum lycopersicum)',
      condition: 'Early Blight (Alternaria solani)',
      confidence: 97.4,
      status: 'Diseased',
      image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80',
      symptoms: [
        'Concentric dark brown rings forming target-like patterns on lower leaves',
        'Yellow chlorotic halos surrounding lesions',
        'Premature defoliation starting from basal foliage'
      ],
      organicTreatment: 'Apply copper octanoate spray; remove and incinerate infected lower foliage; spray Bacillus subtilis biopesticide at 7-day intervals.',
      chemicalTreatment: 'Foliar application of Chlorothalonil (0.2%) or Azoxystrobin (0.1%) targeted at stem and under-leaf surfaces.',
      preventativeMeasures: 'Ensure drip irrigation instead of overhead watering; implement 3-year solanaceous crop rotation; stake plants for airflow.'
    },
    {
      crop: 'Potato (Solanum tuberosum)',
      condition: 'Late Blight (Phytophthora infestans)',
      confidence: 98.1,
      status: 'Diseased',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
      symptoms: [
        'Water-soaked dark lesions spreading rapidly across leaf tips',
        'White fungal sporulation visible on the underside during humid conditions',
        'Rapid stem collapse under sustained high humidity'
      ],
      organicTreatment: 'Bio-fungicide application of Trichoderma viride; maintain strict canopy thinning to lower humidity beneath 70%.',
      chemicalTreatment: 'Mancozeb (75% WP @ 2.5g/L) alternating with Metalaxyl-Mancozeb for active systemic control.',
      preventativeMeasures: 'Plant certified disease-free seed tubers; inspect field weekly during foggy or cool, wet weather.'
    },
    {
      crop: 'Bell Pepper (Capsicum annuum)',
      condition: 'Bacterial Spot (Xanthomonas campestris)',
      confidence: 95.8,
      status: 'Diseased',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80',
      symptoms: [
        'Small, greasy water-soaked circular lesions turning purple-brown',
        'Leaf drop leading to sunscald on developing fruit',
        'Rough raised corky spots on infected foliage'
      ],
      organicTreatment: 'Copper hydroxide combined with neem extract formulation; sterilize all pruning shears in 10% bleach.',
      chemicalTreatment: 'Fixed copper fungicides tank-mixed with Mancozeb to bypass copper-tolerant bacterial strains.',
      preventativeMeasures: 'Use hot-water treated seeds; avoid working in pepper fields when foliage is wet from rain or dew.'
    },
    {
      crop: 'Apple / Orchard Leaf',
      condition: 'Healthy Leaf Tissue (No Pathogen Detected)',
      confidence: 99.2,
      status: 'Healthy',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80',
      symptoms: [
        'Uniform chlorophyll distribution with intact cell walls',
        'No fungal hyphae or bacterial spotting detected',
        'Optimal leaf turgor and healthy venation'
      ],
      organicTreatment: 'Standard seasonal compost tea foliar spray to fortify beneficial leaf microbiome.',
      chemicalTreatment: 'No chemical intervention required. Continue standard agronomic feeding schedule.',
      preventativeMeasures: 'Maintain balanced nitrogen fertilization to avoid excessive succulent tissue vulnerable to aphid vectors.'
    }
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = samples[selectedIdx];

  return (
    <div className="rounded-2xl bg-[#090d18] border border-slate-800 p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>MobileNetV2 Inference & Recommendation Engine</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Live Pathology Classification Simulator
          </h3>
        </div>

        <span className="text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
          Latency: ~115ms (Edge Optimized)
        </span>
      </div>

      {/* Select sample */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {samples.map((s, idx) => (
          <button
            key={s.condition}
            onClick={() => setSelectedIdx(idx)}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              selectedIdx === idx
                ? 'bg-cyan-950/50 border-cyan-500 shadow-md shadow-cyan-950'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-400'
            }`}
          >
            <div className="text-[11px] font-mono text-cyan-400 truncate font-semibold mb-0.5">
              {s.crop.split(' ')[0]}
            </div>
            <div className={`text-xs font-bold truncate ${selectedIdx === idx ? 'text-white' : 'text-slate-300'}`}>
              {s.condition.split(' ')[0]}
            </div>
          </button>
        ))}
      </div>

      {/* Main output breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#060913] rounded-xl border border-slate-800/80 p-5">
        {/* Leaf image preview with bounding overlay */}
        <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-slate-800 min-h-[220px]">
          <img
            src={active.image}
            alt={active.condition}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
            <span className={`px-2.5 py-1 rounded-md font-semibold text-xs ${
              active.status === 'Healthy'
                ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/60'
                : 'bg-amber-950/80 text-amber-300 border border-amber-700/60'
            }`}>
              {active.status}
            </span>
            <span className="font-mono text-cyan-400 bg-slate-900/90 px-2 py-1 rounded border border-slate-700">
              Confidence: {active.confidence}%
            </span>
          </div>
        </div>

        {/* Diagnosis & Care Plan */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Predicted Condition
            </div>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span>{active.condition}</span>
            </h4>
            <p className="text-xs text-cyan-300 font-mono mt-0.5">
              Host Plant: {active.crop}
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Diagnostic Morphological Markers</span>
            </div>
            <ul className="space-y-1 text-xs text-slate-400">
              {active.symptoms.map((symptom, i) => (
                <li key={i} className="flex items-start space-x-1.5">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment advisory */}
          <div className="pt-3 border-t border-slate-800 space-y-3">
            <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs">
              <span className="font-semibold text-emerald-300 flex items-center gap-1.5 mb-1">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Organic & Biological Protocol:</span>
              </span>
              <p className="text-slate-300 leading-relaxed">{active.organicTreatment}</p>
            </div>

            <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-900/40 text-xs">
              <span className="font-semibold text-blue-300 flex items-center gap-1.5 mb-1">
                <Droplets className="w-3.5 h-3.5 text-blue-400" />
                <span>Chemical & Therapeutic Prescription:</span>
              </span>
              <p className="text-slate-300 leading-relaxed">{active.chemicalTreatment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
