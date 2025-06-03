// src/components/dashboard/RecentVariantsInfo.tsx
import React from 'react';

const VARIANT_DATA = [
  {
    name: 'JN.1 (Omicron subvariant)',
    prevalence: '≈ 50%',
    symptoms: [
      'Fever',
      'Sore throat',
      'Cough',
      'Fatigue',
      'Runny nose',
      'Muscle aches'
    ],
    specific: [
      'Shorter incubation period',
      'Mild gastrointestinal symptoms reported in some cases'
    ]
  },
  {
    name: 'KP.3 (Omicron subvariant)',
    prevalence: '≈ 30%',
    symptoms: [
      'Fever',
      'Headache',
      'Cough',
      'Sore throat',
      'Nasal congestion'
    ],
    specific: [
      'Higher reports of loss of smell/taste',
      'More pronounced upper respiratory symptoms'
    ]
  },
  {
    name: 'LB.1 (Omicron subvariant)',
    prevalence: '≈ 10%',
    symptoms: [
      'Fever',
      'Fatigue',
      'Cough',
      'Sore throat'
    ],
    specific: [
      'Milder symptoms overall',
      'Rare reports of conjunctivitis'
    ]
  },
  {
    name: 'Other Omicron subvariants',
    prevalence: '≈ 10%',
    symptoms: [
      'Fever',
      'Cough',
      'Fatigue'
    ],
    specific: [
      'Symptoms similar to previous Omicron waves'
    ]
  }
];

const COMMON_SYMPTOMS = [
  'Fever',
  'Cough',
  'Sore throat',
  'Fatigue',
  'Runny nose',
  'Headache'
];

const RecentVariantsInfo: React.FC = () => (
  <div className="p-6">
    <h3 className="font-semibold text-lg mb-2">
      Recent Rise of COVID-19 Variants in India (April–June 2025)
    </h3>
    <p className="mb-4 text-gray-600">
      India has seen a surge in COVID-19 cases since April 2025, driven primarily by new Omicron subvariants. Here’s a summary of the most prevalent variants and their symptoms:
    </p>
    <div className="mb-4">
      <div className="font-semibold mb-1">Common Symptoms Across Variants:</div>
      <ul className="list-disc list-inside text-gray-700 text-sm mb-2">
        {COMMON_SYMPTOMS.map(symptom => (
          <li key={symptom}>{symptom}</li>
        ))}
      </ul>
    </div>
    <div>
      <div className="font-semibold mb-2">Variant-Specific Details:</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {VARIANT_DATA.map(variant => (
          <div
            key={variant.name}
            className="border border-gray-200 rounded-lg p-4 flex flex-col bg-[#f9fbfc]"
          >
            <div className="flex items-center mb-1">
              <span className="font-bold text-[#1A5276] mr-2">{variant.name}</span>
              <span className="text-xs bg-[#D6EAF8] text-[#1A5276] rounded px-2 py-0.5 ml-auto">
                {variant.prevalence} of cases
              </span>
            </div>
            <div className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Typical symptoms:</span>{" "}
              {variant.symptoms.join(", ")}
            </div>
            <div className="text-xs text-gray-600">
              <span className="font-medium">Notable features:</span>{" "}
              {variant.specific.join("; ")}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-4 text-xs text-gray-500">
      <span className="font-semibold">Note:</span> Data reflects trends up to June 2025. For medical advice, consult official health sources.
    </div>
  </div>
);

export default RecentVariantsInfo;
