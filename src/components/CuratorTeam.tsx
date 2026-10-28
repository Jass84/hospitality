import React from 'react';
import { Mail, Phone, Award, Sparkles, Building2, Check, Palette } from 'lucide-react';
import { ADVISORY_TEAM, BRAND_NAME } from '../data/hospitalityData';

interface CuratorTeamProps {
  onRequestAdvisory: () => void;
}

export const CuratorTeam: React.FC<CuratorTeamProps> = ({ onRequestAdvisory }) => {
  return (
    <section id="curators" className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C827A] uppercase">
            Atelier Curatorial Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] tracking-tight">
            Meet Your Fine Art & Portrait Curators
          </h2>
          <p className="text-sm sm:text-base text-[#5E574E] leading-relaxed">
            Our atelier curators pair classical art-world provenance and portrait atelier leadership with architectural discipline, having guided art programs for premier hotel brands worldwide.
          </p>
        </div>

        {/* Curators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVISORY_TEAM.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#DDD6CB] shadow-2xs hover:border-[#111111] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Curator Portrait */}
                <div className="relative aspect-4/5 overflow-hidden bg-[#ECE7DE]">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#111111]/85 backdrop-blur-xs text-[#FAF9F6] text-[10px] font-medium tracking-wide px-2 py-0.5">
                    {member.focus}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-xl font-medium text-[#111111]">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#8C827A] uppercase tracking-wider">
                    {member.role}
                  </div>
                  <p className="text-xs text-[#5C554D] leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={onRequestAdvisory}
                  className="w-full py-2 bg-[#FAF9F6] hover:bg-[#F2EDE4] text-[#111111] border border-[#DDD6CB] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Connect with {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Reach Callout Banner */}
        <div className="mt-14 p-8 bg-[#F4EFE6] border border-[#DDD6CB] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-2xl font-medium text-[#111111]">
              Atelier Studios in Paris, London & New York
            </h4>
            <p className="text-xs sm:text-sm text-[#615A52]">
              Commissioning master portraits and fine art works from premier international ateliers with turnkey crating and white-glove museum installation worldwide.
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <button
              onClick={onRequestAdvisory}
              className="px-6 py-3 bg-[#111111] hover:bg-[#2C2723] text-white text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
            >
              Book Curatorial Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
