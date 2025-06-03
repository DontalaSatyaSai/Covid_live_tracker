import React from "react";

const VARIANTS = [
  {
    name: "NB.1.8.1",
    percent: 45,
    description: "Currently the most common variant in India; spreads rapidly but not causing severe illness.",
    symptom: "Muscle pain"
  },
  {
    name: "LF.7",
    percent: 30,
    description: "Detected in Gujarat and spreading in several states; under WHO monitoring.",
    symptom: "Headache"
  },
  {
    name: "JN.1",
    percent: 20,
    description: "Linked to mild respiratory and digestive symptoms; present in Kerala, Maharashtra, Delhi.",
    symptom: "Shortness of breath"
  },
  {
    name: "XFG",
    percent: 5,
    description: "Rare, but notable for causing hoarse voice and mild symptoms.",
    symptom: "Hoarse voice"
  }
];

// 7 common symptoms with suitable icons
const COMMON_SYMPTOMS = [
  { label: "Fever", icon: "🌡️" },
  { label: "Cough", icon: "😷" },
  { label: "Sore throat", icon: "🗣️" },
  { label: "Runny nose", icon: "💧" },
  { label: "Headache", icon: "🤕" },
  { label: "Loose motion", icon: "🚽" },
  { label: "Fatigue", icon: "😴" }
];

const COLORS = ["#E3F2FD", "#D1F2EB", "#FDEBD0", "#FADBD8"];

const VariantsVisual: React.FC = () => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-full">
    <h3 className="font-bold text-lg mb-1 text-[#1A5276] text-center">
      COVID-19 Variants Rise in India
    </h3>
    <div className="mb-4 text-gray-600 text-center">
      Latest prevalent variants and their symptoms
    </div>
    {/* Variant cards in a 2x2 grid */}
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {VARIANTS.map((v, i) => (
        <div
          key={v.name}
          className="rounded-2xl shadow flex flex-col items-center p-4"
          style={{
            background: COLORS[i % COLORS.length],
            border: `2px solid #BFC9CA`,
            minHeight: 120
          }}
        >
          <span className="font-bold text-[#1A5276] text-base mb-1">
            {v.name} <span className="font-normal text-gray-700">({v.percent}%)</span>
          </span>
          <span className="text-sm text-gray-700 mb-2 text-center">{v.description}</span>
          <div className="text-xs text-[#1A5276] font-medium">
            <span className="font-semibold">Specific symptom:</span> {v.symptom}
          </div>
        </div>
      ))}
    </div>
    {/* Common symptoms */}
    <div className="mb-2 w-full">
      <div className="font-semibold mb-1 text-center">Common Symptoms</div>
      <div className="flex flex-wrap justify-center gap-6">
        {COMMON_SYMPTOMS.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-[#1A5276] min-w-[70px]">
            <span style={{ fontSize: 32 }}>{s.icon}</span>
            <span className="text-sm mt-1">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default VariantsVisual;
