import React from 'react';
import { 
  Compass, 
  FileSpreadsheet, 
  Palette, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ADVISORY_STEPS } from '../data/hospitalityData';

interface AdvisoryProcessProps {
  onRequestAdvisory: () => void;
}

export const AdvisoryProcess: React.FC<AdvisoryProcessProps> = ({ onRequestAdvisory }) => {
  return (
    <section id="process" className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C827A] uppercase">
            Turnkey Art Consulting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] tracking-tight">
            How the Hospitality Advisory Works
          </h2>
          <p className="text-sm sm:text-base text-[#5E574E] leading-relaxed">
            From initial concept sketches and acoustic modeling to crating and on-site art handlers, our end-to-end service frees design teams to focus on the broader architectural vision.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVISORY_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="relative bg-white p-7 border border-[#DDD6CB] shadow-2xs hover:border-[#111111] transition-all flex flex-col justify-between"
            >
              {/* Step Number Accent */}
              <div>
                <div className="flex items-center justify-between border-b border-[#ECE7DF] pb-4 mb-4">
                  <span className="font-serif text-4xl font-light text-[#A3998F]">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#DDD6CB] flex items-center justify-center text-xs font-semibold text-[#111111]">
                    {idx === 0 && <Compass className="w-4 h-4 text-[#8C827A]" />}
                    {idx === 1 && <FileSpreadsheet className="w-4 h-4 text-[#8C827A]" />}
                    {idx === 2 && <Palette className="w-4 h-4 text-[#8C827A]" />}
                    {idx === 3 && <Truck className="w-4 h-4 text-[#8C827A]" />}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#111111] mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5C554D] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Pill */}
              <div className="pt-4 border-t border-[#F0ECE4] space-y-1.5 text-xs">
                <div className="text-[10px] uppercase font-semibold text-[#8C827A] tracking-wider">
                  Deliverable:
                </div>
                <div className="font-medium text-[#1A1A1A]">
                  {step.deliverable}
                </div>
                <div className="text-[11px] text-[#A0988F]">
                  ⏱ {step.timeline}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Value Props Strip */}
        <div className="mt-14 bg-white p-8 border border-[#DDD6CB] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-[#111111] font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-800" />
              <span>Acoustic Engineering & Fire Safety</span>
            </div>
            <p className="text-xs text-[#615A52] leading-relaxed">
              We fabricate artworks on sound-absorbing NRC 0.85+ felt substrates and fire-retardant Belgian linen meeting commercial ASTM E84 Class A code.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-[#111111] font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-800" />
              <span>Tamper-Resistant Security Mounting</span>
            </div>
            <p className="text-xs text-[#615A52] leading-relaxed">
              Every guest room and corridor piece includes concealed, lockable T-head aluminum security cleats to prevent guest tampering or earthquake dislocation.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-[#111111] font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-800" />
              <span>Consolidated Global Logistics</span>
            </div>
            <p className="text-xs text-[#615A52] leading-relaxed">
              Artworks from 40+ countries are collected in regional bonded warehouses, custom crated, and delivered to your site on your precise FF&E installation schedule.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onRequestAdvisory}
            className="px-8 py-3.5 bg-[#111111] hover:bg-[#2C2723] text-[#FAF9F6] text-xs font-semibold uppercase tracking-widest transition-all shadow-sm cursor-pointer"
          >
            Start Your Hospitality Art Brief
          </button>
        </div>

      </div>
    </section>
  );
};
